# AuraLink Studio — Website

Trang web tĩnh giới thiệu sản phẩm cho **AuraLink Studio** (nhãn tổng), gồm 2 sản phẩm:
**AuraLink Router** và **AI Reaper Commander**. Phong cách dark/premium, không cần build,
không cần server — deploy miễn phí bằng **GitHub Pages** với domain **auralink.io.vn**.

> ⚠️ **Thư mục này KHÔNG chứa mã nguồn sản phẩm.** Chỉ push thư mục `website/` này lên
> GitHub. Tuyệt đối không đưa các thư mục `AuraLink/`, `AI-Reaper-Commander-*/` lên web.

---

## 1. Cấu trúc

```
website/
├── index.html                     # Trang chủ (hero, sản phẩm, vì sao, tải về)
├── products/
│   ├── auralink.html              # Trang AuraLink Router
│   └── ai-reaper-commander.html   # Trang AI Reaper Commander
├── assets/
│   ├── css/style.css              # Toàn bộ thiết kế
│   ├── js/main.js                 # Sticky nav, menu mobile, hiệu ứng scroll
│   └── img/ai-reaper-logo.png     # Logo sản phẩm (ảnh thương hiệu duy nhất)
├── CNAME                          # Chứa: auralink.io.vn (cho GitHub Pages)
└── .nojekyll                      # Buộc Pages phục vụ file tĩnh nguyên trạng
```

## 2. Xem thử tại máy (trước khi deploy)

Mở trực tiếp `index.html` bằng trình duyệt là được. Muốn giống môi trường thật:

```powershell
cd D:\Antigravity-Workspace\website
python -m http.server 8080      # rồi mở http://localhost:8080
```

## 3. Việc bạn cần tự sửa

- **Link tải:** trong `index.html`, tìm các thẻ `data-dl=...` (mục Tải về) và thay
  `href="#"` bằng link GitHub Release thật khi bạn phát hành file cài.
- **GitHub / email:** cập nhật link GitHub và email liên hệ trong footer nếu cần.
- **Ảnh chụp sản phẩm:** hiện dùng minh họa SVG. Khi có screenshot thật, bỏ vào
  `assets/img/` và thay vào khối `.phero__visual`.

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
