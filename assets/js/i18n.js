/* ============================================================================
   AuraLink Studio — i18n (vi / en / zh)
   - Default page text is Vietnamese, so the site is fully readable with JS off.
   - Language pick order: saved manual choice > browser language > geo-IP fallback.
   - COPY RULE: user-facing text talks about what a product DOES, never about how
     it was built. No framework/language/algorithm names — see ARCHITECTURE.md §12.
   - Some products are only offered in some languages (`data-show-langs`) — §13.
   ========================================================================== */
(function () {
  "use strict";

  var LANGS = ["vi", "en", "zh"];
  var STORE_KEY = "auralink_lang";

  var I18N = {
    vi: {
      // shared
      "nav.products": "Sản phẩm", "nav.why": "Vì sao", "nav.downloads": "Tải về",
      "nav.audio": "Âm thanh", "nav.meta": "Huyền học",
      "foot.c1": "Sản phẩm", "foot.c3": "Kết nối", "foot.contact": "Liên hệ", "foot.email": "Email",
      "foot.desc": "Phần mềm desktop cho người sáng tạo. Xây dựng tại Việt Nam.",
      "foot.tagline": "Làm bằng sự chính xác — đo, không đoán.",
      // index meta + hero
      "index.title": "AuraLink Studio — Phần mềm desktop cho việc thật",
      "index.desc": "AuraLink Studio làm phần mềm desktop cho Windows và macOS: chia sẻ thiết bị âm thanh giữa mọi ứng dụng, ra lệnh cho DAW bằng lời, và lập lá số Tứ Trụ chuẩn tới từng phút giao tiết.",
      "hero.eyebrow": "Phần mềm desktop cho việc thật",
      "hero.title": `Việc khó của bạn,<br><span class="grad">phần mềm lo.</span>`,
      "hero.lead": "Chia sẻ một thiết bị âm thanh cho mọi ứng dụng cùng lúc. Ra lệnh cho DAW bằng lời thay vì bấm chuột cả buổi. Lập lá số Tứ Trụ chuẩn tới từng phút giao tiết. Mỗi ứng dụng gỡ đúng một nút thắt — trên Windows và macOS.",
      "hero.cta1": "Khám phá sản phẩm →", "hero.cta2": "Tải xuống",
      "hero.m1n": "3", "hero.m1": "ứng dụng",
      "hero.m2": "chi phí lúc này", "hero.m3": "nền tảng · Win / macOS",
      // products
      "products.eyebrow": "Bộ sản phẩm", "products.title": "Ba ứng dụng. Ba nút thắt được gỡ.",
      "products.lead": "Mỗi ứng dụng ra đời từ một việc thật sự khó chịu, và chỉ làm đúng việc đó — cho tới nơi tới chốn.",
      "fam.audio": "Âm thanh & Sản xuất", "fam.meta": "Huyền học & Mệnh lý",
      "card.new": "Mới · v1.0",
      "chip.vi": "Tiếng Việt", "chip.cable": "4 cable ảo", "chip.chart": "Lá số + luận giải",
      "card.al.desc": "Một card âm thanh dùng chung cho DAW, âm thanh Windows và mọi ứng dụng cùng một lúc — bạn tự kéo dây nối tiếng đi đâu tùy ý. Thay cho ASIO Link Pro đã ngừng phát triển.",
      "card.arc.tag": "Miễn phí",
      "card.arc.desc": `Bảo REAPER làm việc bằng câu nói thường. Trợ lý "Amadeus" hiểu ý rồi tự dựng track, đi đường tiếng, chỉnh mix và viết cả MIDI — bạn giữ phần sáng tạo, nó nhận phần thao tác.`,
      "card.hc.desc": "Chỉ cần ngày giờ sinh là ra lá số đầy đủ: bốn trụ, tàng can, thập thần, vượng suy nhật chủ, ngũ hành và dụng thần. Tính đúng cả những ca hay sai — sinh sau 23 giờ, hoặc sinh đúng ngày giao tiết.",
      "card.xj.desc": "Bản dành cho người đọc Hán tự: cùng cách lập lá số, thuật ngữ mệnh lý giữ nguyên gốc, múi giờ mặc định UTC+8.",
      "pcard.details": "Chi tiết →", "pcard.download": "Tải về",
      // why
      "why.eyebrow": "Vì sao AuraLink", "why.title": "Xây cho người thật sự dùng.",
      "why.f1t": "Nói bằng con số",
      "why.f1d": "Ba ứng dụng âm thanh chạy chung một card cùng lúc, không một tiếng rớt. Giờ giao tiết khớp lịch tới từng phút. Mỗi câu quảng cáo ở đây đều có phép đo đứng sau.",
      "why.f2t": "Giao diện đọc được",
      "why.f2d": "Sức mạnh của công cụ chuyên nghiệp trong giao diện ai cũng hiểu. Không còn UI dày đặc, khó khám phá.",
      "why.f3t": "Ổn định trước tiên",
      "why.f3d": "Một công cụ đẹp mà rớt giữa buổi thu thì vô giá trị. Đúng đắn được ưu tiên trên mọi tính năng.",
      // downloads
      "dl.eyebrow": "Tải về", "dl.title": "Bắt đầu ngay.",
      "dl.lead": "Tải miễn phí cho Windows và macOS. Sau khi cài, quét mã Telegram bên dưới để nhận giấy phép kích hoạt — một bot dùng chung cho mọi ứng dụng.",
      "dl.al.spec": "v0.9.0 · Windows 10/11 · x64 · .zip (bộ cài + hướng dẫn) · 19.4 MB",
      "dl.arc.spec": "v2.1.0 · Windows 10/11 · x64 · bộ cài · 39.0 MB",
      "dl.arcmac.spec": "v2.1.0 · macOS · Universal · .pkg (đã công chứng) · 20.5 MB",
      "dl.hc.spec": "v1.0.0 · Windows 10/11 · x64 · bộ cài · 40.4 MB",
      "dl.xj.spec": "v1.0.0 · Windows 10/11 · x64 · bộ cài · 38.6 MB · giao diện tiếng Trung",
      // license
      "license.eyebrow": "Kích hoạt · Miễn phí", "license.title": "Nhận giấy phép qua Telegram.",
      "license.lead": "Sau khi cài đặt, lấy key kích hoạt hoàn toàn tự động — nhắn cho bot Telegram và nhận giấy phép ngay trong vài giây. Một bot cấp key cho mọi ứng dụng. Miễn phí trong giai đoạn này.",
      "license.s1t": "Mở bot", "license.s1d": "Quét mã QR bằng điện thoại, hoặc bấm nút bên dưới nếu bạn ở máy tính.",
      "license.s2t": "Nhắn bot", "license.s2d": `Gửi tin cho <code>@WUWEI_KEYBOT</code>, chọn đúng sản phẩm rồi làm theo hướng dẫn.`,
      "license.s3t": "Nhận key", "license.s3d": "Bot trả giấy phép tự động — dán vào ứng dụng để kích hoạt.",
      "license.btn": "Mở @WUWEI_KEYBOT trên Telegram →", "license.qrcap": "Quét mã để mở bot nhận key",
      "license.qralt": "Quét mã QR để nhận giấy phép qua Telegram @WUWEI_KEYBOT",
      // band
      "band.eyebrow": "Sắp ra mắt", "band.title": "Thương mại hóa đang đến gần.",
      "band.lead": "Đăng ký để nhận thông báo khi bản chính thức, giá và giấy phép được công bố. Không spam — chỉ tin quan trọng.",
      "band.btn": "Nhận thông báo →",
      // AuraLink page
      "al.title": "AuraLink Router — Một card âm thanh dùng chung cho mọi ứng dụng",
      "al.desc": "AuraLink Router cho DAW, âm thanh Windows và mọi ứng dụng dùng chung một card âm thanh cùng lúc, tự kéo dây nối tiếng. Thay cho ASIO Link Pro đã ngừng phát triển.",
      "al.tag": "Đang hoạt động · v0.9.0 · Windows",
      "al.h1": "Một card âm thanh.<br>Cả máy dùng chung.",
      "al.lead": "Bình thường mở DAW là mất tiếng ở mọi ứng dụng khác. AuraLink Router gỡ đúng chỗ đó: DAW, âm thanh Windows, trình duyệt, OBS cùng chạy trên một card — rồi bạn tự kéo dây quyết định tiếng nào đi đâu. Thay cho ASIO Link Pro đã ngừng phát triển.",
      "al.cta1": "Tải cho Windows →", "al.cta2": "Xem tính năng",
      "al.shotalt": "Giao diện AuraLink Router: bảng nối dây giữa DAW, cable ảo và card âm thanh",
      "al.spec.eyebrow": "Tính năng cốt lõi", "al.spec.title": "Những gì làm được hôm nay.",
      "al.spec.lead": "Mỗi dòng dưới đây đã được đo, không phải hứa hẹn.",
      "al.s1t": "Nhiều ứng dụng, một card", "al.s1d": "Ba ứng dụng dùng chung một thiết bị cùng lúc, mỗi cái đặt độ trễ riêng, không rớt tiếng.",
      "al.s2t": "4 cable ảo", "al.s2d": "Đưa tiếng qua lại giữa các ứng dụng theo cả hai chiều, đường nào ra đường nấy.",
      "al.s3t": "DAW + Windows → OBS", "al.s3d": "Tiếng nhạc và tiếng máy cùng vào OBS một lúc, dùng để stream hoặc thu.",
      "al.s4t": "Nối tiếng bằng cách kéo dây", "al.s4d": "Chỉnh to nhỏ và tắt tiếng từng cổng, lưu sẵn 8 bộ thiết lập để đổi nhanh giữa các buổi.",
      "al.s5t": "Quen ASIO Link Pro là dùng được ngay", "al.s5d": "Cách đi tiếng giữ nguyên như ALP — không phải học lại từ đầu.",
      "al.s6t": "Chạy với Cubase / Nuendo", "al.s6d": "Đã nghe kiểm ở độ trễ 256 samples.",
      "al.co.eyebrow": "Bối cảnh", "al.co.title": "Vì sao AuraLink tồn tại.",
      "al.co.body": `ASIO Link Pro là công cụ tốt nhất trong lĩnh vực này trên Windows và không có phần thay thế — tác giả John Shield qua đời, phần mềm dừng lại. Nó vẫn thắng về chức năng, chỉ thua ở giao diện cũ kỹ không ai bảo trì nổi. AuraLink nhận đúng ván cược đó: <b>khớp chức năng đến từng mẫu, cho nó một giao diện đọc được.</b>`,
      "al.co.btn": "Tải AuraLink Router →",
      // AI Reaper page
      "arc.title": "AI Reaper Commander — Bảo REAPER làm việc bằng lời",
      "arc.desc": "AI Reaper Commander cho phép ra lệnh cho REAPER bằng câu nói thường: dựng track, đi đường tiếng, chỉnh mix và viết MIDI. Ứng dụng desktop cho Windows và macOS.",
      "arc.tag": "Bản chính thức v2.1.0 · Windows & macOS",
      "arc.h1": "Nói với DAW.<br>Nó tự làm.",
      "arc.lead": `Bạn nói muốn gì bằng câu nói thường; trợ lý "Amadeus" hiểu rồi tự làm ngay trong REAPER — dựng track, đi đường tiếng, chỉnh mix, viết cả MIDI và nạp nhạc cụ. Bạn giữ phần sáng tạo, nó nhận phần thao tác lặp đi lặp lại.`,
      "arc.cta1": "Tải miễn phí →", "arc.cta2": "Xem tính năng",
      "arc.shotalt": "Giao diện AI Reaper Commander: thông tin dự án, chọn trợ lý AI và khung trò chuyện với Amadeus",
      "arc.demo.eyebrow": "Một lượt trao đổi", "arc.demo.title": "Bạn nói mục tiêu. Nó thực thi.",
      "arc.demo.user": "Tạo cho tôi 4 track trống có sidechain.",
      "arc.demo.steps": "⟳ Đang tạo track… ✓<br>⟳ Gán bus sidechain… ✓<br>⟳ Route send −6 dB… ✓",
      "arc.demo.done": "Xong. 4 track sẵn sàng, sidechain đã nối.",
      "arc.spec.eyebrow": "Tính năng", "arc.spec.title": "Trợ lý sản xuất ngồi sẵn trong DAW.",
      "arc.f1t": "Ra lệnh bằng lời", "arc.f1d": "Nói như nói với người: tạo track, tách bè, dựng bus, chỉnh gain. Không phải nhớ phím tắt hay đi tìm menu.",
      "arc.f2t": "Soạn nhạc thẳng vào dự án", "arc.f2d": "Viết MIDI, nạp nhạc cụ ảo và dựng phần đệm ngay trong REAPER — không phải chép tay từ chỗ khác về.",
      "arc.f3t": "Chọn trợ lý theo túi tiền", "arc.f3d": "Tự chọn nhà cung cấp AI và mô hình, kể cả loại đang miễn phí. Đổi phong cách làm việc của trợ lý bằng persona.",
      "arc.f4t": "Kích hoạt một lần", "arc.f4d": "Thiết lập nhanh, dùng ổn định lâu dài — không phải đăng nhập lại mỗi lần mở.",
      "arc.f5t": "Nắm ngữ cảnh dự án", "arc.f5d": "Biết dự án đang ở tone nào, tempo bao nhiêu, có sẵn những track gì — nên đề xuất luôn hợp với bản phối.",
      "arc.f6t": "Lưu & mở lại phiên", "arc.f6d": "Cả buổi làm việc lưu lại được; mở lên là đúng chỗ đang dở, đủ ngữ cảnh và lịch sử trò chuyện.",
      "arc.pl.eyebrow": "Nền tảng", "arc.pl.title": "Windows và macOS.",
      "arc.pl.body": "Cả hai bản đều đã hoàn thiện và chạy thật. Bản macOS đã được Apple công chứng nên cài đặt không bị hệ thống chặn.",
      "arc.pl.win": "Tải cho Windows →", "arc.pl.mac": "Tải cho macOS",
      // Huyền Cơ Tứ Trụ page
      "hc.title": "Huyền Cơ Tứ Trụ — Lập lá số Tứ Trụ chính xác",
      "hc.desc": "Huyền Cơ Tứ Trụ lập lá số Tứ Trụ từ ngày giờ sinh: bốn trụ, tàng can, thập thần, vượng suy, ngũ hành, dụng thần. Tính đúng cả ca sinh sau 23 giờ và sinh đúng ngày giao tiết. Ứng dụng Windows, tiếng Việt.",
      "hc.tag": "Bản chính thức v1.0.0 · Windows",
      "hc.h1": "Lá số Tứ Trụ,<br>đúng cả những ngày khác thường.",
      "hc.lead": "Nhập ngày giờ sinh, bấm một nút, có ngay lá số đầy đủ để luận: bốn trụ, tàng can, thập thần, vượng suy nhật chủ, phân bố ngũ hành, dụng thần. Điểm khác biệt nằm ở những ca mà phần mềm khác hay tính lệch — sinh sau 23 giờ, hoặc sinh đúng hôm giao tiết.",
      "hc.cta1": "Tải cho Windows →", "hc.cta2": "Xem những ca dễ sai",
      "hc.shotalt": "Giao diện Huyền Cơ Tứ Trụ: bốn trụ, vượng suy nhật chủ, phân bố ngũ hành",
      "hc.p.eyebrow": "Những ca dễ sai", "hc.p.title": "Sáu chỗ hay lệch, ở đây tính đúng.",
      "hc.p.lead": "Phần mềm lập lá số phần lớn giống nhau ở ca thường, chỉ khác nhau đúng vài trường hợp. Đây là những trường hợp đó.",
      "hc.s1t": "Sinh sau 23 giờ",
      "hc.s1d": "Sinh từ 23:00 đến 23:59 thì trụ ngày và trụ giờ đã sang ngày mới, có ghi rõ Tý sớm hay Tý muộn. Đây là chỗ nhiều phần mềm lấy nhầm theo ngày dương lịch.",
      "hc.s2t": "Sinh đúng ngày giao tiết",
      "hc.s2d": "Giờ giao tiết được tính tới từng phút, nên người sinh sát ranh giới không bị nhảy sai trụ năm hoặc trụ tháng.",
      "hc.s3t": "Khớp lịch tiết khí",
      "hc.s3d": "Lập Xuân 2024 ra 16:27 — đúng như lịch thiên văn. Bạn đối chiếu lại mốc nào cũng được.",
      "hc.s4t": "Đúng cả với ngày sinh rất xa",
      "hc.s4d": "Người sinh cách đây hàng trăm năm vẫn ra đúng trụ ngày, không lệch vì các lần đổi lịch trong lịch sử.",
      "hc.s5t": "Giờ mặt trời thật, nếu bạn cần",
      "hc.s5d": "Bật thêm hiệu chỉnh theo kinh độ nơi sinh cho ai theo trường phái giờ mặt trời thật — tắt sẵn, không ép dùng.",
      "hc.s6t": "Vượng suy có căn cứ",
      "hc.s6d": "Thân vượng hay thân nhược được chấm điểm theo tháng sinh, chi ngày, thông căn và sinh phù — kèm phần trăm để biết mạnh yếu tới đâu — rồi từ đó ra dụng thần.",
      "hc.f.eyebrow": "Nội dung lá số", "hc.f.title": "Một lần bấm, đủ để luận.",
      "hc.f1t": "Bốn trụ đầy đủ", "hc.f1d": "Can chi của năm, tháng, ngày, giờ — tô màu theo ngũ hành, nhật chủ được đánh dấu riêng để nhìn ra ngay.",
      "hc.f2t": "Tàng can & thập thần", "hc.f2d": "Mỗi địa chi mở ra tàng can kèm thập thần tương ứng, đặt ngay dưới trụ để đọc liền mạch.",
      "hc.f3t": "Vượng suy nhật chủ", "hc.f3d": "Thân vượng hay thân nhược, kèm phần trăm và lý do — đắc lệnh, thất lệnh, có thông căn hay không.",
      "hc.f4t": "Phân bố ngũ hành", "hc.f4d": "Mộc, hỏa, thổ, kim, thủy hiển thị theo điểm có trọng số — không phải đếm suông số chữ trong lá số.",
      "hc.f5t": "Nạp âm · trường sinh · bát trạch", "hc.f5d": "Nạp âm của lá số, vòng trường sinh từng trụ, và mệnh quái Đông / Tây tứ mệnh theo bát trạch.",
      "hc.f6t": "Sao chép & xuất file", "hc.f6d": "Chép nguyên lá số ra văn bản hoặc xuất thành file để lưu, in và gửi cho người khác xem.",
      "hc.co.eyebrow": "Bắt đầu", "hc.co.title": "Cài xong là lập được lá số.",
      "hc.co.body": `Tải bộ cài, chạy, rồi lấy key kích hoạt <b>miễn phí</b> qua Telegram — chừng một phút là xong. Kích hoạt rồi thì dùng được cả khi máy không nối mạng.`,
      "hc.co.btn": "Tải Huyền Cơ Tứ Trụ →", "hc.co.btn2": "Cách lấy key",
      // 玄机八字 page
      "xj.title": "玄机八字 XuanJi BaZi — Lập lá số Bát Tự tiếng Trung",
      "xj.desc": "玄机八字 (XuanJi BaZi) lập lá số Bát Tự từ ngày giờ sinh, tính đúng cả ca sinh sau 23 giờ và sinh đúng ngày giao tiết. Ứng dụng Windows, giao diện tiếng Trung giản thể.",
      "xj.tag": "Bản chính thức v1.0.0 · Windows",
      "xj.h1": `玄机八字<br><span class="grad">专业四柱排盘</span>`,
      "xj.lead": "Bản dành cho người đọc Hán tự: cùng cách lập lá số, thuật ngữ mệnh lý giữ nguyên gốc, múi giờ mặc định UTC+8. Nhập ngày giờ sinh là có ngay bốn trụ, tàng can, thập thần, vượng suy, ngũ hành và dụng thần.",
      "xj.cta1": "Tải cho Windows →", "xj.cta2": "Xem những ca dễ sai",
      "xj.shotalt": "Giao diện 玄机八字: 四柱排盘, 日元旺衰, 五行分布",
      "xj.p.eyebrow": "Những ca dễ sai", "xj.p.title": "Sáu chỗ hay lệch, ở đây tính đúng.",
      "xj.p.lead": "Phần mềm 排盘 phần lớn giống nhau ở ca thường, chỉ khác nhau đúng vài trường hợp. Đây là những trường hợp đó.",
      "xj.s1t": "Sinh sau 23 giờ (晚子时)",
      "xj.s1d": "Sinh từ 23:00 đến 23:59 thì 日柱 và 时柱 đã sang ngày mới, có ghi rõ 早子 hay 晚子.",
      "xj.s2t": "Sinh đúng ngày 交节",
      "xj.s2d": "Giờ 交节 được tính tới từng phút, nên người sinh sát ranh giới không bị nhảy sai 年柱 hoặc 月柱.",
      "xj.s3t": "Khớp lịch 节气",
      "xj.s3d": "立春 2024 ra 16:27 — đúng như lịch thiên văn. Bạn đối chiếu lại mốc nào cũng được.",
      "xj.s4t": "Đúng cả với ngày sinh rất xa",
      "xj.s4d": "Người sinh cách đây hàng trăm năm vẫn ra đúng 日柱, không lệch vì các lần đổi lịch trong lịch sử.",
      "xj.s5t": "真太阳时, nếu bạn cần",
      "xj.s5d": "Bật thêm hiệu chỉnh theo kinh độ nơi sinh cho ai theo trường phái 真太阳时 — tắt sẵn, không ép dùng.",
      "xj.s6t": "旺衰 có căn cứ",
      "xj.s6d": "身强 hay 身弱 được chấm điểm theo 月令, 日支, 通根 và 生扶 — kèm phần trăm — rồi từ đó ra 用神.",
      "xj.f.eyebrow": "Nội dung lá số", "xj.f.title": "Một lần bấm, đủ để luận.",
      "xj.f1t": "四柱 đầy đủ", "xj.f1d": "干支 của 年·月·日·时 — tô màu theo 五行, 日主 được đánh dấu riêng để nhìn ra ngay.",
      "xj.f2t": "藏干 & 十神", "xj.f2d": "Mỗi 地支 mở ra 藏干 kèm 十神 tương ứng, đặt ngay dưới trụ để đọc liền mạch.",
      "xj.f3t": "日元旺衰", "xj.f3d": "身强 hay 身弱, kèm phần trăm và lý do — 得令, 失令, có 通根 hay không.",
      "xj.f4t": "五行分布", "xj.f4d": "木·火·土·金·水 hiển thị theo điểm có trọng số — không phải đếm suông số chữ trong lá số.",
      "xj.f5t": "纳音 · 十二长生 · 八宅", "xj.f5d": "纳音 của lá số, vòng 十二长生 từng trụ, và 命卦 东/西四命 theo 八宅.",
      "xj.f6t": "复制 & 导出", "xj.f6d": "Chép nguyên lá số ra văn bản hoặc xuất thành file để lưu, in và gửi cho người khác xem.",
      "xj.co.eyebrow": "Bắt đầu", "xj.co.title": "Cài xong là lập được lá số.",
      "xj.co.body": `Tải bộ cài, chạy, rồi lấy key kích hoạt <b>miễn phí</b> qua Telegram — chừng một phút là xong. Kích hoạt rồi thì dùng được cả khi máy không nối mạng.`,
      "xj.co.btn": "Tải 玄机八字 →", "xj.co.btn2": "Cách lấy key",

      // legal
      "legal.updated": "Cập nhật lần cuối: 04/09/2026",
      "legal.back": "← Về trang chủ",
      "legal.privacy.title": "Chính sách bảo mật — AuraLink Studio",
      "legal.privacy.desc": "Chính sách bảo mật của AuraLink Studio: dữ liệu trang web thu thập, cách kích hoạt giấy phép qua Telegram, và dữ liệu trong từng ứng dụng.",
      "legal.terms.title": "Điều khoản sử dụng — AuraLink Studio",
      "legal.terms.desc": "Điều khoản sử dụng phần mềm AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ và 玄机八字 XuanJi BaZi.",
      "pv.h1": "Chính sách bảo mật",
      "pv.s1.t": "Giới thiệu",
      "pv.s1.b": `AuraLink Studio ("chúng tôi") vận hành trang web auralink.io.vn và các ứng dụng desktop AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ, 玄机八字 XuanJi BaZi. Chính sách này giải thích chúng tôi xử lý thông tin gì khi bạn dùng trang web và các kênh liên quan (email, Telegram).`,
      "pv.s2.t": "Trang web này không theo dõi bạn",
      "pv.s2.b": "auralink.io.vn không dùng cookie theo dõi, không tích hợp Google Analytics hay bất kỳ công cụ phân tích, quảng cáo nào. Trang chỉ lưu một mục duy nhất trên trình duyệt của bạn — lựa chọn ngôn ngữ (VI/EN/中) — trong localStorage; dữ liệu này không rời khỏi máy bạn và không được gửi về máy chủ nào.",
      "pv.s3.t": "Khi bạn tải phần mềm",
      "pv.s3.b": "File cài đặt được lưu trữ và phân phối qua GitHub Releases. Việc tải file chịu sự điều chỉnh của chính sách riêng tư của GitHub, không phải của chúng tôi — chúng tôi không thể biết ai đã bấm nút tải.",
      "pv.s4.t": "Khi bạn kích hoạt giấy phép qua Telegram",
      "pv.s4.b": "Kích hoạt giấy phép hiện thực hiện qua bot Telegram @WUWEI_KEYBOT. Việc bạn nhắn tin cho bot chịu sự điều chỉnh của chính sách riêng tư của Telegram. Bot chỉ xử lý thông tin cần thiết để phát hành và xác thực giấy phép (ví dụ: ID Telegram của bạn), không dùng cho mục đích nào khác.",
      "pv.s5.t": "Dữ liệu trong ứng dụng đã cài đặt",
      "pv.s5.b": "Mỗi ứng dụng có hành vi mạng riêng. Phần lớn tính năng — như lập lá số hay nối dây âm thanh — chạy hoàn toàn cục bộ trên máy bạn và tiếp tục hoạt động cả khi không nối mạng sau khi kích hoạt. Nếu bạn cần biết chi tiết một ứng dụng cụ thể gửi dữ liệu gì, gửi email cho chúng tôi — chúng tôi trả lời trực tiếp theo từng ứng dụng.",
      "pv.s6.t": "Dịch vụ bên thứ ba trên trang",
      "pv.s6.b": "Font chữ được tải từ Google Fonts (fonts.googleapis.com, fonts.gstatic.com) để hiển thị đúng kiểu chữ — đây là kết nối tiêu chuẩn theo chính sách riêng tư của Google Fonts.",
      "pv.s7.t": "Bảo mật",
      "pv.s7.b": "Trang được phục vụ qua HTTPS. Vì trang không thu thập dữ liệu cá nhân, không có cơ sở dữ liệu người dùng nào để rò rỉ.",
      "pv.s8.t": "Quyền của bạn & liên hệ",
      "pv.s8.b": `Nếu bạn có câu hỏi về chính sách này hoặc muốn biết thêm về dữ liệu liên quan đến giấy phép của mình, liên hệ <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>.`,
      "pv.s9.t": "Thay đổi chính sách",
      "pv.s9.b": "Chúng tôi có thể cập nhật chính sách này khi sản phẩm hoặc cách vận hành thay đổi. Ngày cập nhật lần cuối luôn hiển thị ở đầu trang.",
      "tos.h1": "Điều khoản sử dụng",
      "tos.s1.t": "Chấp nhận điều khoản",
      "tos.s1.b": "Bằng việc tải, cài đặt hoặc dùng phần mềm từ auralink.io.vn, bạn đồng ý với các điều khoản dưới đây. Nếu không đồng ý, vui lòng không tải hoặc sử dụng phần mềm.",
      "tos.s2.t": "Giấy phép sử dụng phần mềm",
      "tos.s2.b": "AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ và 玄机八字 XuanJi BaZi hiện được cung cấp miễn phí trong giai đoạn này. Giấy phép cấp cho bạn quyền cài đặt và sử dụng cho mục đích cá nhân hoặc công việc thường ngày — không cấp quyền phân phối lại, bán lại hay đóng gói lại dưới tên khác. Điều khoản có thể thay đổi khi phần mềm ra bản chính thức có thu phí; thay đổi sẽ được thông báo trước khi áp dụng cho người dùng hiện tại.",
      "tos.s3.t": "Sở hữu trí tuệ & nhãn hiệu bên thứ ba",
      "tos.s3.b": "Phần mềm và nội dung trang web thuộc quyền sở hữu của AuraLink Studio, trừ các phần thuộc bên thứ ba. ASIO là nhãn hiệu đã đăng ký của Steinberg Media Technologies GmbH. REAPER là nhãn hiệu của Cockos Incorporated. AuraLink Studio không liên kết, tài trợ hay được xác nhận bởi Steinberg hay Cockos; các nhãn hiệu này chỉ được nhắc tới để mô tả khả năng tương thích.",
      "tos.s4.t": "Sử dụng hợp lệ",
      "tos.s4.b": "Bạn đồng ý không: dịch ngược, bẻ khoá hoặc phá vỡ cơ chế cấp phép; dùng phần mềm cho mục đích trái pháp luật; giả mạo là tác giả hoặc nhà phân phối chính thức của phần mềm.",
      "tos.s5.t": "Miễn trừ bảo hành",
      "tos.s5.b": `Phần mềm được cung cấp "nguyên trạng", không kèm bảo hành dưới bất kỳ hình thức nào, dù rõ ràng hay ngụ ý — bao gồm nhưng không giới hạn khả năng thương mại hoá hay phù hợp cho một mục đích cụ thể.`,
      "tos.s6.t": "Giới hạn trách nhiệm",
      "tos.s6.b": "Trong phạm vi pháp luật cho phép, AuraLink Studio không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên hay hệ quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng phần mềm.",
      "tos.s7.t": "Thay đổi dịch vụ & điều khoản",
      "tos.s7.b": "Chúng tôi có thể cập nhật phần mềm, trang web hoặc các điều khoản này bất kỳ lúc nào. Bản mới nhất luôn có hiệu lực kể từ ngày đăng.",
      "tos.s8.t": "Luật áp dụng & liên hệ",
      "tos.s8.b": `Điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam. Mọi câu hỏi, gửi về <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>.`
    },

    en: {
      "nav.products": "Products", "nav.why": "Why", "nav.downloads": "Download",
      "nav.audio": "Audio", "nav.meta": "Metaphysics",
      "foot.c1": "Products", "foot.c3": "Connect", "foot.contact": "Contact", "foot.email": "Email",
      "foot.desc": "Desktop software for creators. Built in Vietnam.",
      "foot.tagline": "Made with precision, measured not guessed.",
      "index.title": "AuraLink Studio — Desktop software for real work",
      "index.desc": "AuraLink Studio makes desktop software for Windows and macOS: share one audio device across every app, tell your DAW what you want, and cast Four Pillars charts that are right to the minute.",
      "hero.eyebrow": "Desktop software for real work",
      "hero.title": `Your hard part,<br><span class="grad">handled.</span>`,
      "hero.lead": "Share one audio device across every app at once. Tell your DAW what you want instead of clicking all afternoon. Cast a Four Pillars chart that is right to the minute a solar term turns. Each app unpicks one specific knot — on Windows and macOS.",
      "hero.cta1": "Explore products →", "hero.cta2": "Download",
      "hero.m1n": "4", "hero.m1": "apps",
      "hero.m2": "cost right now", "hero.m3": "platforms · Win / macOS",
      "products.eyebrow": "Our products", "products.title": "Four apps. Four knots unpicked.",
      "products.lead": "Each app came out of one genuinely annoying job, and does exactly that job — properly, all the way.",
      "fam.audio": "Audio & Production", "fam.meta": "Metaphysics & BaZi",
      "card.new": "New · v1.0",
      "chip.vi": "Vietnamese", "chip.cable": "4 virtual cables", "chip.chart": "Chart + reading",
      "card.al.desc": "One audio device shared by your DAW, Windows sound and every other app at the same time — and you drag the cables that decide where each sound goes. Replaces ASIO Link Pro, which stopped being developed.",
      "card.arc.tag": "Free",
      "card.arc.desc": `Tell REAPER what to do in plain words. The assistant "Amadeus" gets it, then builds tracks, wires routing, adjusts the mix and writes MIDI — you keep the creative part, it takes the clicking.`,
      "card.hc.desc": "A birth date and time is all it needs for a full chart: four pillars, hidden stems, ten gods, day-master strength, five elements and the useful god. Right even in the cases that usually trip software up — born after 11pm, or on the day a solar term turns. Vietnamese interface.",
      "card.xj.desc": "The edition for readers of Chinese: the same charting, with the traditional terminology kept in its original characters and UTC+8 as the default time zone. Everything the Vietnamese edition does, in Simplified Chinese.",
      "pcard.details": "Details →", "pcard.download": "Download",
      "why.eyebrow": "Why AuraLink", "why.title": "Built for people who actually use it.",
      "why.f1t": "Numbers, not adjectives",
      "why.f1d": "Three audio apps sharing one device at once, without a single dropout. Solar terms matching the almanac to the minute. Every claim on this site has a measurement behind it.",
      "why.f2t": "A readable interface",
      "why.f2d": "Professional-grade power in an interface anyone can understand. No more dense, undiscoverable UI.",
      "why.f3t": "Stability first",
      "why.f3d": "A pretty tool that drops out mid-session is worthless. Correctness outranks every feature.",
      "dl.eyebrow": "Download", "dl.title": "Get started.",
      "dl.lead": "Free download for Windows and macOS. After installing, scan the Telegram code below to get your activation license — one bot serves every app.",
      "dl.al.spec": "v0.9.0 · Windows 10/11 · x64 · .zip (installer + guide) · 19.4 MB",
      "dl.arc.spec": "v2.1.0 · Windows 10/11 · x64 · installer · 39.0 MB",
      "dl.arcmac.spec": "v2.1.0 · macOS · Universal · .pkg (notarized) · 20.5 MB",
      "dl.hc.spec": "v1.0.0 · Windows 10/11 · x64 · installer · 40.4 MB · Vietnamese interface",
      "dl.xj.spec": "v1.0.0 · Windows 10/11 · x64 · installer · 38.6 MB · Chinese interface",
      "license.eyebrow": "Activation · Free", "license.title": "Get your license via Telegram.",
      "license.lead": "After installing, get your activation key fully automatically — message the Telegram bot and receive your license in seconds. One bot issues keys for every app. Free during this phase.",
      "license.s1t": "Open the bot", "license.s1d": "Scan the QR code with your phone, or tap the button below if you're on a computer.",
      "license.s2t": "Message the bot", "license.s2d": `Message <code>@WUWEI_KEYBOT</code>, pick your product and follow the prompts.`,
      "license.s3t": "Get your key", "license.s3d": "The bot returns your license automatically — paste it into the app to activate.",
      "license.btn": "Open @WUWEI_KEYBOT on Telegram →", "license.qrcap": "Scan to open the bot and get your key",
      "license.qralt": "Scan the QR code to get your license via Telegram @WUWEI_KEYBOT",
      "band.eyebrow": "Coming soon", "band.title": "Commercial launch is coming.",
      "band.lead": "Sign up to be notified when the official release, pricing and licensing go live. No spam — only what matters.",
      "band.btn": "Get notified →",
      "al.title": "AuraLink Router — One audio device, shared by every app",
      "al.desc": "AuraLink Router lets your DAW, Windows sound and every other app share one audio device at the same time, with cables you drag yourself. Replaces ASIO Link Pro, which stopped being developed.",
      "al.tag": "Live · v0.9.0 · Windows",
      "al.h1": "One audio device.<br>Shared by the whole machine.",
      "al.lead": "Normally, opening your DAW silences everything else. AuraLink Router fixes exactly that: DAW, Windows sound, browser and OBS all run on one device — then you drag the cables that decide where each sound goes. It replaces ASIO Link Pro, which stopped being developed.",
      "al.cta1": "Download for Windows →", "al.cta2": "See features",
      "al.shotalt": "AuraLink Router interface: a patch bay wiring the DAW, virtual cables and the audio device",
      "al.spec.eyebrow": "Core features", "al.spec.title": "What it can do today.",
      "al.spec.lead": "Every line below has been measured, not promised.",
      "al.s1t": "Many apps, one device", "al.s1d": "Three apps sharing one device at once, each at its own latency setting, with no dropouts.",
      "al.s2t": "4 virtual cables", "al.s2d": "Move sound between apps in both directions, each route kept cleanly separate.",
      "al.s3t": "DAW + Windows → OBS", "al.s3d": "Your music and your system sound reach OBS together, for streaming or recording.",
      "al.s4t": "Wire it by dragging cables", "al.s4d": "Level and mute per port, with 8 saved setups so you can switch between sessions fast.",
      "al.s5t": "If you know ASIO Link Pro, you know this", "al.s5d": "Sound flows the same way ALP did — nothing to relearn.",
      "al.s6t": "Runs with Cubase / Nuendo", "al.s6d": "Confirmed by ear at 256 samples of latency.",
      "al.co.eyebrow": "Context", "al.co.title": "Why AuraLink exists.",
      "al.co.body": `ASIO Link Pro is the best tool of its kind on Windows and has no replacement — its author John Shield passed away and the software stopped. It still wins on function, losing only on a dated interface no one can maintain. AuraLink takes exactly that bet: <b>match its function to the last detail, and give it an interface people can read.</b>`,
      "al.co.btn": "Download AuraLink Router →",
      "arc.title": "AI Reaper Commander — Tell REAPER what to do",
      "arc.desc": "AI Reaper Commander lets you command REAPER in plain words: build tracks, wire routing, adjust the mix and write MIDI. A desktop app for Windows and macOS.",
      "arc.tag": "Official release v2.1.0 · Windows & macOS",
      "arc.h1": "Talk to your DAW.<br>It does the work.",
      "arc.lead": `Say what you want in plain words; the assistant "Amadeus" understands and does it right there in REAPER — builds tracks, wires routing, adjusts the mix, writes MIDI and loads instruments. You keep the creative part, it takes the repetitive clicking.`,
      "arc.cta1": "Download free →", "arc.cta2": "See features",
      "arc.shotalt": "AI Reaper Commander interface: project details, assistant selection and the Amadeus chat panel",
      "arc.demo.eyebrow": "One exchange", "arc.demo.title": "You state the goal. It executes.",
      "arc.demo.user": "Create 4 empty tracks with sidechain for me.",
      "arc.demo.steps": "⟳ Creating tracks… ✓<br>⟳ Assigning sidechain bus… ✓<br>⟳ Routing send −6 dB… ✓",
      "arc.demo.done": "Done. 4 tracks ready, sidechain connected.",
      "arc.spec.eyebrow": "Features", "arc.spec.title": "A production assistant sitting inside your DAW.",
      "arc.f1t": "Command it in plain words", "arc.f1d": "Talk to it like a person: make tracks, split parts, build buses, ride gain. No shortcuts to memorise, no menus to hunt through.",
      "arc.f2t": "Writes music into the project", "arc.f2d": "Composes MIDI, loads virtual instruments and builds parts directly in REAPER — nothing to copy in from somewhere else.",
      "arc.f3t": "Pick an assistant that fits your budget", "arc.f3d": "Choose the AI provider and model yourself, free tiers included. Change how the assistant works with personas.",
      "arc.f4t": "Activate once", "arc.f4d": "Quick setup, stable long-term — no logging in again every time you open it.",
      "arc.f5t": "Knows the project it's in", "arc.f5d": "It sees the key, the tempo and the tracks you already have, so what it suggests fits the arrangement instead of fighting it.",
      "arc.f6t": "Save & reopen a session", "arc.f6d": "A whole working session can be saved; reopen it and you're back where you left off, with the context and the conversation intact.",
      "arc.pl.eyebrow": "Platforms", "arc.pl.title": "Windows and macOS.",
      "arc.pl.body": "Both builds are finished and running for real. The macOS build is notarized by Apple, so installing it won't be blocked by the system.",
      "arc.pl.win": "Download for Windows →", "arc.pl.mac": "Download for macOS",
      "hc.title": "Huyền Cơ Tứ Trụ — Accurate Four Pillars charting",
      "hc.desc": "Huyền Cơ Tứ Trụ casts a Four Pillars chart from a birth date and time: four pillars, hidden stems, ten gods, strength, five elements, useful god. Right even for births after 11pm or on a solar-term day. Windows app, Vietnamese interface.",
      "hc.tag": "Official release v1.0.0 · Windows",
      "hc.h1": "Four Pillars charts,<br>right even on the awkward days.",
      "hc.lead": "Enter a birth date and time, press one button, and you have a full chart to read from: four pillars, hidden stems, ten gods, day-master strength, five-element distribution, useful god. What sets it apart is the cases other software gets wrong — births after 11pm, and births on the day a solar term turns. The app's own interface is in Vietnamese.",
      "hc.cta1": "Download for Windows →", "hc.cta2": "See the awkward cases",
      "hc.shotalt": "Huyền Cơ Tứ Trụ interface: the four pillars, day-master strength and five-element distribution",
      "hc.p.eyebrow": "The awkward cases", "hc.p.title": "Six places charts usually slip. Not here.",
      "hc.p.lead": "Charting software mostly agrees on ordinary cases and differs on just a few. These are those few.",
      "hc.s1t": "Born after 11pm",
      "hc.s1d": "A birth between 23:00 and 23:59 already belongs to the next day for the day and hour pillars, and the chart says which half of the zi hour it is. This is where a lot of software silently takes the calendar date instead.",
      "hc.s2t": "Born on the day a solar term turns",
      "hc.s2d": "The turning moment is worked out to the minute, so someone born close to the boundary doesn't get the wrong year or month pillar.",
      "hc.s3t": "Matches the almanac",
      "hc.s3d": "Lập Xuân 2024 comes out at 16:27 — exactly as the astronomical almanac has it. Check any date you like against it.",
      "hc.s4t": "Right for births far back in time",
      "hc.s4d": "Someone born centuries ago still gets the correct day pillar, undisturbed by the historical calendar reforms.",
      "hc.s5t": "True solar time, if you want it",
      "hc.s5d": "Optionally correct for the longitude of the birthplace, for those who work that way — off by default, never forced on you.",
      "hc.s6t": "Strength you can argue with",
      "hc.s6d": "Strong or weak is scored from the birth month, the day branch, rooting and support — with a percentage so you can see how far either way — and the useful god follows from that score.",
      "hc.f.eyebrow": "In the chart", "hc.f.title": "One click, enough to read from.",
      "hc.f1t": "All four pillars", "hc.f1d": "Stems and branches for year, month, day and hour — coloured by element, with the day master marked so you spot it at once.",
      "hc.f2t": "Hidden stems & ten gods", "hc.f2d": "Every branch opens into its hidden stems with the matching ten gods, set right under the pillar so it reads in one pass.",
      "hc.f3t": "Day-master strength", "hc.f3d": "Strong or weak, with a percentage and the reason — in or out of season, rooted or not.",
      "hc.f4t": "Five-element distribution", "hc.f4d": "Wood, fire, earth, metal and water shown as weighted scores — not a raw count of characters in the chart.",
      "hc.f5t": "Nayin · twelve stages · Eight Mansions", "hc.f5d": "The chart's nayin, the twelve life stages per pillar, and the East / West group destiny trigram.",
      "hc.f6t": "Copy & export", "hc.f6d": "Copy the whole chart as text, or export it to a file to keep, print and pass on to someone else.",
      "hc.co.eyebrow": "Getting started", "hc.co.title": "Install it and you're charting.",
      "hc.co.body": `Download the installer, run it, then pick up a <b>free</b> activation key over Telegram — about a minute all in. Once activated it keeps working with no internet connection at all.`,
      "hc.co.btn": "Download Huyền Cơ Tứ Trụ →", "hc.co.btn2": "How to get a key",
      "xj.title": "玄机八字 XuanJi BaZi — Four Pillars charting in Chinese",
      "xj.desc": "玄机八字 (XuanJi BaZi) casts a Four Pillars chart from a birth date and time, right even for births after 11pm or on a solar-term day. Windows app, Simplified Chinese interface.",
      "xj.tag": "Official release v1.0.0 · Windows",
      "xj.h1": `玄机八字<br><span class="grad">Four Pillars, in Chinese.</span>`,
      "xj.lead": "The edition for readers of Chinese: the same charting, with the traditional terminology kept in its original characters and UTC+8 as the default time zone. Enter a birth date and time and you have the four pillars, hidden stems, ten gods, strength, five elements and useful god.",
      "xj.cta1": "Download for Windows →", "xj.cta2": "See the awkward cases",
      "xj.shotalt": "玄机八字 interface: the four pillars, day-master strength and five-element distribution",
      "xj.p.eyebrow": "The awkward cases", "xj.p.title": "Six places charts usually slip. Not here.",
      "xj.p.lead": "Charting software mostly agrees on ordinary cases and differs on just a few. These are those few.",
      "xj.s1t": "Born after 11pm (晚子时)",
      "xj.s1d": "A birth between 23:00 and 23:59 already belongs to the next day for 日柱 and 时柱, labelled 早子 or 晚子.",
      "xj.s2t": "Born on a 交节 day",
      "xj.s2d": "The turning moment is worked out to the minute, so someone born close to the boundary doesn't get the wrong 年柱 or 月柱.",
      "xj.s3t": "Matches the almanac (节气)",
      "xj.s3d": "立春 2024 comes out at 16:27 — exactly as the astronomical almanac has it. Check any date you like against it.",
      "xj.s4t": "Right for births far back in time",
      "xj.s4d": "Someone born centuries ago still gets the correct 日柱, undisturbed by the historical calendar reforms.",
      "xj.s5t": "真太阳时, if you want it",
      "xj.s5d": "Optionally correct for the longitude of the birthplace, for those who work that way — off by default, never forced on you.",
      "xj.s6t": "旺衰 you can argue with",
      "xj.s6d": "身强 or 身弱 is scored from 月令, 日支, 通根 and 生扶 — with a percentage — and 用神 follows from that score.",
      "xj.f.eyebrow": "In the chart", "xj.f.title": "One click, enough to read from.",
      "xj.f1t": "All four 四柱", "xj.f1d": "干支 for 年·月·日·时 — coloured by 五行, with 日主 marked so you spot it at once.",
      "xj.f2t": "藏干 & 十神", "xj.f2d": "Every 地支 opens into its 藏干 with the matching 十神, set right under the pillar so it reads in one pass.",
      "xj.f3t": "日元旺衰", "xj.f3d": "身强 or 身弱, with a percentage and the reason — 得令, 失令, rooted or not.",
      "xj.f4t": "五行分布", "xj.f4d": "木·火·土·金·水 shown as weighted scores — not a raw count of characters in the chart.",
      "xj.f5t": "纳音 · 十二长生 · 八宅", "xj.f5d": "The chart's 纳音, the 十二长生 stage per pillar, and the 命卦 for 东 / 西四命.",
      "xj.f6t": "复制 & 导出", "xj.f6d": "Copy the whole chart as text, or export it to a file to keep, print and pass on to someone else.",
      "xj.co.eyebrow": "Getting started", "xj.co.title": "Install it and you're charting.",
      "xj.co.body": `Download the installer, run it, then pick up a <b>free</b> activation key over Telegram — about a minute all in. Once activated it keeps working with no internet connection at all.`,
      "xj.co.btn": "Download 玄机八字 →", "xj.co.btn2": "How to get a key",

      // legal
      "legal.updated": "Last updated: 2026-09-04",
      "legal.back": "← Back to home",
      "legal.privacy.title": "Privacy Policy — AuraLink Studio",
      "legal.privacy.desc": "AuraLink Studio's privacy policy: what the website collects, how Telegram license activation works, and what each app does with data.",
      "legal.terms.title": "Terms of Service — AuraLink Studio",
      "legal.terms.desc": "Terms of service for AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ and 玄机八字 XuanJi BaZi.",
      "pv.h1": "Privacy Policy",
      "pv.s1.t": "Introduction",
      "pv.s1.b": `AuraLink Studio ("we") operates the auralink.io.vn website and the desktop apps AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ and 玄机八字 XuanJi BaZi. This policy explains what we do with information when you use the website and related channels (email, Telegram).`,
      "pv.s2.t": "This website does not track you",
      "pv.s2.b": "auralink.io.vn uses no tracking cookies and no analytics or advertising tools of any kind. The only thing the site stores in your browser is your language choice (VI/EN/中) in localStorage — that stays on your device and is never sent to any server.",
      "pv.s3.t": "When you download software",
      "pv.s3.b": "Installers are hosted and served through GitHub Releases. Downloading a file is governed by GitHub's own privacy policy, not ours — we have no way of knowing who clicked a download button.",
      "pv.s4.t": "When you activate a license over Telegram",
      "pv.s4.b": "License activation currently runs through the Telegram bot @WUWEI_KEYBOT. Messaging the bot is governed by Telegram's own privacy policy. The bot only processes what it needs to issue and verify a license (for example, your Telegram ID), and for no other purpose.",
      "pv.s5.t": "Data inside the installed apps",
      "pv.s5.b": "Each app has its own network behavior. Most features — charting a BaZi reading, routing audio cables — run entirely on your machine and keep working offline once activated. If you need details on what a specific app sends, email us — we'll answer per app, specifically.",
      "pv.s6.t": "Third-party services on this site",
      "pv.s6.b": "Fonts are loaded from Google Fonts (fonts.googleapis.com, fonts.gstatic.com) to render correctly — a standard connection under Google Fonts' own privacy policy.",
      "pv.s7.t": "Security",
      "pv.s7.b": "The site is served over HTTPS. Since it collects no personal data, there is no user database to leak.",
      "pv.s8.t": "Your rights & contact",
      "pv.s8.b": `Questions about this policy, or about data tied to your license, go to <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>.`,
      "pv.s9.t": "Changes to this policy",
      "pv.s9.b": "We may update this policy as products or operations change. The last-updated date at the top always reflects the current version.",
      "tos.h1": "Terms of Service",
      "tos.s1.t": "Accepting these terms",
      "tos.s1.b": "By downloading, installing or using software from auralink.io.vn, you agree to the terms below. If you don't agree, please don't download or use the software.",
      "tos.s2.t": "Software license",
      "tos.s2.b": "AuraLink Router, AI Reaper Commander, Huyền Cơ Tứ Trụ and 玄机八字 XuanJi BaZi are currently free during this stage. The license lets you install and use them for personal or everyday work — it does not grant the right to redistribute, resell, or repackage under another name. Terms may change once a paid release ships; any change will be announced before it applies to existing users.",
      "tos.s3.t": "Intellectual property & third-party trademarks",
      "tos.s3.b": "The software and website content belong to AuraLink Studio, except where owned by a third party. ASIO is a registered trademark of Steinberg Media Technologies GmbH. REAPER is a trademark of Cockos Incorporated. AuraLink Studio is not affiliated with, sponsored by, or endorsed by Steinberg or Cockos; those names are used only to describe compatibility.",
      "tos.s4.t": "Acceptable use",
      "tos.s4.b": "You agree not to: reverse-engineer, crack, or defeat the licensing mechanism; use the software for unlawful purposes; or represent yourself as the software's author or official distributor.",
      "tos.s5.t": "No warranty",
      "tos.s5.b": `The software is provided "as is," with no warranty of any kind, express or implied — including, without limitation, merchantability or fitness for a particular purpose.`,
      "tos.s6.t": "Limitation of liability",
      "tos.s6.b": "To the extent permitted by law, AuraLink Studio is not liable for any indirect, incidental, or consequential damages arising from use or inability to use the software.",
      "tos.s7.t": "Changes to the service & these terms",
      "tos.s7.b": "We may update the software, the website, or these terms at any time. The version currently posted is the one in effect.",
      "tos.s8.t": "Governing law & contact",
      "tos.s8.b": `These terms are governed by the laws of Vietnam. Questions go to <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>.`
    },

    zh: {
      "nav.products": "产品", "nav.why": "为什么", "nav.downloads": "下载",
      "nav.audio": "音频", "nav.meta": "玄学",
      "foot.c1": "产品", "foot.c3": "联系我们", "foot.contact": "联系", "foot.email": "邮箱",
      "foot.desc": "为创作者打造的桌面软件。源自越南。",
      "foot.tagline": "以精准打造 —— 实测，而非臆测。",
      "index.title": "AuraLink Studio —— 为实际工作打造的桌面软件",
      "index.desc": "AuraLink Studio 为 Windows 与 macOS 打造桌面软件：让所有应用共用一台声卡、用一句话指挥 DAW、排出精确到交节分钟的四柱命盘。",
      "hero.eyebrow": "为实际工作打造的桌面软件",
      "hero.title": `难做的那一步，<br><span class="grad">交给软件。</span>`,
      "hero.lead": "让所有应用同时共用一台声卡。用一句话指挥 DAW，而不是点一下午鼠标。排出精确到交节分钟的四柱命盘。每一款只解开一个具体的结 —— 支持 Windows 与 macOS。",
      "hero.cta1": "探索产品 →", "hero.cta2": "下载",
      "hero.m1n": "3", "hero.m1": "款应用",
      "hero.m2": "费用（现阶段）", "hero.m3": "个平台 · Win / macOS",
      "products.eyebrow": "产品系列", "products.title": "三款应用，解开三个结。",
      "products.lead": "每一款都源自一件真正麻烦的事，并且只把那件事做到底。",
      "fam.audio": "音频与制作", "fam.meta": "玄学与命理",
      "card.new": "全新 · v1.0",
      "chip.vi": "越南语", "chip.cable": "4 条虚拟线缆", "chip.chart": "排盘 + 解读",
      "card.al.desc": "一台声卡，让 DAW、Windows 系统声音和其他所有应用同时共用 —— 每一路声音去哪里，由你自己拉线决定。接替已停止开发的 ASIO Link Pro。",
      "card.arc.tag": "免费",
      "card.arc.desc": `用大白话吩咐 REAPER。助手"Amadeus"听懂之后直接动手：建轨道、走路由、调混音、写 MIDI —— 创意归你，点鼠标归它。`,
      "card.hc.desc": "只需出生日期与时辰，即可排出完整命盘：四柱、藏干、十神、日元旺衰、五行分布与用神。连容易算错的情况也准 —— 23 点后出生，或恰逢交节当天。界面为越南语。",
      "card.xj.desc": "只需出生日期与时辰，即可排出完整命盘：四柱、藏干、十神、日元旺衰、五行分布与用神。连容易算错的情况也准 —— 23 点后出生，或恰逢交节当天。",
      "pcard.details": "详情 →", "pcard.download": "下载",
      "why.eyebrow": "为什么选择 AuraLink", "why.title": "为真正使用它的人而造。",
      "why.f1t": "只讲数字，不讲形容词",
      "why.f1d": "三个音频应用同时共用一台声卡，一次断音都没有；节气与天文历精确到分。这个站上每一句话，背后都有一次实测。",
      "why.f2t": "看得懂的界面",
      "why.f2d": "专业级的能力，配上人人都能理解的界面。告别密密麻麻、难以摸索的 UI。",
      "why.f3t": "稳定优先",
      "why.f3d": "再漂亮的工具，录到一半掉线也一文不值。正确性高于一切功能。",
      "dl.eyebrow": "下载", "dl.title": "立即开始。",
      "dl.lead": "Windows 和 macOS 免费下载。安装后，扫描下方 Telegram 二维码领取激活许可证 —— 所有应用共用同一个机器人。",
      "dl.al.spec": "v0.9.0 · Windows 10/11 · x64 · .zip（安装程序 + 说明）· 19.4 MB",
      "dl.arc.spec": "v2.1.0 · Windows 10/11 · x64 · 安装程序 · 39.0 MB",
      "dl.arcmac.spec": "v2.1.0 · macOS · Universal · .pkg（已公证）· 20.5 MB",
      "dl.hc.spec": "v1.0.0 · Windows 10/11 · x64 · 安装程序 · 40.4 MB · 越南语界面",
      "dl.xj.spec": "v1.0.0 · Windows 10/11 · x64 · 安装程序 · 38.6 MB",
      "license.eyebrow": "激活 · 免费", "license.title": "通过 Telegram 获取许可证。",
      "license.lead": "安装后，全自动获取激活密钥 —— 给 Telegram 机器人发条消息，几秒内即可收到许可证。所有应用共用一个机器人。当前阶段免费。",
      "license.s1t": "打开机器人", "license.s1d": "用手机扫描二维码；如果你在电脑上，点击下方按钮。",
      "license.s2t": "发送消息", "license.s2d": `向 <code>@WUWEI_KEYBOT</code> 发送消息，选择对应产品并按提示操作。`,
      "license.s3t": "领取密钥", "license.s3d": "机器人自动返回许可证 —— 粘贴到应用中即可激活。",
      "license.btn": "在 Telegram 打开 @WUWEI_KEYBOT →", "license.qrcap": "扫码打开机器人领取密钥",
      "license.qralt": "扫描二维码通过 Telegram @WUWEI_KEYBOT 获取许可证",
      "band.eyebrow": "即将推出", "band.title": "商业化即将到来。",
      "band.lead": "订阅以便在正式版、定价和授权发布时收到通知。绝不打扰 —— 只发重要消息。",
      "band.btn": "获取通知 →",
      "al.title": "AuraLink Router —— 一台声卡，所有应用共用",
      "al.desc": "AuraLink Router 让 DAW、Windows 系统声音和其他所有应用同时共用一台声卡，走线由你自己拉。接替已停止开发的 ASIO Link Pro。",
      "al.tag": "运行中 · v0.9.0 · Windows",
      "al.h1": "一台声卡，<br>整台电脑共用。",
      "al.lead": "平时一开 DAW，其他应用就没声了。AuraLink Router 解决的正是这件事：DAW、系统声音、浏览器、OBS 同时跑在一台声卡上 —— 然后由你拉线决定每一路声音去哪里。它接替了已停止开发的 ASIO Link Pro。",
      "al.cta1": "下载 Windows 版 →", "al.cta2": "查看功能",
      "al.shotalt": "AuraLink Router 界面：跳线台连接 DAW、虚拟线缆与声卡",
      "al.spec.eyebrow": "核心功能", "al.spec.title": "现在就能做到的。",
      "al.spec.lead": "以下每一条都经过实测，而非承诺。",
      "al.s1t": "多个应用，一台声卡", "al.s1d": "三个应用同时共用一台设备，各自设定各自的延迟，不掉音。",
      "al.s2t": "4 条虚拟线缆", "al.s2d": "在应用之间双向送声，每一路互不串扰。",
      "al.s3t": "DAW + 系统声音 → OBS", "al.s3d": "音乐和系统声音同时进入 OBS，可用于直播或录制。",
      "al.s4t": "拉线即可走声", "al.s4d": "每个接口独立调音量和静音，8 个预设槽位，换场景一键切换。",
      "al.s5t": "会用 ASIO Link Pro 就会用它", "al.s5d": "声音的走法和 ALP 一样 —— 不需要重新学。",
      "al.s6t": "配合 Cubase / Nuendo", "al.s6d": "在 256 采样延迟下经耳听确认。",
      "al.co.eyebrow": "背景", "al.co.title": "AuraLink 为何存在。",
      "al.co.body": `ASIO Link Pro 是 Windows 上同类工具中最好的，且无可替代 —— 作者 John Shield 离世后，软件便停止了更新。它在功能上依然领先，只输在无人能维护的陈旧界面上。AuraLink 正是接下这个赌注：<b>功能对齐到每一处，并给它一个人人可读的界面。</b>`,
      "al.co.btn": "下载 AuraLink Router →",
      "arc.title": "AI Reaper Commander —— 用一句话吩咐 REAPER",
      "arc.desc": "AI Reaper Commander 让你用大白话指挥 REAPER：建轨道、走路由、调混音、写 MIDI。适用于 Windows 和 macOS 的桌面应用。",
      "arc.tag": "正式版 v2.1.0 · Windows & macOS",
      "arc.h1": "对 DAW 说话，<br>它替你完成。",
      "arc.lead": `你用大白话说要什么，助手"Amadeus"听懂之后就在 REAPER 里动手 —— 建轨道、走路由、调混音、写 MIDI、加载音源。创意的部分留给你，重复点鼠标的部分交给它。`,
      "arc.cta1": "免费下载 →", "arc.cta2": "查看功能",
      "arc.shotalt": "AI Reaper Commander 界面：工程信息、助手选择与 Amadeus 对话面板",
      "arc.demo.eyebrow": "一次对话", "arc.demo.title": "你说目标，它去执行。",
      "arc.demo.user": "帮我创建 4 条带侧链的空轨道。",
      "arc.demo.steps": "⟳ 正在创建轨道… ✓<br>⟳ 分配侧链总线… ✓<br>⟳ 路由发送 −6 dB… ✓",
      "arc.demo.done": "完成。4 条轨道就绪，侧链已连接。",
      "arc.spec.eyebrow": "功能", "arc.spec.title": "坐在 DAW 里的制作助手。",
      "arc.f1t": "用大白话下指令", "arc.f1d": "像跟人说话一样：建轨、分声部、搭总线、推电平。不用背快捷键，也不用翻菜单。",
      "arc.f2t": "直接把音乐写进工程", "arc.f2d": "在 REAPER 里直接写 MIDI、加载音源、编排声部 —— 不用从别处复制粘贴。",
      "arc.f3t": "按预算挑助手", "arc.f3d": "AI 供应商和模型自己选，包括免费额度的那些。用人格切换助手的工作风格。",
      "arc.f4t": "一次激活", "arc.f4d": "设置快捷，长期稳定 —— 无需每次打开都重新登录。",
      "arc.f5t": "知道自己在哪个工程里", "arc.f5d": "它看得到当前的调性、速度和已有轨道，所以给的方案是贴着编曲走，而不是跟编曲打架。",
      "arc.f6t": "保存与重开会话", "arc.f6d": "整场工作都能存下来；重新打开就回到刚才停下的地方，上下文和对话记录都在。",
      "arc.pl.eyebrow": "平台", "arc.pl.title": "Windows 与 macOS。",
      "arc.pl.body": "两个版本都已完成并投入实际使用。macOS 版已通过 Apple 公证，安装时不会被系统拦下。",
      "arc.pl.win": "下载 Windows 版 →", "arc.pl.mac": "下载 macOS 版",
      "hc.title": "Huyền Cơ Tứ Trụ —— 越南语版四柱排盘",
      "hc.desc": "Huyền Cơ Tứ Trụ 依出生日期时辰排出完整命盘，连 23 点后出生、交节当天出生也算得准。Windows 应用，界面为越南语。",
      "hc.tag": "正式版 v1.0.0 · Windows",
      "hc.h1": "四柱命盘，<br>连异常的日子也算得准。",
      "hc.lead": "输入出生日期和时辰，一键就得到可以起论的完整命盘：四柱、藏干、十神、日元旺衰、五行分布、用神。真正的差别在别家常算错的情况 —— 23 点后出生，以及恰逢交节那天出生。应用界面为越南语。",
      "hc.cta1": "下载 Windows 版 →", "hc.cta2": "查看容易算错的情况",
      "hc.shotalt": "Huyền Cơ Tứ Trụ 界面：四柱、日元旺衰、五行分布",
      "hc.p.eyebrow": "容易算错的情况", "hc.p.title": "六处常见偏差，这里算得准。",
      "hc.p.lead": "排盘软件在常规情况下大同小异，只在少数几种情况上分高下。就是下面这几种。",
      "hc.s1t": "23 点之后出生",
      "hc.s1d": "23:00–23:59 出生，日柱与时柱已进位到次日，并标明早子还是晚子。很多软件在这里直接取公历日期，就此算偏。",
      "hc.s2t": "恰逢交节当天出生",
      "hc.s2d": "交节时刻精算到分，紧贴分界出生的人不会被排到错误的年柱或月柱。",
      "hc.s3t": "与天文历一致",
      "hc.s3d": "2024 立春得 16:27 —— 与天文历完全吻合。任何一个节气你都可以自行核对。",
      "hc.s4t": "很久以前的生日也算得准",
      "hc.s4d": "几百年前出生的人，日柱依然正确，不受历史上改历的影响。",
      "hc.s5t": "需要真太阳时就开",
      "hc.s5d": "可按出生地经度追加校正，供讲究真太阳时的人使用 —— 默认关闭，不强加于人。",
      "hc.s6t": "旺衰有依据",
      "hc.s6d": "身强身弱按月令、日支、通根与生扶评分 —— 附百分比，一眼看出偏到什么程度 —— 用神据此推出。",
      "hc.f.eyebrow": "命盘内容", "hc.f.title": "一键排盘，足以起论。",
      "hc.f1t": "完整四柱", "hc.f1d": "年月日时的干支 —— 按五行着色，日主单独标记，一眼就能认出。",
      "hc.f2t": "藏干与十神", "hc.f2d": "每个地支展开藏干并标注对应十神，紧贴该柱排列，一路读下来不断线。",
      "hc.f3t": "日元旺衰", "hc.f3d": "身强或身弱，附百分比与理由 —— 得令、失令、通根与否。",
      "hc.f4t": "五行分布", "hc.f4d": "木火土金水以加权得分显示 —— 而不是简单数命盘里出现几个字。",
      "hc.f5t": "纳音 · 十二长生 · 八宅", "hc.f5d": "命盘纳音、各柱十二长生，以及东西四命的命卦。",
      "hc.f6t": "复制与导出", "hc.f6d": "整盘复制为文本，或导出文件以保存、打印、转给别人看。",
      "hc.co.eyebrow": "开始使用", "hc.co.title": "装好就能排盘。",
      "hc.co.body": `下载安装程序运行，再通过 Telegram 领一个<b>免费</b>激活密钥 —— 前后大约一分钟。激活之后，断网也照常使用。`,
      "hc.co.btn": "下载 Huyền Cơ Tứ Trụ →", "hc.co.btn2": "如何领取密钥",
      "xj.title": "玄机八字 XuanJi BaZi —— 专业四柱排盘",
      "xj.desc": "玄机八字（XuanJi BaZi）依出生日期时辰排出完整命盘，连 23 点后出生、交节当天出生也算得准。Windows 应用，简体中文界面。",
      "xj.tag": "正式版 v1.0.0 · Windows",
      "xj.h1": `玄机八字<br><span class="grad">专业四柱排盘</span>`,
      "xj.lead": "输入出生日期和时辰，一键就得到可以起论的完整命盘：四柱、藏干、十神、日元旺衰、五行分布、用神。真正的差别在别家常算错的情况 —— 23 点后出生，以及恰逢交节那天出生。",
      "xj.cta1": "下载 Windows 版 →", "xj.cta2": "查看容易算错的情况",
      "xj.shotalt": "玄机八字 界面：四柱排盘、日元旺衰、五行分布",
      "xj.p.eyebrow": "容易算错的情况", "xj.p.title": "六处常见偏差，这里算得准。",
      "xj.p.lead": "排盘软件在常规情况下大同小异，只在少数几种情况上分高下。就是下面这几种。",
      "xj.s1t": "晚子时出生",
      "xj.s1d": "23:00–23:59 出生，日柱与时柱已进位到次日，并标明早子还是晚子。很多软件在这里直接取公历日期，就此算偏。",
      "xj.s2t": "恰逢交节当天出生",
      "xj.s2d": "交节时刻精算到分，紧贴分界出生的人不会被排到错误的年柱或月柱。",
      "xj.s3t": "节气与天文历一致",
      "xj.s3d": "2024 立春得 16:27 —— 与天文历完全吻合。任何一个节气你都可以自行核对。",
      "xj.s4t": "很久以前的生日也算得准",
      "xj.s4d": "几百年前出生的人，日柱依然正确，不受历史上改历的影响。",
      "xj.s5t": "需要真太阳时就开",
      "xj.s5d": "可按出生地经度追加校正，供讲究真太阳时的人使用 —— 默认关闭，不强加于人。",
      "xj.s6t": "旺衰有依据",
      "xj.s6d": "身强身弱按月令、日支、通根与生扶评分 —— 附百分比，一眼看出偏到什么程度 —— 用神据此推出。",
      "xj.f.eyebrow": "命盘内容", "xj.f.title": "一键排盘，足以起论。",
      "xj.f1t": "完整四柱", "xj.f1d": "年月日时的干支 —— 按五行着色，日主单独标记，一眼就能认出。",
      "xj.f2t": "藏干与十神", "xj.f2d": "每个地支展开藏干并标注对应十神，紧贴该柱排列，一路读下来不断线。",
      "xj.f3t": "日元旺衰", "xj.f3d": "身强或身弱，附百分比与理由 —— 得令、失令、通根与否。",
      "xj.f4t": "五行分布", "xj.f4d": "木火土金水以加权得分显示 —— 而不是简单数命盘里出现几个字。",
      "xj.f5t": "纳音 · 十二长生 · 八宅", "xj.f5d": "命盘纳音、各柱十二长生，以及东西四命的命卦。",
      "xj.f6t": "复制与导出", "xj.f6d": "整盘复制为文本，或导出文件以保存、打印、转给别人看。",
      "xj.co.eyebrow": "开始使用", "xj.co.title": "装好就能排盘。",
      "xj.co.body": `下载安装程序运行，再通过 Telegram 领一个<b>免费</b>激活密钥 —— 前后大约一分钟。激活之后，断网也照常使用。`,
      "xj.co.btn": "下载 玄机八字 →", "xj.co.btn2": "如何领取密钥",

      // legal
      "legal.updated": "最后更新：2026-09-04",
      "legal.back": "← 返回首页",
      "legal.privacy.title": "隐私政策 — AuraLink Studio",
      "legal.privacy.desc": "AuraLink Studio 隐私政策：网站收集哪些信息、Telegram 许可证激活如何运作，以及各应用如何处理数据。",
      "legal.terms.title": "使用条款 — AuraLink Studio",
      "legal.terms.desc": "AuraLink Router、AI Reaper Commander、Huyền Cơ Tứ Trụ 与 玄机八字 XuanJi BaZi 的使用条款。",
      "pv.h1": "隐私政策",
      "pv.s1.t": "简介",
      "pv.s1.b": `AuraLink Studio（"我们"）运营 auralink.io.vn 网站，以及桌面应用 AuraLink Router、AI Reaper Commander、Huyền Cơ Tứ Trụ 与 玄机八字 XuanJi BaZi。本政策说明您使用本网站及相关渠道（邮箱、Telegram）时，我们如何处理信息。`,
      "pv.s2.t": "本网站不追踪您",
      "pv.s2.b": "auralink.io.vn 不使用任何追踪 Cookie，也不接入 Google Analytics 或任何分析、广告工具。网站仅在您的浏览器 localStorage 中保存一项内容——语言选择（VI/EN/中）——该数据留在您的设备上，不会发送到任何服务器。",
      "pv.s3.t": "下载软件时",
      "pv.s3.b": "安装包通过 GitHub Releases 托管与分发。下载文件受 GitHub 自身隐私政策约束，而非我们的政策——我们无法得知是谁点击了下载按钮。",
      "pv.s4.t": "通过 Telegram 激活许可证时",
      "pv.s4.b": "许可证激活目前通过 Telegram 机器人 @WUWEI_KEYBOT 完成。您与该机器人的对话受 Telegram 自身隐私政策约束。机器人仅处理签发与验证许可证所需的信息（例如您的 Telegram ID），不用于任何其他用途。",
      "pv.s5.t": "已安装应用中的数据",
      "pv.s5.b": "每款应用的网络行为各不相同。大多数功能——如排八字命盘、音频连线——完全在您本机运行，激活后即使断网也能继续使用。如需了解某个应用具体发送哪些数据，请发邮件给我们，我们会针对该应用逐一说明。",
      "pv.s6.t": "网站使用的第三方服务",
      "pv.s6.b": "字体通过 Google Fonts（fonts.googleapis.com、fonts.gstatic.com）加载以正确显示——这是遵循 Google Fonts 自身隐私政策的标准连接。",
      "pv.s7.t": "安全",
      "pv.s7.b": "本网站通过 HTTPS 提供服务。由于网站不收集个人数据，因此不存在可能泄露的用户数据库。",
      "pv.s8.t": "您的权利与联系方式",
      "pv.s8.b": `如对本政策有疑问，或想了解与您的许可证相关的数据，请联系 <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>。`,
      "pv.s9.t": "政策变更",
      "pv.s9.b": "我们可能会随产品或运营方式的变化更新本政策。页面顶部的更新日期始终反映当前版本。",
      "tos.h1": "使用条款",
      "tos.s1.t": "接受条款",
      "tos.s1.b": "下载、安装或使用来自 auralink.io.vn 的软件，即表示您同意以下条款。如不同意，请不要下载或使用本软件。",
      "tos.s2.t": "软件许可",
      "tos.s2.b": "AuraLink Router、AI Reaper Commander、Huyền Cơ Tứ Trụ 与 玄机八字 XuanJi BaZi 目前处于免费阶段。许可证授权您安装并用于个人或日常工作用途——不授予转售、再分发或以其他名义重新打包的权利。软件正式收费发布后条款可能变更；任何变更都会在对现有用户生效前予以公告。",
      "tos.s3.t": "知识产权与第三方商标",
      "tos.s3.b": "软件与网站内容归 AuraLink Studio 所有，第三方所有的部分除外。ASIO 是 Steinberg Media Technologies GmbH 的注册商标。REAPER 是 Cockos Incorporated 的商标。AuraLink Studio 与 Steinberg 或 Cockos 没有关联、赞助或认可关系；提及这些名称仅为说明兼容性。",
      "tos.s4.t": "合理使用",
      "tos.s4.b": "您同意不：对授权机制进行逆向工程、破解或绕过；将软件用于违法目的；冒充软件的作者或官方发行方。",
      "tos.s5.t": "不提供担保",
      "tos.s5.b": `软件按"现状"提供，不附带任何形式的明示或暗示担保——包括但不限于适销性或特定用途适用性。`,
      "tos.s6.t": "责任限制",
      "tos.s6.b": "在法律允许的最大范围内，AuraLink Studio 对因使用或无法使用本软件而产生的任何间接、偶然或衍生性损害不承担责任。",
      "tos.s7.t": "服务与条款变更",
      "tos.s7.b": "我们可能随时更新软件、网站或本条款。当前发布的版本即为生效版本。",
      "tos.s8.t": "适用法律与联系方式",
      "tos.s8.b": `本条款受越南法律管辖。如有疑问，请联系 <a href="mailto:auralinkvn@gmail.com">auralinkvn@gmail.com</a>。`
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

  // Products are not offered in every language: the Vietnamese app is not shown
  // to Chinese readers and vice versa. Anything carrying data-show-langs is only
  // displayed when the active language is in that list. See ARCHITECTURE.md §13.
  function applyAudience(lang) {
    document.querySelectorAll("[data-show-langs]").forEach(function (el) {
      var allowed = el.getAttribute("data-show-langs").split(/\s+/);
      var show = allowed.indexOf(lang) >= 0;
      var wasHidden = el.hidden;
      el.hidden = !show;
      // A card revealed by switching language may have missed its scroll cue.
      if (wasHidden && show) {
        el.querySelectorAll(".reveal").forEach(function (r) { r.classList.add("in"); });
        if (el.classList.contains("reveal")) el.classList.add("in");
      }
    });
    // A family left with a single visible card centres it instead of hanging
    // in the left half of a two-column grid.
    document.querySelectorAll(".products").forEach(function (grid) {
      var shown = 0;
      grid.querySelectorAll(".pcard").forEach(function (c) { if (!c.hidden) shown++; });
      grid.classList.toggle("products--single", shown === 1);
    });
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

    applyAudience(lang);
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
