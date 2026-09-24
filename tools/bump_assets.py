"""Stamp every CSS/JS reference in the HTML pages with ?v=<content hash>.

Cloudflare (and browsers) cache assets/*.css|js for hours, so after a deploy a
page could load new HTML with an old i18n.js - mixed languages, stale labels.
A content hash in the URL makes a changed file a new URL. Run before every
commit that touches assets/:   python tools/bump_assets.py
"""
import glob, hashlib, io, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = ["assets/css/style.css", "assets/js/i18n.js", "assets/js/main.js"]

def short_hash(path):
    return hashlib.sha1(open(os.path.join(ROOT, path), "rb").read()).hexdigest()[:10]

def main():
    hashes = {a: short_hash(a) for a in ASSETS}
    pages = glob.glob(os.path.join(ROOT, "*.html")) + glob.glob(os.path.join(ROOT, "products", "*.html"))
    changed = 0
    for page in pages:
        s = io.open(page, encoding="utf-8").read()
        new = s
        for asset, h in hashes.items():
            # matches assets/..., ../assets/... and /assets/..., with or without an old ?v=
            pat = r'((?:\.\./|/)?' + re.escape(asset) + r')(\?v=[0-9a-f]+)?(")'
            new = re.sub(pat, r'\1?v=' + h + r'\3', new)
        if new != s:
            io.open(page, "w", encoding="utf-8", newline="").write(new)
            changed += 1
    for a, h in hashes.items():
        print(f"{a} -> {h}")
    print(f"{changed} page(s) updated")

if __name__ == "__main__":
    main()
