/* Marks the nav bar once the title band has scrolled away and the bar is
 * floating over body copy, so it can go from "translucent over the
 * photograph" to "nearly solid over text".
 *
 * Watches a sentinel at the foot of the band rather than listening to scroll —
 * IntersectionObserver fires off the main thread and costs nothing per frame.
 * Going solid on the first pixel of scroll would cover the picture the bar is
 * meant to be floating on.
 */
(function () {
  "use strict";
  var navbar = document.querySelector(".navbar");
  if (!navbar || !("IntersectionObserver" in window)) return;

  var sentinel = document.querySelector(".banner__sentinel");
  if (sentinel) {
    new IntersectionObserver(function (entries) {
      navbar.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }

  /* The phone menu is a <details>, so opening, closing, keyboard operation and
     the implicit aria-expanded all work with this script absent. What the
     platform does not give is closing again on the things that should close
     it — everything below is enhancement over a menu that already works. */
  var menu = navbar.querySelector(".navmenu");
  if (!menu) return;

  /* Every one of these only applies on a phone. On a desktop the menu is
     permanently open — that is how the links are on screen at all — so an
     ungated outside-click handler would close it and the whole nav would
     vanish until something opened it again. */
  var narrow = window.matchMedia ? window.matchMedia("(max-width: 40rem)") : null;
  function isNarrow() { return narrow ? narrow.matches : false; }

  document.addEventListener("click", function (ev) {
    if (!isNarrow()) return;
    if (menu.open && !menu.contains(ev.target)) menu.open = false;
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key !== "Escape" || !isNarrow() || !menu.open) return;
    menu.open = false;
    menu.querySelector("summary").focus();   /* not left on a hidden link */
  });

  /* Same-page anchors do not reload, so the menu would stay open over the
     target it just scrolled to. */
  menu.addEventListener("click", function (ev) {
    if (!isNarrow()) return;
    var a = ev.target.closest("a");
    if (a && a.getAttribute("href") && a.getAttribute("href").indexOf("#") === 0) menu.open = false;
  });

  /* Crossing the breakpoint, by rotating or by dragging a window edge: wide
     must end up open, because that is what puts the links in the bar, and
     narrow must end up closed. */
  if (narrow) {
    var sync = function () { menu.open = !narrow.matches; };
    if (narrow.addEventListener) narrow.addEventListener("change", sync);
    else if (narrow.addListener) narrow.addListener(sync);
  }
})();
