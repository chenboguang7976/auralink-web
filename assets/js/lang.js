/* AuraLink Studio - language routing (runs in <head>, before first paint).
   Every page is already written in its own language (/, /en/, /zh/); this file only
   1) remembers a manual VI/EN/zh pick, and
   2) on an external entry, sends the visitor to their language:
      - a saved manual pick always wins (on any page);
      - with no pick, only the Vietnamese pages redirect, by browser language, then
        time zone (for English browsers set to a CN/TW/HK/MO or VN clock).
   Crawlers are never redirected, so each language version is indexed as itself. */
(function () {
  "use strict";
  var LANGS = ["vi", "en", "zh"], KEY = "auralink_lang";
  var root = document.documentElement;
  var page = root.getAttribute("data-lang") || "vi";

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function alt(l) {
    var el = document.querySelector('link[rel="alternate"][hreflang="' + l + '"]');
    if (!el) return null;
    // keep the current origin (the tags carry the production URL; this also makes
    // a local test server route to itself instead of to the live site)
    try { var u = new URL(el.href); return location.origin + u.pathname; } catch (e) { return el.href; }
  }
  function detect() {
    var list = navigator.languages || [navigator.language || ""];
    var browser = null;
    for (var i = 0; i < list.length && !browser; i++) {
      var l = (list[i] || "").toLowerCase();
      if (l.indexOf("vi") === 0) browser = "vi";
      else if (l.indexOf("zh") === 0) browser = "zh";
      else if (l.indexOf("en") === 0) browser = "en";
    }
    if (browser === "vi" || browser === "zh") return browser;
    var tz = "";
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    if (["Asia/Shanghai", "Asia/Chongqing", "Asia/Chungking", "Asia/Harbin", "Asia/Urumqi",
         "Asia/Kashgar", "PRC", "Asia/Taipei", "ROC", "Asia/Hong_Kong", "Hongkong",
         "Asia/Macau", "Asia/Macao"].indexOf(tz) >= 0) return "zh";
    if (tz === "Asia/Ho_Chi_Minh" || tz === "Asia/Saigon") return "vi";
    return "en";
  }

  // the switcher links are plain <a>; just remember the pick before navigating
  document.addEventListener("click", function (e) {
    var a = e.target && e.target.closest ? e.target.closest(".lang a[data-lang]") : null;
    if (a) set(a.getAttribute("data-lang"));
  });

  if (/bot|crawl|spider|slurp|preview|facebookexternalhit|zalo|lighthouse|headless/i.test(navigator.userAgent || "")) return;
  var internal = false;
  try { internal = !!document.referrer && new URL(document.referrer).host === location.host; } catch (e) {}
  if (internal) return;

  var saved = get(), target = null;
  if (saved && LANGS.indexOf(saved) >= 0) target = saved;
  else if (page === "vi") target = detect();
  if (target && target !== page) {
    var url = alt(target);
    if (url) location.replace(url + location.hash);
  }
})();
