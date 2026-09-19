# AuraLink Studio — Website

Static marketing site for **AuraLink Studio**, a product suite of desktop audio and utility applications for Windows and macOS. Built with vanilla HTML/CSS/JS — no frameworks, no build step.

**Live:** [auralink.io.vn](https://auralink.io.vn)  
**Hosting:** GitHub Pages (deployed from `main` branch)

---

## Products

| Product | Platforms | Description |
|---------|-----------|-------------|
| **AuraLink Router** | Windows | Virtual audio device multiplexer — share one audio device across multiple apps simultaneously |
| **AI Reaper Commander** | Windows, macOS | Natural-language command interface for REAPER DAW — build tracks, route signals, adjust mix, write MIDI |
| **Chroma Studio** | Windows, macOS | Two VST3 plugins: **Chroma Sense** (real-time key detection) + **Chroma Tune** (automatic pitch correction locked to detected key) |
| **Cadence** | Windows, macOS | MIDI keyboard practice app with fretboard visualization and loopMIDI integration for DAW routing |
| **Huyền Cơ Tứ Trụ** | Windows | Four Pillars of Destiny (BaZi) charting — Vietnamese UI (hidden from Chinese locale) |
| **玄机八字 XuanJi BaZi** | Windows | Four Pillars of Destiny (BaZi) charting — Chinese UI (hidden from Vietnamese locale) |

---

## Project Structure

```
website/
├── index.html                        # Landing page (hero, product cards, downloads, license, contact)
├── products/
│   ├── auralink.html                 # AuraLink Router product page
│   ├── ai-reaper-commander.html      # AI Reaper Commander product page
│   ├── chroma-studio.html            # Chroma Studio (Sense + Tune) product page
│   ├── cadence.html                  # Cadence product page
│   ├── huyenco-tutru.html            # Huyền Cơ Tứ Trụ product page
│   └── xuanji-bazi.html              # 玄机八字 XuanJi BaZi product page
├── privacy.html                      # Privacy policy
├── terms.html                        # Terms of service
├── assets/
│   ├── css/style.css                 # All styles — dark theme, layout, components, responsive
│   ├── js/
│   │   ├── i18n.js                   # Trilingual dictionary (vi / en / zh) with runtime DOM patching
│   │   └── main.js                   # Sticky navbar, mobile menu toggle, scroll-reveal animations
│   └── img/                          # Logos, app screenshots (.webp), QR codes
├── CNAME                             # Custom domain: auralink.io.vn
├── .nojekyll                         # Bypass Jekyll processing on GitHub Pages
├── .gitignore
├── ARCHITECTURE.md                   # Internal architecture & content guidelines
└── README.md                         # ← You are here
```

---

## Local Development

No build tools required. Open `index.html` directly in a browser, or serve it locally:

```bash
# Python
cd website
python -m http.server 8080
# → http://localhost:8080

# Node (npx)
npx -y serve .
```

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch root.

```bash
cd website
git add .
git commit -m "Update site"
git push origin main
```

Changes go live within ~1 minute. GitHub Pages automatically serves from `/` (root) with the custom domain defined in `CNAME`.

### DNS Configuration (already done)

| Type  | Host | Value                          |
|-------|------|--------------------------------|
| A     | @    | `185.199.108.153`              |
| A     | @    | `185.199.109.153`              |
| A     | @    | `185.199.110.153`              |
| A     | @    | `185.199.111.153`              |
| CNAME | www  | `chenboguang7976.github.io`    |

HTTPS is enforced via GitHub Pages settings (auto-provisioned Let's Encrypt certificate).

---

## Download Links Reference

All release binaries are hosted on [GitHub Releases](https://github.com/chenboguang7976/auralink-web/releases). Each download button in `index.html` is identified by a `data-dl` attribute:

| `data-dl` | Product | Platform | Format |
|-----------|---------|----------|--------|
| `auralink-win` | AuraLink Router | Windows x64 | `.zip` (installer + guide) |
| `arc-win` | AI Reaper Commander | Windows x64 | `.exe` installer |
| `arc-mac` | AI Reaper Commander | macOS Universal | `.pkg` (notarized) |
| `cs-win` | Chroma Studio | Windows x64 | `.exe` installer (Sense + Tune, VST3) |
| `cs-mac` | Chroma Studio | macOS Intel | `.pkg` (Sense + Tune, VST3) |
| `cadence-win` | Cadence | Windows x64 | `.zip` (app + loopMIDI + guide) |
| `cd-mac` | Cadence | macOS Intel | `.zip` (app + guide) |
| `hc-win` | Huyền Cơ Tứ Trụ | Windows x64 | `.exe` installer |
| `xj-win` | 玄机八字 XuanJi BaZi | Windows x64 | `.exe` installer |

### Updating a Download Link

1. **Upload the new binary** to a GitHub Release (create a new tag if needed).
2. **Update the `href`** on the corresponding `<a data-dl="...">` element in `index.html`.
3. **Update version/size strings** in `assets/js/i18n.js` — search for the `dl.*.spec` keys across all three language blocks (vi, en, zh).
4. **Update the CTA button** on the relevant product page under `products/`.
5. Commit and push.

---

## Internationalization (i18n)

The site supports three locales: **Vietnamese (vi)**, **English (en)**, and **Chinese (zh)**.

- All translatable strings live in [`assets/js/i18n.js`](assets/js/i18n.js) as a flat key-value dictionary per locale.
- HTML elements use `data-i18n` (text content), `data-i18n-html` (innerHTML), or `data-i18n-attr` (attribute) for binding.
- Language is auto-detected from `navigator.language` and persisted to `localStorage`. Users can switch manually via the navbar language selector.
- Locale-conditional visibility: elements with `data-show-langs="vi en"` are hidden when the active locale is not in the list (used to show Huyền Cơ Tứ Trụ only to vi/en readers and 玄机八字 only to en/zh readers).

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#08080a` |
| Text | `#f3f3f6` |
| Accent gradient | `#35e0d0` (cyan) → `#7b5cff` (violet) |
| Heading font | Space Grotesk (Google Fonts) |
| Body font | Inter (Google Fonts) |

Dark/premium aesthetic throughout. All transitions use CSS `transition` — no animation libraries.

---

## License Activation

All products use a unified Telegram bot **[@WUWEI_KEYBOT](https://t.me/WUWEI_KEYBOT)** for license activation. Users send their Machine ID to the bot and receive a license key automatically. One bot handles all products. Currently free.
