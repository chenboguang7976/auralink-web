"""Render the 1200x630 social-preview images (og:image) into assets/img/og/.

Facebook, Zalo, X and LinkedIn all want a ~1.91:1 JPEG/PNG; a raw 1920px WebP
screenshot is cropped badly or not shown at all. Each card is the product
screenshot in a window frame on its theme glow, with the app icon on top.
No text: the platforms print the page title under the image anyway.

Re-run after replacing a screenshot or logo:   python tools/make_og.py
Needs Pillow (pip install pillow); the site build itself does not.
"""
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "assets", "img")
OUT = os.path.join(IMG, "og")
W, H = 1200, 630
BG = (8, 8, 10)

# name: (screenshot, logo, accent, accent-2)  - accents match the .theme-* classes in style.css
CARDS = {
    "auralink":       ("shot-auralink.webp",       "auralink-logo.webp",      "#ff8a66", "#e0443c"),
    "ai-reaper":      ("shot-ai-reaper.webp",      "ai-reaper-logo.webp",     "#6cb6ff", "#4a78ff"),
    "chroma":         ("shot-chroma-tune.webp",    "chroma-studio-logo.webp", "#f4b556", "#cf6f2e"),
    "cadence":        ("shot-cadence.webp",        "cadence-studio-logo.webp","#72e3a6", "#2fae70"),
    "huyenco":        ("shot-huyenco.webp",        "huyenco-tutru-logo.webp", "#f0d27a", "#c9963a"),
    "xuanji":         ("shot-xuanji.webp",         "xuanji-bazi-logo.webp",   "#f0d27a", "#c9963a"),
}
for lang in ("vi", "en", "zh"):
    CARDS["badgertally-" + lang] = ("shot-badgertally-%s.webp" % lang, "badgertally-logo.webp", "#f0a93c", "#e2334a")
    CARDS["tigertally-" + lang] = ("shot-tigertally-%s.webp" % lang, "tigertally-logo.webp", "#5fe3f2", "#1fa9c9")

def rgb(h):
    return tuple(int(h[i:i + 2], 16) for i in (1, 3, 5))

def glow(canvas, xy, radius, color, alpha):
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    x, y = xy
    ImageDraw.Draw(layer).ellipse((x - radius, y - radius, x + radius, y + radius), fill=color + (alpha,))
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(radius * 0.55)))

def rounded(im, r):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1), r, fill=255)
    out = Image.new("RGBA", im.size, (0, 0, 0, 0))
    out.paste(im, (0, 0), mask)
    return out

def window(shot_path, width, max_h):
    shot = Image.open(shot_path).convert("RGB")
    h = round(shot.height * width / shot.width)
    shot = shot.resize((width, h), Image.LANCZOS)
    if h > max_h:                      # tall screenshots: keep the top, like the cards on the site
        shot = shot.crop((0, 0, width, max_h))
    pad = 10
    frame = Image.new("RGBA", (shot.width + 2 * pad, shot.height + 2 * pad), (22, 22, 29, 255))
    frame.paste(rounded(shot, 10), (pad, pad), rounded(shot, 10))
    frame = rounded(frame, 18)
    ImageDraw.Draw(frame).rounded_rectangle((0, 0, frame.width - 1, frame.height - 1), 18, outline=(51, 51, 63, 255), width=2)
    return frame

def shadow(canvas, box, radius=40, alpha=170, offset=24):
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    x0, y0, x1, y1 = box
    ImageDraw.Draw(layer).rounded_rectangle((x0, y0 + offset, x1, y1 + offset), 24, fill=(0, 0, 0, alpha))
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(radius)))

def place(canvas, im, x, y):
    shadow(canvas, (x, y, x + im.width, y + im.height))
    canvas.alpha_composite(im, (x, y))

def backdrop(a, b):
    c = Image.new("RGBA", (W, H), BG + (255,))
    glow(c, (980, 70), 330, rgb(b), 120)
    glow(c, (170, 520), 300, rgb(a), 90)
    # faint grid, like the hero
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(grid)
    for x in range(0, W, 52): d.line((x, 0, x, H), fill=(38, 38, 47, 70))
    for y in range(0, H, 52): d.line((0, y, W, y), fill=(38, 38, 47, 70))
    c.alpha_composite(grid)
    return c

def product(name, shot, logo, a, b):
    c = backdrop(a, b)
    win = window(os.path.join(IMG, shot), 1000, 500)
    x, y = (W - win.width) // 2 + 30, 64
    place(c, win, x, y)
    icon = Image.open(os.path.join(IMG, logo)).convert("RGBA").resize((132, 132), Image.LANCZOS)
    plate = Image.new("RGBA", (152, 152), (12, 12, 17, 255))
    plate.alpha_composite(icon, (10, 10))
    plate = rounded(plate, 34)
    ImageDraw.Draw(plate).rounded_rectangle((0, 0, 151, 151), 34, outline=(255, 255, 255, 40), width=2)
    place(c, plate, 56, H - 152 - 48)
    c.convert("RGB").save(os.path.join(OUT, name + ".jpg"), "JPEG", quality=86, optimize=True, progressive=True)

def home():
    c = backdrop("#35e0d0", "#7b5cff")
    left = window(os.path.join(IMG, "shot-chroma-tune.webp"), 560, 340).rotate(6, resample=Image.BICUBIC, expand=True)
    right = window(os.path.join(IMG, "shot-badgertally-en.webp"), 560, 340).rotate(-6, resample=Image.BICUBIC, expand=True)
    mid = window(os.path.join(IMG, "shot-auralink.webp"), 760, 420)
    place(c, left, 20, 150)
    place(c, right, W - right.width - 20, 150)
    place(c, mid, (W - mid.width) // 2, 92)
    logos = ["auralink-logo.webp", "ai-reaper-logo.webp", "chroma-studio-logo.webp", "cadence-studio-logo.webp",
             "huyenco-tutru-logo.webp", "badgertally-logo.webp", "tigertally-logo.webp"]
    size, gap = 64, 18
    x = (W - (len(logos) * size + (len(logos) - 1) * gap)) // 2
    for f in logos:
        t = Image.new("RGBA", (size, size), (12, 12, 17, 255))
        t.alpha_composite(Image.open(os.path.join(IMG, f)).convert("RGBA").resize((size - 8, size - 8), Image.LANCZOS), (4, 4))
        place(c, rounded(t, 16), x, H - size - 34)
        x += size + gap
    c.convert("RGB").save(os.path.join(OUT, "home.jpg"), "JPEG", quality=86, optimize=True, progressive=True)

def main():
    os.makedirs(OUT, exist_ok=True)
    for name, args in CARDS.items():
        product(name, *args)
    home()
    print("wrote %d images to assets/img/og/" % (len(CARDS) + 1))

if __name__ == "__main__":
    main()
