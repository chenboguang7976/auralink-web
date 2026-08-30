/* ============================================================================
   AuraLink Studio — i18n (vi / en / zh)
   - Default page text is Vietnamese, so the site is fully readable with JS off.
   - Language pick order: saved manual choice > browser language > geo-IP fallback.
   - See ARCHITECTURE.md §"Đa ngôn ngữ" for the full rationale.
   ========================================================================== */
(function () {
  "use strict";

  var LANGS = ["vi", "en", "zh"];
  var STORE_KEY = "auralink_lang";

  var I18N = {
    vi: {
      // shared
      "nav.products": "Sản phẩm", "nav.why": "Vì sao", "nav.downloads": "Tải về",
      "foot.c1": "Sản phẩm", "foot.c3": "Kết nối", "foot.contact": "Liên hệ", "foot.email": "Email",
      "foot.desc": "Công cụ audio hiệu năng cao cho người sáng tạo. Xây dựng tại Việt Nam.",
      "foot.tagline": "Làm bằng sự chính xác — đo, không đoán.",
      // index meta + hero
      "index.title": "AuraLink Studio — Công cụ audio cho người sáng tạo",
      "index.desc": "AuraLink Studio xây dựng công cụ định tuyến audio và điều khiển DAW bằng AI cho nhà sản xuất âm nhạc, streamer và kỹ sư âm thanh trên Windows và macOS.",
      "hero.eyebrow": "Công cụ audio cho người sáng tạo",
      "hero.title": `Âm thanh của bạn,<br><span class="grad">định tuyến không giới hạn.</span>`,
      "hero.lead": "AuraLink Studio xây dựng phần mềm audio hiệu năng cao — chia sẻ thiết bị, điều khiển DAW bằng AI — cho nhà sản xuất, streamer và kỹ sư âm thanh trên Windows và macOS.",
      "hero.cta1": "Khám phá sản phẩm →", "hero.cta2": "Tải xuống",
      "hero.m1": "sản phẩm", "hero.m2": "underrun đo được", "hero.m3": "nền tảng · Win / macOS",
      // products
      "products.eyebrow": "Bộ sản phẩm", "products.title": "Hai công cụ. Một triết lý.",
      "products.lead": "Đúng chức năng đến từng mẫu, giao diện để bất cứ ai cũng đọc được. Không hoa mỹ — đo được.",
      "card.al.desc": "Chia sẻ một thiết bị ASIO giữa DAW, âm thanh Windows và mọi ứng dụng cùng lúc — patch bằng tay trên node-graph. Bản kế nhiệm hiện đại của ASIO Link Pro.",
      "card.arc.tag": "Miễn phí",
      "card.arc.desc": `Điều khiển REAPER bằng ngôn ngữ tự nhiên. Trợ lý AI "Amadeus" hiểu ý bạn và thao tác trực tiếp trên DAW — bạn nói mục tiêu, nó dựng track, route, mix.`,
      "pcard.details": "Chi tiết →", "pcard.download": "Tải về",
      // why
      "why.eyebrow": "Vì sao AuraLink", "why.title": "Xây cho người thật sự dùng.",
      "why.f1t": "Hiệu năng đo được",
      "why.f1d": `Không nói "nhanh" — nói con số. 3 client ASIO ở buffer lệch nhau, 0 underrun. Mỗi tuyên bố đều có phép đo phía sau.`,
      "why.f2t": "Giao diện đọc được",
      "why.f2d": "Sức mạnh của công cụ chuyên nghiệp trong giao diện ai cũng hiểu. Không còn UI dày đặc, khó khám phá.",
      "why.f3t": "Ổn định trước tiên",
      "why.f3d": "Một công cụ đẹp mà rớt giữa buổi thu thì vô giá trị. Đúng đắn được ưu tiên trên mọi tính năng.",
      // downloads
      "dl.eyebrow": "Tải về", "dl.title": "Bắt đầu ngay.",
      "dl.lead": "Tải miễn phí cho Windows và macOS. Sau khi cài, quét mã Telegram bên dưới để nhận giấy phép kích hoạt.",
      "dl.al.spec": "Windows 10/11 · x64 · .zip (bộ cài + hướng dẫn) · 19.2 MB",
      "dl.arc.spec": "Windows 10/11 · x64 · installer · 39 MB",
      "dl.arcmac.spec": "macOS · Universal · .pkg (notarized) · 20.5 MB",
      // license
      "license.eyebrow": "Kích hoạt · Miễn phí", "license.title": "Nhận giấy phép qua Telegram.",
      "license.lead": "Sau khi cài đặt, lấy key kích hoạt hoàn toàn tự động — nhắn cho bot Telegram và nhận giấy phép ngay trong vài giây. Miễn phí trong giai đoạn này.",
      "license.s1t": "Mở bot", "license.s1d": "Quét mã QR bằng điện thoại, hoặc bấm nút bên dưới nếu bạn ở máy tính.",
      "license.s2t": "Nhắn bot", "license.s2d": `Gửi tin cho <code>@WUWEI_KEYBOT</code> và làm theo hướng dẫn.`,
      "license.s3t": "Nhận key", "license.s3d": "Bot trả giấy phép tự động — dán vào ứng dụng để kích hoạt.",
      "license.btn": "Mở @WUWEI_KEYBOT trên Telegram →", "license.qrcap": "Quét mã để mở bot nhận key",
      "license.qralt": "Quét mã QR để nhận giấy phép qua Telegram @WUWEI_KEYBOT",
      // band
      "band.eyebrow": "Sắp ra mắt", "band.title": "Thương mại hóa đang đến gần.",
      "band.lead": "Đăng ký để nhận thông báo khi bản chính thức, giá và giấy phép được công bố. Không spam — chỉ tin quan trọng.",
      "band.btn": "Nhận thông báo →",
      // AuraLink page
      "al.title": "AuraLink Router — Chia sẻ ASIO trên Windows",
      "al.desc": "AuraLink Router chia sẻ một thiết bị ASIO giữa DAW, âm thanh Windows và mọi ứng dụng cùng lúc, với patchbay node-graph. Bản kế nhiệm hiện đại của ASIO Link Pro.",
      "al.tag": "Đang hoạt động · Windows",
      "al.h1": "Một thiết bị ASIO.<br>Chia sẻ cho tất cả.",
      "al.lead": "AuraLink Router chia sẻ một interface ASIO giữa DAW, âm thanh Windows và mọi ứng dụng — cùng lúc, ở buffer lệch nhau — rồi cho bạn patch bằng tay trên node-graph. Đây là bản kế nhiệm hiện đại của ASIO Link Pro: đúng chức năng, giao diện đọc được.",
      "al.cta1": "Tải cho Windows →", "al.cta2": "Xem tính năng",
      "al.spec.eyebrow": "Tính năng cốt lõi", "al.spec.title": "Những gì làm được hôm nay.",
      "al.spec.lead": "Mỗi dòng dưới đây đã được đo, không phải hứa hẹn.",
      "al.s1t": "Chia sẻ ASIO đa client", "al.s1d": "3 guest ở buffer lệch nhau, 0 underrun đo được.",
      "al.s2t": "4 cable ảo kernel", "al.s2d": "Cả hai chiều, tách biệt đã được chứng minh.",
      "al.s3t": "DAW + Windows → OBS", "al.s3d": "Đồng thời, đo từ đầu đến cuối cho stream/thu.",
      "al.s4t": "Patchbay node-graph", "al.s4d": "Gain/mute từng jack, 8 slot profile lưu sẵn.",
      "al.s5t": "Two-bus star routing", "al.s5d": "Cùng topology với ALP — thạo ALP là thạo AuraLink.",
      "al.s6t": "Hoạt động với host Steinberg", "al.s6d": "Xác nhận bằng tai ở buffer 256.",
      "al.co.eyebrow": "Bối cảnh", "al.co.title": "Vì sao AuraLink tồn tại.",
      "al.co.body": `ASIO Link Pro là công cụ tốt nhất trong lĩnh vực này trên Windows và không có phần thay thế — tác giả John Shield qua đời, phần mềm dừng lại. Nó vẫn thắng về chức năng, chỉ thua ở giao diện cũ kỹ không ai bảo trì nổi. AuraLink nhận đúng ván cược đó: <b>khớp chức năng đến từng mẫu, cho nó một giao diện đọc được.</b>`,
      "al.co.btn": "Tải AuraLink Router →",
      // AI Reaper page
      "arc.title": "AI Reaper Commander — Điều khiển REAPER bằng AI",
      "arc.desc": "AI Reaper Commander điều khiển REAPER bằng ngôn ngữ tự nhiên qua trợ lý AI Amadeus. Ứng dụng desktop cho Windows và macOS.",
      "arc.tag": "Bản chính thức v2.1.0 · Windows & macOS",
      "arc.h1": "Nói với DAW.<br>Nó tự làm.",
      "arc.lead": `AI Reaper Commander điều khiển REAPER bằng ngôn ngữ tự nhiên. Trợ lý AI mang persona "Amadeus" hiểu ý bạn rồi thao tác trực tiếp trên DAW qua vòng lặp tool-calling. Bạn nói mục tiêu — nó dựng track, route, mix.`,
      "arc.cta1": "Tải miễn phí →", "arc.cta2": "Xem tính năng",
      "arc.demo.user": "Tạo cho tôi 4 track trống có sidechain.",
      "arc.demo.steps": "⟳ Đang tạo track… ✓<br>⟳ Gán bus sidechain… ✓<br>⟳ Route send −6 dB… ✓",
      "arc.demo.done": "Xong. 4 track sẵn sàng, sidechain đã nối.",
      "arc.spec.eyebrow": "Tính năng", "arc.spec.title": "Trợ lý sản xuất trong DAW.",
      "arc.f1t": "Điều khiển bằng lời", "arc.f1d": "Ra lệnh tự nhiên — Amadeus dịch thành thao tác REAPER qua vòng lặp tool-calling.",
      "arc.f2t": "Đa nhà cung cấp AI", "arc.f2d": "Chọn provider và model tùy ý. Personas & skills để tùy biến cách trợ lý làm việc.",
      "arc.f3t": "Kích hoạt một lần", "arc.f3d": "Thiết lập nhanh, dùng ổn định lâu dài — không phải đăng nhập lại mỗi lần mở.",
      "arc.f4t": "Lưu & tải phiên", "arc.f4d": `Phiên làm việc lưu ra <code>.aura.json</code> — mở lại đúng ngữ cảnh, đúng lịch sử.`,
      "arc.f5t": "Qt6 · Rust core", "arc.f5d": "Giao diện Qt6 mượt, lõi Rust hiệu năng cao. Cùng một cây mã cho Windows và macOS.",
      "arc.f6t": "Tích hợp REAPER sâu", "arc.f6d": "Thao tác trực tiếp trên track, route, mix — không chỉ gợi ý mà thực thi.",
      "arc.pl.eyebrow": "Nền tảng", "arc.pl.title": "Windows và macOS.",
      "arc.pl.body": "Một cây mã nguồn duy nhất, build cho cả hai. Bản Windows đã hoàn thiện & xác minh; bản macOS đóng gói universal, ký & notarize.",
      "arc.pl.win": "Tải cho Windows →", "arc.pl.mac": "Tải cho macOS"
    },

    en: {
      "nav.products": "Products", "nav.why": "Why", "nav.downloads": "Download",
      "foot.c1": "Products", "foot.c3": "Connect", "foot.contact": "Contact", "foot.email": "Email",
      "foot.desc": "High-performance audio tools for creators. Built in Vietnam.",
      "foot.tagline": "Made with precision, measured not guessed.",
      "index.title": "AuraLink Studio — Audio tools for creators",
      "index.desc": "AuraLink Studio builds high-performance audio routing and AI-driven DAW control tools for music producers, streamers and audio engineers on Windows and macOS.",
      "hero.eyebrow": "Audio tools for creators",
      "hero.title": `Your sound,<br><span class="grad">routed without limits.</span>`,
      "hero.lead": "AuraLink Studio builds high-performance audio software — device sharing and AI-driven DAW control — for producers, streamers and audio engineers on Windows and macOS.",
      "hero.cta1": "Explore products →", "hero.cta2": "Download",
      "hero.m1": "products", "hero.m2": "measured underruns", "hero.m3": "platforms · Win / macOS",
      "products.eyebrow": "Our products", "products.title": "Two tools. One philosophy.",
      "products.lead": "Function matched to the last detail, in an interface anyone can read. Not flashy — measured.",
      "card.al.desc": "Share one ASIO device across your DAW, Windows audio and every app at once — patch it by hand on a node graph. The modern successor to ASIO Link Pro.",
      "card.arc.tag": "Free",
      "card.arc.desc": `Control REAPER in plain language. The AI assistant "Amadeus" understands you and acts directly in your DAW — you state the goal, it builds tracks, routes and mixes.`,
      "pcard.details": "Details →", "pcard.download": "Download",
      "why.eyebrow": "Why AuraLink", "why.title": "Built for people who actually use it.",
      "why.f1t": "Measured performance",
      "why.f1d": `We don't say "fast" — we give numbers. 3 ASIO clients at mismatched buffers, 0 underruns. Every claim has a measurement behind it.`,
      "why.f2t": "A readable interface",
      "why.f2d": "Professional-grade power in an interface anyone can understand. No more dense, undiscoverable UI.",
      "why.f3t": "Stability first",
      "why.f3d": "A pretty tool that drops out mid-session is worthless. Correctness outranks every feature.",
      "dl.eyebrow": "Download", "dl.title": "Get started.",
      "dl.lead": "Free download for Windows and macOS. After installing, scan the Telegram code below to get your activation license.",
      "dl.al.spec": "Windows 10/11 · x64 · .zip (installer + guide) · 19.2 MB",
      "dl.arc.spec": "Windows 10/11 · x64 · installer · 39 MB",
      "dl.arcmac.spec": "macOS · Universal · .pkg (notarized) · 20.5 MB",
      "license.eyebrow": "Activation · Free", "license.title": "Get your license via Telegram.",
      "license.lead": "After installing, get your activation key fully automatically — message the Telegram bot and receive your license in seconds. Free during this phase.",
      "license.s1t": "Open the bot", "license.s1d": "Scan the QR code with your phone, or tap the button below if you're on a computer.",
      "license.s2t": "Message the bot", "license.s2d": `Send a message to <code>@WUWEI_KEYBOT</code> and follow the prompts.`,
      "license.s3t": "Get your key", "license.s3d": "The bot returns your license automatically — paste it into the app to activate.",
      "license.btn": "Open @WUWEI_KEYBOT on Telegram →", "license.qrcap": "Scan to open the bot and get your key",
      "license.qralt": "Scan the QR code to get your license via Telegram @WUWEI_KEYBOT",
      "band.eyebrow": "Coming soon", "band.title": "Commercial launch is coming.",
      "band.lead": "Sign up to be notified when the official release, pricing and licensing go live. No spam — only what matters.",
      "band.btn": "Get notified →",
      "al.title": "AuraLink Router — Share ASIO on Windows",
      "al.desc": "AuraLink Router shares one ASIO device across your DAW, Windows audio and every app at once, with a node-graph patchbay. The modern successor to ASIO Link Pro.",
      "al.tag": "Live · Windows",
      "al.h1": "One ASIO device.<br>Shared with everything.",
      "al.lead": "AuraLink Router shares one ASIO interface across your DAW, Windows audio and every app — at once, at mismatched buffers — then lets you patch it by hand on a node graph. It's the modern successor to ASIO Link Pro: function matched, interface readable.",
      "al.cta1": "Download for Windows →", "al.cta2": "See features",
      "al.spec.eyebrow": "Core features", "al.spec.title": "What it can do today.",
      "al.spec.lead": "Every line below has been measured, not promised.",
      "al.s1t": "Multi-client ASIO sharing", "al.s1d": "3 guests at mismatched buffers, 0 measured underruns.",
      "al.s2t": "4 kernel virtual cables", "al.s2d": "Both directions, separation proven.",
      "al.s3t": "DAW + Windows → OBS", "al.s3d": "Simultaneously, measured end to end for streaming/recording.",
      "al.s4t": "Node-graph patchbay", "al.s4d": "Per-jack gain/mute, 8 saved profile slots.",
      "al.s5t": "Two-bus star routing", "al.s5d": "Same topology as ALP — fluent in ALP means fluent here.",
      "al.s6t": "Works with Steinberg hosts", "al.s6d": "Confirmed by ear at buffer 256.",
      "al.co.eyebrow": "Context", "al.co.title": "Why AuraLink exists.",
      "al.co.body": `ASIO Link Pro is the best tool of its kind on Windows and has no replacement — its author John Shield passed away and the software stopped. It still wins on function, losing only on a dated interface no one can maintain. AuraLink takes exactly that bet: <b>match its function to the last detail, and give it an interface people can read.</b>`,
      "al.co.btn": "Download AuraLink Router →",
      "arc.title": "AI Reaper Commander — Control REAPER with AI",
      "arc.desc": "AI Reaper Commander controls REAPER in plain language via the AI assistant Amadeus. A desktop app for Windows and macOS.",
      "arc.tag": "Official release v2.1.0 · Windows & macOS",
      "arc.h1": "Talk to your DAW.<br>It does the work.",
      "arc.lead": `AI Reaper Commander controls REAPER in plain language. An AI assistant with the persona "Amadeus" understands you, then acts directly in your DAW through a tool-calling loop. You state the goal — it builds tracks, routes and mixes.`,
      "arc.cta1": "Download free →", "arc.cta2": "See features",
      "arc.demo.user": "Create 4 empty tracks with sidechain for me.",
      "arc.demo.steps": "⟳ Creating tracks… ✓<br>⟳ Assigning sidechain bus… ✓<br>⟳ Routing send −6 dB… ✓",
      "arc.demo.done": "Done. 4 tracks ready, sidechain connected.",
      "arc.spec.eyebrow": "Features", "arc.spec.title": "A production assistant inside your DAW.",
      "arc.f1t": "Voice-of-intent control", "arc.f1d": "Give natural commands — Amadeus turns them into REAPER actions through a tool-calling loop.",
      "arc.f2t": "Multiple AI providers", "arc.f2d": "Choose any provider and model. Personas & skills to customize how the assistant works.",
      "arc.f3t": "Activate once", "arc.f3d": "Quick setup, stable long-term — no logging in again every time you open it.",
      "arc.f4t": "Save & load sessions", "arc.f4d": `Sessions save to <code>.aura.json</code> — reopen with the exact context and history.`,
      "arc.f5t": "Qt6 · Rust core", "arc.f5d": "Smooth Qt6 interface, high-performance Rust core. One codebase for Windows and macOS.",
      "arc.f6t": "Deep REAPER integration", "arc.f6d": "Acts directly on tracks, routing and mixing — it doesn't just suggest, it executes.",
      "arc.pl.eyebrow": "Platforms", "arc.pl.title": "Windows and macOS.",
      "arc.pl.body": "A single source tree, built for both. The Windows build is finished & verified; the macOS build is packaged universal, signed & notarized.",
      "arc.pl.win": "Download for Windows →", "arc.pl.mac": "Download for macOS"
    },

    zh: {
      "nav.products": "产品", "nav.why": "为什么", "nav.downloads": "下载",
      "foot.c1": "产品", "foot.c3": "联系我们", "foot.contact": "联系", "foot.email": "邮箱",
      "foot.desc": "为创作者打造的高性能音频工具。源自越南。",
      "foot.tagline": "以精准打造 —— 实测，而非臆测。",
      "index.title": "AuraLink Studio —— 为创作者打造的音频工具",
      "index.desc": "AuraLink Studio 为音乐制作人、主播和音频工程师打造高性能音频路由与 AI 驱动的 DAW 控制工具，支持 Windows 和 macOS。",
      "hero.eyebrow": "为创作者打造的音频工具",
      "hero.title": `你的声音，<br><span class="grad">路由无界。</span>`,
      "hero.lead": "AuraLink Studio 打造高性能音频软件 —— 设备共享、AI 驱动的 DAW 控制 —— 服务于 Windows 和 macOS 上的制作人、主播与音频工程师。",
      "hero.cta1": "探索产品 →", "hero.cta2": "下载",
      "hero.m1": "款产品", "hero.m2": "个实测欠载", "hero.m3": "个平台 · Win / macOS",
      "products.eyebrow": "产品系列", "products.title": "两款工具，一个理念。",
      "products.lead": "功能精准到每一处，界面人人可读。不浮夸 —— 靠实测。",
      "card.al.desc": "在 DAW、Windows 音频和所有应用之间同时共享一台 ASIO 设备 —— 在节点图上手动连接。ASIO Link Pro 的现代继任者。",
      "card.arc.tag": "免费",
      "card.arc.desc": `用自然语言操控 REAPER。AI 助手"Amadeus"理解你的意图，直接在 DAW 中操作 —— 你说目标，它建轨道、走路由、做混音。`,
      "pcard.details": "详情 →", "pcard.download": "下载",
      "why.eyebrow": "为什么选择 AuraLink", "why.title": "为真正使用它的人而造。",
      "why.f1t": "性能，用数据说话",
      "why.f1d": `不说"快"—— 只给数字。3 个 ASIO 客户端在不同缓冲下运行，0 欠载。每一句话背后都有实测。`,
      "why.f2t": "看得懂的界面",
      "why.f2d": "专业级的能力，配上人人都能理解的界面。告别密密麻麻、难以摸索的 UI。",
      "why.f3t": "稳定优先",
      "why.f3d": "再漂亮的工具，录到一半掉线也一文不值。正确性高于一切功能。",
      "dl.eyebrow": "下载", "dl.title": "立即开始。",
      "dl.lead": "Windows 和 macOS 免费下载。安装后，扫描下方 Telegram 二维码领取激活许可证。",
      "dl.al.spec": "Windows 10/11 · x64 · .zip（安装程序 + 说明）· 19.2 MB",
      "dl.arc.spec": "Windows 10/11 · x64 · 安装程序 · 39 MB",
      "dl.arcmac.spec": "macOS · Universal · .pkg（已公证）· 20.5 MB",
      "license.eyebrow": "激活 · 免费", "license.title": "通过 Telegram 获取许可证。",
      "license.lead": "安装后，全自动获取激活密钥 —— 给 Telegram 机器人发条消息，几秒内即可收到许可证。当前阶段免费。",
      "license.s1t": "打开机器人", "license.s1d": "用手机扫描二维码；如果你在电脑上，点击下方按钮。",
      "license.s2t": "发送消息", "license.s2d": `向 <code>@WUWEI_KEYBOT</code> 发送消息，并按提示操作。`,
      "license.s3t": "领取密钥", "license.s3d": "机器人自动返回许可证 —— 粘贴到应用中即可激活。",
      "license.btn": "在 Telegram 打开 @WUWEI_KEYBOT →", "license.qrcap": "扫码打开机器人领取密钥",
      "license.qralt": "扫描二维码通过 Telegram @WUWEI_KEYBOT 获取许可证",
      "band.eyebrow": "即将推出", "band.title": "商业化即将到来。",
      "band.lead": "订阅以便在正式版、定价和授权发布时收到通知。绝不打扰 —— 只发重要消息。",
      "band.btn": "获取通知 →",
      "al.title": "AuraLink Router —— 在 Windows 上共享 ASIO",
      "al.desc": "AuraLink Router 通过节点图跳线台，在 DAW、Windows 音频和所有应用之间同时共享一台 ASIO 设备。ASIO Link Pro 的现代继任者。",
      "al.tag": "运行中 · Windows",
      "al.h1": "一台 ASIO 设备，<br>共享给一切。",
      "al.lead": "AuraLink Router 在 DAW、Windows 音频和所有应用之间共享一个 ASIO 接口 —— 同时、在不同缓冲下运行 —— 再让你在节点图上手动跳线。它是 ASIO Link Pro 的现代继任者：功能对齐，界面易读。",
      "al.cta1": "下载 Windows 版 →", "al.cta2": "查看功能",
      "al.spec.eyebrow": "核心功能", "al.spec.title": "现在就能做到的。",
      "al.spec.lead": "以下每一条都经过实测，而非承诺。",
      "al.s1t": "多客户端 ASIO 共享", "al.s1d": "3 个客户端在不同缓冲下，0 实测欠载。",
      "al.s2t": "4 条内核虚拟线缆", "al.s2d": "双向传输，隔离已验证。",
      "al.s3t": "DAW + Windows → OBS", "al.s3d": "同时进行，端到端实测，用于直播/录音。",
      "al.s4t": "节点图跳线台", "al.s4d": "每个接口独立增益/静音，8 个预设槽位。",
      "al.s5t": "双母线星形路由", "al.s5d": "与 ALP 相同的拓扑 —— 会用 ALP 就会用 AuraLink。",
      "al.s6t": "兼容 Steinberg 宿主", "al.s6d": "在 256 缓冲下经耳听确认。",
      "al.co.eyebrow": "背景", "al.co.title": "AuraLink 为何存在。",
      "al.co.body": `ASIO Link Pro 是 Windows 上同类工具中最好的，且无可替代 —— 作者 John Shield 离世后，软件便停止了更新。它在功能上依然领先，只输在无人能维护的陈旧界面上。AuraLink 正是接下这个赌注：<b>功能对齐到每一处，并给它一个人人可读的界面。</b>`,
      "al.co.btn": "下载 AuraLink Router →",
      "arc.title": "AI Reaper Commander —— 用 AI 操控 REAPER",
      "arc.desc": "AI Reaper Commander 通过 AI 助手 Amadeus，用自然语言操控 REAPER。适用于 Windows 和 macOS 的桌面应用。",
      "arc.tag": "正式版 v2.1.0 · Windows & macOS",
      "arc.h1": "对 DAW 说话，<br>它替你完成。",
      "arc.lead": `AI Reaper Commander 用自然语言操控 REAPER。拥有"Amadeus"人格的 AI 助手理解你的意图，再通过工具调用循环直接在 DAW 中操作。你说目标 —— 它建轨道、走路由、做混音。`,
      "arc.cta1": "免费下载 →", "arc.cta2": "查看功能",
      "arc.demo.user": "帮我创建 4 条带侧链的空轨道。",
      "arc.demo.steps": "⟳ 正在创建轨道… ✓<br>⟳ 分配侧链总线… ✓<br>⟳ 路由发送 −6 dB… ✓",
      "arc.demo.done": "完成。4 条轨道就绪，侧链已连接。",
      "arc.spec.eyebrow": "功能", "arc.spec.title": "DAW 里的制作助手。",
      "arc.f1t": "用语言操控", "arc.f1d": "自然下达指令 —— Amadeus 通过工具调用循环将其转化为 REAPER 操作。",
      "arc.f2t": "多家 AI 供应商", "arc.f2d": "自由选择供应商与模型。用人格与技能自定义助手的工作方式。",
      "arc.f3t": "一次激活", "arc.f3d": "设置快捷，长期稳定 —— 无需每次打开都重新登录。",
      "arc.f4t": "保存与载入会话", "arc.f4d": `会话保存为 <code>.aura.json</code> —— 重新打开即恢复完整上下文与历史。`,
      "arc.f5t": "Qt6 · Rust 内核", "arc.f5d": "流畅的 Qt6 界面，高性能 Rust 内核。Windows 与 macOS 共用同一套代码。",
      "arc.f6t": "深度集成 REAPER", "arc.f6d": "直接操作轨道、路由与混音 —— 不只是建议，而是执行。",
      "arc.pl.eyebrow": "平台", "arc.pl.title": "Windows 与 macOS。",
      "arc.pl.body": "单一源码树，为两个平台构建。Windows 版已完成并验证；macOS 版打包为通用二进制，已签名并公证。",
      "arc.pl.win": "下载 Windows 版 →", "arc.pl.mac": "下载 macOS 版"
    }
  };

  // ---- helpers -------------------------------------------------------------
  function lsGet() { try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; } }
  function lsSet(v) { try { localStorage.setItem(STORE_KEY, v); } catch (e) {} }

  function fromBrowser() {
    var list = navigator.languages || [navigator.language || navigator.userLanguage || ""];
    for (var i = 0; i < list.length; i++) {
      var l = (list[i] || "").toLowerCase();
      if (l.indexOf("vi") === 0) return "vi";
      if (l.indexOf("zh") === 0) return "zh";
      if (l.indexOf("en") === 0) return "en";
    }
    return null;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "en";
    var d = I18N[lang] || I18N.en;
    var root = document.documentElement;
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    root.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var p = pair.split(":"), attr = (p[0] || "").trim(), k = (p[1] || "").trim();
        if (attr && d[k] != null) el.setAttribute(attr, d[k]);
      });
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
  }

  // ---- boot ----------------------------------------------------------------
  var stored = lsGet();
  var browser = fromBrowser();
  apply(stored || browser || "en");

  // manual switch (delegated; buttons exist at parse time but be safe)
  document.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest(".lang button") : null;
    if (b) { var l = b.getAttribute("data-lang"); apply(l); lsSet(l); }
  });

  // geo-IP fallback: only when the user has no saved choice AND the browser
  // language is not clearly vi/zh (i.e. English or unknown). Lets a China /
  // Taiwan / HK / Macau visitor with an English browser still land on Chinese.
  // Best-effort: silently ignored if the endpoint is blocked (e.g. GFW) or slow.
  if (!stored && browser !== "vi" && browser !== "zh") {
    var settled = false;
    var timer = setTimeout(function () { settled = true; }, 2500);
    try {
      fetch("https://get.geojs.io/v1/ip/country.json", { cache: "no-store" })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (settled) return;
          clearTimeout(timer);
          var c = ((data && data.country) || "").toUpperCase();
          var lang = (c === "CN" || c === "TW" || c === "HK" || c === "MO") ? "zh"
                   : (c === "VN") ? "vi" : "en";
          if (!lsGet()) apply(lang); // auto choice: applied, not persisted
        })
        .catch(function () {});
    } catch (e) {}
  }
})();
