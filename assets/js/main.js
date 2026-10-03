// AuraLink Studio — interactions
(function () {
  // sticky nav background on scroll
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu
  var burger = document.querySelector('.nav__burger');
  var links = document.querySelector('.nav__links');
  function setMenu(open) {
    links.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (burger && links) {
    burger.addEventListener('click', function () {
      setMenu(!links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) { setMenu(false); burger.focus(); }
    });
  }

  // current year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // reveal on scroll (content stays visible without JS / IntersectionObserver:
  // the hidden start state only applies under html.js, set by lang.js)
  var reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function (el, i) {
    el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + 's';
    io.observe(el);
  });
})();
