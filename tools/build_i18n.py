"""Bake the site into one static page per language: / (vi), /en/, /zh/.

Source of truth:
  - page markup: the Vietnamese pages at the repo root (index.html, privacy.html,
    terms.html, products/*.html). Edit those, not the copies under en/ or zh/.
  - all translatable text: tools/strings.js (vi / en / zh), keyed by the
    data-i18n / data-i18n-html / data-i18n-attr attributes in the markup.

For every page and language this script fills in the text, sets <html lang>,
the canonical URL, hreflang alternates, og:locale/url/title/description, the
VI/EN/zh switcher links, product audience (data-show-langs -> hidden), and
rewrites shared-asset paths for the /en/ and /zh/ trees. The Vietnamese pages
are rewritten in place (idempotent). Then it regenerates sitemap.xml and
stamps asset URLs (tools/bump_assets.py).

Run after ANY change to a page or to tools/strings.js:
    python tools/build_i18n.py
"""
import glob, html, io, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://auralink.io.vn/"
LANGS = ["vi", "en", "zh"]
HTML_LANG = {"vi": "vi", "en": "en", "zh": "zh-CN"}
OG_LOCALE = {"vi": "vi_VN", "en": "en_US", "zh": "zh_CN"}
LABEL = {"vi": "VI", "en": "EN", "zh": "中"}
PREFIX = {"vi": "", "en": "en/", "zh": "zh/"}
X_DEFAULT = "en"
SHARED = r"(?:assets/|favicon\.|apple-touch-icon|icon-\d+\.png|site\.webmanifest)"
VOID = {"meta", "link", "img", "br", "hr", "input", "source", "area", "base", "col", "embed", "track", "wbr"}

def load_strings():
    code = "process.stdout.write(JSON.stringify(require(process.argv[1])))"
    out = subprocess.run(["node", "-e", code, os.path.join(ROOT, "tools", "strings.js")],
                         capture_output=True, check=True)
    return json.loads(out.stdout.decode("utf-8"))

def source_pages():
    pages = ["index.html", "privacy.html", "terms.html"]
    pages += sorted("products/" + os.path.basename(p) for p in glob.glob(os.path.join(ROOT, "products", "*.html")))
    return pages

def abs_url(lang, page):
    path = "" if page == "index.html" else page
    return SITE + PREFIX[lang] + path

def rel_url(from_lang, page, to_lang):
    depth = (PREFIX[from_lang] + page).count("/")
    return "../" * depth + PREFIX[to_lang] + page

# ---------------------------------------------------------------- tag helpers
START = re.compile(r"<([a-zA-Z][a-zA-Z0-9]*)(\s[^<>]*?)?(/?)>")

def attr_get(attrs, name):
    m = re.search(r'\s%s="([^"]*)"' % re.escape(name), attrs or "")
    return m.group(1) if m else None

def attr_set(attrs, name, value):
    attrs = attrs or ""
    val = value.replace("&", "&amp;").replace('"', "&quot;")
    if re.search(r'\s%s="[^"]*"' % re.escape(name), attrs):
        return re.sub(r'(\s%s=)"[^"]*"' % re.escape(name), lambda m: m.group(1) + '"' + val + '"', attrs, count=1)
    return attrs + ' %s="%s"' % (name, val)

def attr_del(attrs, name):
    return re.sub(r'\s%s(="[^"]*")?(?=[\s/]|$)' % re.escape(name), "", attrs or "")

def close_of(s, tag, pos):
    """Index of the matching </tag> for an element whose start tag ends at pos."""
    depth = 1
    for m in re.finditer(r"<(/?)%s\b[^>]*>" % tag, s[pos:], re.I):
        if m.group(1): depth -= 1
        elif not m.group(0).endswith("/>"): depth += 1
        if depth == 0:
            return pos + m.start(), pos + m.end()
    raise ValueError("unclosed <%s> at %d" % (tag, pos))

def edit_elements(s, want, fn):
    """Call fn(tag, attrs, inner) -> (attrs, inner|None) for start tags matching want(attrs),
    innermost last-first so indices stay valid."""
    hits = [m for m in START.finditer(s) if want(m.group(2) or "")]
    for m in reversed(hits):
        tag, attrs = m.group(1).lower(), m.group(2) or ""
        if tag in VOID or m.group(3):
            new_attrs, _ = fn(tag, attrs, None)
            s = s[:m.start()] + "<%s%s%s>" % (m.group(1), new_attrs, m.group(3)) + s[m.end():]
            continue
        c0, c1 = close_of(s, tag, m.end())
        new_attrs, inner = fn(tag, attrs, s[m.end():c0])
        if inner is None: inner = s[m.end():c0]
        s = s[:m.start()] + "<%s%s>" % (m.group(1), new_attrs) + inner + s[c0:]
    return s

# ---------------------------------------------------------------- one page
def build(src, page, lang, d):
    s = src

    def translate(tag, attrs, inner):
        k = attr_get(attrs, "data-i18n")
        kh = attr_get(attrs, "data-i18n-html")
        ka = attr_get(attrs, "data-i18n-attr")
        if ka:
            for pair in ka.split(","):
                name, key = [x.strip() for x in pair.split(":")]
                if key not in d: sys.exit("missing key %s (%s) in %s" % (key, lang, page))
                attrs = attr_set(attrs, name, d[key])
        if k:
            if k not in d: sys.exit("missing key %s (%s) in %s" % (k, lang, page))
            inner = html.escape(d[k], quote=False)
        elif kh:
            if kh not in d: sys.exit("missing key %s (%s) in %s" % (kh, lang, page))
            inner = d[kh]
        return attrs, inner
    s = edit_elements(s, lambda a: "data-i18n" in a, translate)

    # audience: products not offered in this language
    def audience(tag, attrs, inner):
        allowed = attr_get(attrs, "data-show-langs").split()
        attrs = attr_del(attrs, "hidden")
        if lang not in allowed: attrs += " hidden"
        return attrs, inner
    s = edit_elements(s, lambda a: "data-show-langs=" in a, audience)

    def single(tag, attrs, inner):
        cards = re.findall(r'<article class="pcard[^"]*"([^>]*)>', inner)
        shown = sum(1 for c in cards if not re.search(r"\shidden(\s|$)", c))
        cls = attr_get(attrs, "class").replace(" products--single", "")
        if shown == 1: cls += " products--single"
        return attr_set(attrs, "class", cls), inner
    s = edit_elements(s, lambda a: re.search(r'class="products( |")', a) is not None, single)

    # language switcher -> real links
    links = "".join(
        '\n        <a href="%s" hreflang="%s" lang="%s" data-lang="%s"%s>%s</a>' % (
            rel_url(lang, page, l), l, HTML_LANG[l], l,
            ' class="active" aria-current="page"' if l == lang else "", LABEL[l])
        for l in LANGS)
    s = re.sub(r'(<div class="lang"[^>]*>).*?(\s*</div>)', lambda m: m.group(1) + links + m.group(2), s, flags=re.S)

    # <html lang>
    s = re.sub(r"<html[^>]*>", '<html lang="%s" data-lang="%s">' % (HTML_LANG[lang], lang), s, count=1)

    # head: canonical, alternates, og
    s = re.sub(r'\n<link rel="alternate" hreflang="[^"]*" href="[^"]*">', "", s)
    s = re.sub(r'\n<meta property="og:locale(?::alternate)?" content="[^"]*">', "", s)
    s = re.sub(r'(<link rel="canonical" href=")[^"]*(">)', lambda m: m.group(1) + abs_url(lang, page) + m.group(2), s)
    alts = "".join('\n<link rel="alternate" hreflang="%s" href="%s">' % (l, abs_url(l, page)) for l in LANGS)
    alts += '\n<link rel="alternate" hreflang="x-default" href="%s">' % abs_url(X_DEFAULT, page)
    alts += '\n<meta property="og:locale" content="%s">' % OG_LOCALE[lang]
    alts += "".join('\n<meta property="og:locale:alternate" content="%s">' % OG_LOCALE[l] for l in LANGS if l != lang)
    s = re.sub(r'(<link rel="canonical" href="[^"]*">)', lambda m: m.group(1) + alts, s, count=1)
    s = re.sub(r'(<meta property="og:url" content=")[^"]*(">)', lambda m: m.group(1) + abs_url(lang, page) + m.group(2), s)
    title = re.search(r"<title[^>]*>(.*?)</title>", s, re.S).group(1)
    desc = re.search(r'<meta name="description"[^>]*content="([^"]*)"', s)
    s = re.sub(r'(<meta property="og:title" content=")[^"]*(">)', lambda m: m.group(1) + title + m.group(2), s)
    if desc:
        s = re.sub(r'(<meta property="og:description" content=")[^"]*(">)', lambda m: m.group(1) + desc.group(1) + m.group(2), s)

    # shared assets live once at the root: /en/ and /zh/ reach them one level up
    if lang != "vi":
        s = re.sub(r'((?:href|src)=")((?:\.\./)*%s)' % SHARED, lambda m: m.group(1) + "../" + m.group(2), s)
    return s

def sitemap(pages):
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    import datetime
    today = datetime.date.today().isoformat()
    for page in pages:
        for lang in LANGS:
            out.append("  <url>")
            out.append("    <loc>%s</loc>" % abs_url(lang, page))
            out.append("    <lastmod>%s</lastmod>" % today)
            for l in LANGS:
                out.append('    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>' % (l, abs_url(l, page)))
            out.append('    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>' % abs_url(X_DEFAULT, page))
            out.append("  </url>")
    out.append("</urlset>")
    io.open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8", newline="\n").write("\n".join(out) + "\n")

def main():
    strings = load_strings()
    keys = [set(strings[l]) for l in LANGS]
    if not (keys[0] == keys[1] == keys[2]):
        sys.exit("strings.js: vi/en/zh key sets differ: %s" % sorted((keys[0] | keys[1] | keys[2]) - (keys[0] & keys[1] & keys[2])))
    pages = source_pages()
    for page in pages:
        src = io.open(os.path.join(ROOT, page), encoding="utf-8").read()
        for lang in LANGS:
            out = build(src, page, lang, strings[lang])
            dst = os.path.join(ROOT, PREFIX[lang] + page)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            io.open(dst, "w", encoding="utf-8", newline="").write(out)
    sitemap(pages)
    print("built %d pages x %d languages" % (len(pages), len(LANGS)))
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import bump_assets
    bump_assets.main()

if __name__ == "__main__":
    main()
