# AuraLink Studio — Website

Static marketing site for **AuraLink Studio**, a suite of desktop audio, metaphysics and content-security apps for Windows and macOS. Vanilla HTML/CSS/JS, no framework. A small Python build bakes the three language versions (`/` Vietnamese, `/en/` English, `/zh/` Chinese).

**Live:** [auralink.io.vn](https://auralink.io.vn) · **Hosting:** GitHub Pages from `main`, behind Cloudflare

---

## Products

| Product | Platforms | Page | Shown in |
|---|---|---|---|
| **AuraLink Router** — share one audio device across DAW, Windows audio and any app, patch by dragging cables | Windows | `products/auralink.html` | vi · en · zh |
| **AI Reaper Commander** — natural-language control of REAPER | Windows, macOS | `products/ai-reaper-commander.html` | vi · en · zh |
| **Chroma Studio** — Chroma Sense (live key detection) + Chroma Tune (pitch correction locked to the key), VST3 | Windows, macOS | `products/chroma-studio.html` | vi · en · zh |
| **Cadence** — real-time MIDI chord & scale studio | Windows, macOS | `products/cadence.html` | vi · en · zh |
| **Huyền Cơ Tứ Trụ** — BaZi charting, Vietnamese UI | Windows | `products/huyenco-tutru.html` | vi · en |
| **玄机八字 XuanJi BaZi** — BaZi charting, Chinese UI | Windows | `products/xuanji-bazi.html` | en · zh |
| **Lửng Phù · BadgerTally** — protected video: one unlock ticket per viewing machine, tracing watermark | Windows, macOS | `products/badgertally.html` | vi · en · zh |
| **Hổ Phù · TigerTally** — protected video for organisations, sealed per registered viewer, works air-gapped | Windows, macOS | `products/tigertally.html` | vi · en · zh |

---

## Project structure

```
├── index.html, privacy.html, terms.html   # SOURCE pages (Vietnamese) — edit these
├── products/*.html                        # SOURCE product pages (Vietnamese)
├── en/**, zh/**                           # GENERATED — never edit by hand
├── sitemap.xml                            # GENERATED
├── 404.html                               # trilingual, not generated
├── assets/
│   ├── css/style.css                      # all styles: tokens, layout, components, product themes
│   ├── js/lang.js                         # language routing (runs in <head>)
│   ├── js/main.js                         # sticky nav, mobile menu, scroll reveal
│   └── img/                               # logos, screenshots (.webp), QR codes, og/ (social previews)
├── tools/
│   ├── strings.js                         # ALL visible text, vi / en / zh
│   ├── releases.json                      # every download: tag, file, version, size, SHA-256
│   ├── build_i18n.py                      # bakes /, /en/, /zh/ + sitemap, stamps asset hashes
│   ├── bump_assets.py                     # ?v=<hash> on CSS/JS URLs (called by the build)
│   ├── sync_releases.py                   # pulls size + SHA-256 from GitHub Releases
│   ├── make_og.py                         # renders assets/img/og/*.jpg (1200×630)
│   ├── check_links.py                     # local href/src/#anchor checker
│   └── hooks/pre-commit                   # optional: rebuild on every commit
├── .github/workflows/check.yml            # CI: build up to date, links, downloads
├── .well-known/security.txt, robots.txt, site.webmanifest, CNAME, .nojekyll
```

---

## Editing workflow (read before changing anything)

| You want to change | Edit | Never edit |
|---|---|---|
| Visible text, any language | `tools/strings.js` (key → vi / en / zh) | `en/**`, `zh/**` |
| Page structure, links, images | the Vietnamese source pages at the root | `en/**`, `zh/**` |
| A download (new version, new file) | `tools/releases.json` | hrefs / sizes in HTML or strings |
| Styles / scripts | `assets/css/style.css`, `assets/js/*.js` | |

Then:

```bash
python tools/build_i18n.py      # needs Python 3 + Node (it reads strings.js with node)
git add -A && git commit -m "..." && git push origin main
```

To have the build run automatically on every commit, enable the hook once per clone:

```bash
git config core.hooksPath tools/hooks
```

The build fills in, per page and language: text, `<html lang>`, canonical + `hreflang` alternates, Open Graph / Twitter meta, JSON-LD (`SoftwareApplication` on product pages, `Organization` + `WebSite` on the home page), the language switcher, product audience (`data-show-langs`), download hrefs / checksums / release-notes links, the CJK web font (on `/zh/` only), asset paths for the `/en/` and `/zh/` trees, `?v=<hash>` on CSS/JS (Cloudflare caches them for hours), and `sitemap.xml` with each page's last-commit date as `<lastmod>`.

### Shipping a new version of an app

1. Upload the binary to a [GitHub Release](https://github.com/chenboguang7976/auralink-web/releases).
2. In `tools/releases.json`, update that entry's `tag`, `file` and `version`.
3. `python tools/sync_releases.py` — fetches the file size and SHA-256 from GitHub into `releases.json`.
4. If the version label in a product's tag/badge changed (e.g. `"card.al.tag": "Mới · v0.9"`), update it in `strings.js`.
5. `python tools/build_i18n.py`, commit, push.

Download specs in `strings.js` use tokens, so the version and size are never typed twice:
`"dl.al.spec": "{ver:auralink-win} · Windows 10/11 · x64 · .zip (installer + guide) · {size:auralink-win}"`.
Sizes are shown in MiB with one decimal (what Windows Explorer and Finder show).

Download ids (`data-dl`) and their files:

| id | Product | Platform |
|---|---|---|
| `auralink-win` | AuraLink Router | Windows x64 |
| `arc-win` / `arc-mac` | AI Reaper Commander | Windows x64 / macOS Universal |
| `cs-win` / `cs-mac` | Chroma Studio | Windows x64 / macOS Universal |
| `cadence-win` / `cd-mac` | Cadence | Windows x64 / macOS Intel |
| `hc-win` | Huyền Cơ Tứ Trụ | Windows x64 |
| `xj-win` | 玄机八字 XuanJi BaZi | Windows x64 |
| `bt-win` / `bt-mac` | Lửng Phù · BadgerTally | Windows x64 / macOS 13+ Intel |
| `tt-win` / `tt-mac` | Hổ Phù · TigerTally | Windows x64 / macOS 13+ Intel |

### New screenshot or logo

Replace the `.webp` in `assets/img/` (keep the `width`/`height` attributes in the HTML in step with the real size), then re-render the social previews: `pip install pillow && python tools/make_og.py`.

---

## Content rules

- **Copy talks about what a product does, never how it was built** — no framework, language or algorithm names in user-facing text.
- **Some products are only offered in some languages.** Mark the element with `data-show-langs="vi en"`; the build adds `hidden` in the other languages. Huyền Cơ Tứ Trụ is vi/en, XuanJi BaZi is en/zh.

---

## Languages at runtime

Text is baked into each copy; nothing is translated in the browser. `assets/js/lang.js` only:

1. remembers a manual VI / EN / 中 pick (`localStorage`), and
2. on an external entry with no saved pick, sends visitors of the Vietnamese pages to their language by browser language, then time zone.

Crawlers are never redirected, so each language version is indexed as itself.

---

## Security headers

GitHub Pages cannot send headers, so the CSP is a `<meta>` tag in every page (no inline scripts, `script-src 'self'`; JSON-LD is a data block, which CSP does not govern). Clickjacking protection, HSTS, `nosniff` and Permissions-Policy are added by Cloudflare (Response Header Transform Rule + SSL/TLS settings).

---

## Local development

```bash
python -m http.server 8080      # → http://localhost:8080
```

## CI

`.github/workflows/check.yml` runs on every push to `main` and every pull request:

- the build produces no changes (catches a forgotten build, a hand-edited `en/`/`zh/` file, or a missing translation key — the build refuses to run if vi/en/zh key sets differ);
- `tools/check_links.py` — every local link, image and `#anchor` resolves;
- `tools/sync_releases.py --check` — every download exists on GitHub Releases and its size/SHA-256 match `releases.json`.

---

## Design system

| Token | Value |
|---|---|
| Background | `#08080a` |
| Text | `#f3f3f6` |
| Studio accent | `#35e0d0` (cyan) → `#7b5cff` (violet) |
| Product accents | `.theme-*` classes in `style.css`, taken from each app icon; used on product pages and on that product's card and download row |
| Fonts | Space Grotesk (headings), Inter (body), Noto Sans SC (`/zh/` only) |

Dark, premium look; CSS transitions only, no animation libraries. Motion is switched off under `prefers-reduced-motion`.

---

## License activation

All products activate through one Telegram bot, **[@WUWEI_KEYBOT](https://t.me/WUWEI_KEYBOT)**: send it the Machine ID, get a license key back. Currently free.
