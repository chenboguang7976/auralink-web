"""Check every local href/src in the built site points at a real file, and every
#anchor at a real id. External links are left to tools/sync_releases.py (downloads).

    python tools/check_links.py
"""
import glob, html, io, os, re, sys
from urllib.parse import urlsplit, unquote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def ids_of(path, cache={}):
    if path not in cache:
        s = io.open(path, encoding="utf-8").read()
        cache[path] = set(re.findall(r'\sid="([^"]+)"', s))
    return cache[path]

def main():
    pages = [p for p in glob.glob(os.path.join(ROOT, "**", "*.html"), recursive=True)
             if "/.git/" not in p and "/node_modules/" not in p]
    bad = []
    for page in pages:
        s = io.open(page, encoding="utf-8").read()
        for attr, url in re.findall(r'\s(href|src)="([^"]*)"', s):
            url = html.unescape(url)
            u = urlsplit(url)
            if u.scheme or url.startswith("//") or url.startswith("mailto:"):
                continue
            if u.path:
                base = ROOT if u.path.startswith("/") else os.path.dirname(page)
                target = os.path.normpath(os.path.join(base, unquote(u.path).lstrip("/")))
                if os.path.isdir(target):
                    target = os.path.join(target, "index.html")
            else:
                target = page
            if not os.path.exists(target):
                bad.append("%s: %s -> missing %s" % (os.path.relpath(page, ROOT), url, os.path.relpath(target, ROOT)))
            elif u.fragment and target.endswith(".html") and u.fragment not in ids_of(target):
                bad.append("%s: %s -> no id=\"%s\"" % (os.path.relpath(page, ROOT), url, u.fragment))
    if bad:
        sys.exit("broken links:\n  " + "\n  ".join(bad))
    print("links ok (%d pages)" % len(pages))

if __name__ == "__main__":
    main()
