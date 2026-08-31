# AuraLink Studio — Website

Trang web tĩnh giới thiệu sản phẩm cho **AuraLink Studio** (nhãn tổng), gồm 4 sản phẩm:
**AuraLink Router**, **AI Reaper Commander**, **Huyền Cơ Tứ Trụ** và **玄机八字 (XuanJi BaZi)**.
Phong cách dark/premium, không cần build, không cần server — deploy miễn phí bằng
**GitHub Pages** với domain **auralink.io.vn**.

> ⚠️ **Thư mục này KHÔNG chứa mã nguồn sản phẩm.** Chỉ push thư mục `website/` này lên
> GitHub. Tuyệt đối không đưa các thư mục `AuraLink/`, `AI-Reaper-Commander-*/`,
> `HuyenCo-TuTru-*/`, `XuanJi-BaZi-*/` lên web.

---

## 1. Cấu trúc

```
website/
├── index.html                     # Trang chủ (hero, sản phẩm, vì sao, tải về)
├── products/
│   ├── auralink.html              # Trang AuraLink Router
│   ├── ai-reaper-commander.html   # Trang AI Reaper Commander
│   ├── huyenco-tutru.html         # Trang Huyền Cơ Tứ Trụ
│   └── xuanji-bazi.html           # Trang 玄机八字 XuanJi BaZi
├── assets/
│   ├── css/style.css              # Toàn bộ thiết kế
│   ├── js/
│   │   ├── i18n.js                # Từ điển 3 ngôn ngữ (vi/en/zh)
│   │   └── main.js                # Sticky nav, menu mobile, hiệu ứng scroll
│   └── img/                       # Logo, icon app, ảnh chụp màn hình (.webp), QR Telegram
├── CNAME                          # Chứa: auralink.io.vn (cho GitHub Pages)
└── .nojekyll                      # Buộc Pages phục vụ file tĩnh nguyên trạng
```

## 2. Xem thử tại máy (trước khi deploy)

Mở trực tiếp `index.html` bằng trình duyệt là được. Muốn giống môi trường thật:

```powershell
cd D:\Aura-Builder-Workspace\website
python -m http.server 8080      # rồi mở http://localhost:8080
```

## 3. Việc bạn cần tự sửa

- **Link tải:** xem hướng dẫn chi tiết ở **mục 3.1** ngay dưới đây.
- **GitHub / email:** cập nhật link GitHub và email liên hệ trong footer nếu cần.
- **Ảnh chụp sản phẩm:** cả 4 sản phẩm đã dùng ảnh chụp app thật
  (`assets/img/shot-*.webp`). Quy trình làm ảnh mới: `ARCHITECTURE.md` §11.

---

## 3.1. Chèn link tải thật vào web (cầm tay chỉ việc)

**Tình trạng hiện tại: cả 5 nút đã có link thật** trên GitHub Releases. Phần dưới đây giữ
lại để bạn làm khi ra bản mới. Có **2 bước**: (1) đưa file cài lên mạng để lấy link,
(2) dán link đó vào `index.html`.

### Bước 1 — Đưa file cài lên mạng để lấy link

**Cách A — GitHub Releases (khuyên dùng: miễn phí, tối đa 2 GB/file, tải nhanh):**

1. Mở: **https://github.com/chenboguang7976/auralink-web/releases/new**
2. Ô **Choose a tag** → gõ `v1.0.0` → bấm **Create new tag: v1.0.0 on publish**.
3. **Release title:** ví dụ `AuraLink Router v1.0.0`.
4. **Kéo–thả file cài** (vd `AuraLink-Setup-1.0.0.exe`) vào ô *"Attach binaries by dropping
   them here"*. Chờ upload xong. Đính được nhiều file trong cùng một release.
5. Bấm **Publish release**.
6. Sau khi publish, **chuột phải vào tên file đã đính kèm → Copy link**. Link có dạng:
   ```
   https://github.com/chenboguang7976/auralink-web/releases/download/v1.0.0/AuraLink-Setup-1.0.0.exe
   ```
   > ⚠️ File cài (`.exe`, `.pkg`) là **bản build đã đóng gói** — đính vào Releases thì OK,
   > KHÔNG phải là đẩy mã nguồn lên. Vẫn giữ nguyên tắc: không đưa source sản phẩm lên web.

**Cách B — Link ngoài (Google Drive, server riêng...):** chỉ cần lấy **link tải trực tiếp**
tới file (không phải link trang xem trước). Với Google Drive, dùng dạng:
`https://drive.google.com/uc?export=download&id=<ID_FILE>`.

### Bước 2 — Dán link vào `index.html`

Mở `index.html`, tìm 5 dòng có `data-dl` (trong khối `#downloads`). Mỗi nút ứng với một
file theo bảng sau — chỉ việc thay phần trong `href="..."` bằng link mới ở Bước 1:

| `data-dl` | Nút này tải file gì |
|-----------|---------------------|
| `auralink-win` | AuraLink Router — Windows (.zip) |
| `arc-win` | AI Reaper Commander — Windows (installer) |
| `arc-mac` | AI Reaper Commander — macOS (.pkg) |
| `hc-win` | Huyền Cơ Tứ Trụ — Windows (installer) |
| `xj-win` | 玄机八字 XuanJi BaZi — Windows (installer) |

Đổi link thì **nhớ đổi luôn số phiên bản và dung lượng** trong `assets/js/i18n.js`
(khóa `dl.*.spec`, cả 3 ngôn ngữ), và nút tải trực tiếp ở trang sản phẩm tương ứng.

**Ví dụ cụ thể** — dòng AuraLink Router:

Trước:
```html
<a href="#" class="btn btn--primary btn--sm" data-dl="auralink-win">Windows</a>
```
Sau:
```html
<a href="https://github.com/chenboguang7976/auralink-web/releases/download/v1.0.0/AuraLink-Setup-1.0.0.exe" class="btn btn--primary btn--sm" data-dl="auralink-win">Windows</a>
```

> Chỉ đổi phần trong `href="..."`. **Giữ nguyên** `class="..."` và `data-dl="..."`.
> Không cần thêm `download` — trình duyệt tự tải file khi bấm.

**Nếu một sản phẩm chưa có file:** cứ để `href="#"`, hoặc đổi chữ nút thành `Sắp có` và
thêm `style="opacity:.5;pointer-events:none"` để nút mờ, không bấm được.

### Bước 3 — Đưa thay đổi lên web thật

Sau khi sửa `index.html`, chạy trong thư mục `website/`:
```powershell
git add index.html
git commit -m "Thêm link tải thật"
git push
```
Chờ ~1 phút, `auralink.io.vn` tự cập nhật. **Hoặc** chỉ cần nhắn Claude "đẩy web lên" là xong.

---

## 4. Deploy lên GitHub Pages (miễn phí)

### Bước 1 — Tạo repo và push (chỉ thư mục website)
```powershell
cd D:\Antigravity-Workspace\website
git init
git add .
git commit -m "AuraLink Studio website"
gh repo create auralink-web --public --source=. --remote=origin --push
# (hoặc tạo repo trên github.com rồi: git remote add origin <url>; git push -u origin main)
```

### Bước 2 — Bật Pages
Trên GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
Branch: `main` / `/root` → Save.** File `CNAME` đã sẵn `auralink.io.vn`.

### Bước 3 — Trỏ domain auralink.io.vn về GitHub
Vào trang quản lý DNS của nhà cung cấp tên miền (nơi bạn thuê `.io.vn`), thêm:

| Loại  | Tên/Host | Giá trị                       |
|-------|----------|-------------------------------|
| A     | @        | `185.199.108.153`             |
| A     | @        | `185.199.109.153`             |
| A     | @        | `185.199.110.153`             |
| A     | @        | `185.199.111.153`             |
| CNAME | www      | `<username>.github.io`        |

Thay `<username>` bằng tên tài khoản GitHub của bạn. DNS mất vài phút → vài giờ để lan.
Sau đó trong **Settings → Pages**, nhập `auralink.io.vn` vào ô Custom domain và bật
**Enforce HTTPS** (chờ chứng chỉ được cấp tự động).

---

## 5. Dùng GitHub Student Pack cho dự án này

Bạn có [Student Developer Pack](https://education.github.com/pack). Những thứ hữu ích nhất:

- **GitHub Pages** — hosting tĩnh miễn phí (đang dùng ở trên). Không tốn tiền server.
- **Namecheap / .me domain miễn phí** — có thể lấy thêm domain phụ nếu muốn.
- **GitHub Copilot Pro miễn phí** — hỗ trợ code khi bạn mở rộng site sau này.
- **Sentry / logging** — theo dõi lỗi khi site lớn hơn.
- **Khi thương mại hóa:** cân nhắc **Stripe** (một số ưu đãi trong Pack) để bán license;
  hoặc bán qua **GitHub Releases** kèm mã kích hoạt (bạn đã có hệ license ed25519 offline).

> Không có gì trong Pack bắt buộc để trang chạy — Pages + domain bạn đang có là đủ.

---

## 6. Ghi chú thiết kế

- Bảng màu: nền `#08080a`, chữ `#f3f3f6`, accent cyan `#35e0d0` → violet `#7b5cff`.
- Font: Space Grotesk (tiêu đề) + Inter (nội dung), tải từ Google Fonts.
- Toàn bộ là HTML/CSS/JS thuần, không framework, không bước build → nhẹ và dễ sửa.
