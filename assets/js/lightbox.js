/* Photography lightbox.
 *
 * Progressive enhancement: each frame is already a real link to the full-size
 * image, so with this script absent or broken the gallery still works. The
 * script only intercepts the click.
 *
 * Uses <dialog>.showModal(), which gives the focus trap, the inert background,
 * Escape-to-close and focus restoration for free — all of which are fiddly and
 * easy to get subtly wrong by hand.
 */
(function () {
  "use strict";

  var dialog = document.querySelector(".lightbox");
  var links  = Array.prototype.slice.call(document.querySelectorAll(".gallery__link"));
  if (!dialog || !links.length || typeof dialog.showModal !== "function") return;

  var img     = dialog.querySelector(".lightbox__img");
  var caption = dialog.querySelector(".lightbox__caption");
  var prevBtn = dialog.querySelector(".lightbox__nav--prev");
  var nextBtn = dialog.querySelector(".lightbox__nav--next");
  var closeBtn= dialog.querySelector(".lightbox__close");
  var index   = 0;
  var scrollY = 0;

  function show(i) {
    index = (i + links.length) % links.length;
    dialog.scrollTop = 0;
    var a = links[index];
    img.src = a.getAttribute("href");
    img.alt = a.dataset.alt || "";
    /* Intrinsic size up front so the dialog does not jump as each loads. */
    img.width  = a.dataset.w;
    img.height = a.dataset.h;
    /* innerHTML, not textContent: captions carry <em> around foreign terms.
       The strings are authored in data/photography.yaml and baked in at build
       time — there is no user input anywhere in this path. */
    caption.innerHTML = a.dataset.caption || "";
    caption.hidden = !a.dataset.caption;
  }

  function open(i, trigger) {
    show(i);
    /* Remembered so focus can go back to the frame that was clicked —
       showModal restores to the previously focused element, but only if it is
       still focusable, and the grid is long. */
    dialog._trigger = trigger;
    dialog.showModal();
    /* showModal does not reliably stop the document behind from scrolling, so
       the wheel ends up moving the page instead of the picture. On iOS the CSS
       needs the scroll offset too: freezing the body means position: fixed,
       which would otherwise snap the gallery back to the top. */
    scrollY = window.scrollY;
    document.documentElement.style.setProperty("--scroll-y", scrollY + "px");
    document.documentElement.classList.add("has-lightbox");
  }

  links.forEach(function (a, i) {
    a.addEventListener("click", function (ev) {
      /* Let modified clicks through: opening in a new tab should still work. */
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
      ev.preventDefault();
      open(i, a);
    });
  });

  prevBtn.addEventListener("click", function () { show(index - 1); });
  nextBtn.addEventListener("click", function () { show(index + 1); });
  closeBtn.addEventListener("click", function () { dialog.close(); });

  dialog.addEventListener("keydown", function (ev) {
    if (ev.key !== "ArrowLeft" && ev.key !== "ArrowRight") return;
    ev.preventDefault();
    show(index + (ev.key === "ArrowRight" ? 1 : -1));
  });

  /* Click outside the picture closes. The dialog element fills the viewport,
     so this compares against the figure's box rather than the dialog's. */
  dialog.addEventListener("click", function (ev) {
    var fig = dialog.querySelector(".lightbox__figure");
    if (!fig) return;
    var r = fig.getBoundingClientRect();
    var inside = ev.clientX >= r.left && ev.clientX <= r.right &&
                 ev.clientY >= r.top  && ev.clientY <= r.bottom;
    if (!inside && !ev.target.closest("button")) dialog.close();
  });

  /* Swipe. On a phone the prev/next buttons are 44px targets in the bottom
     corners, which works but is not what a hand expects of a photograph.
     Pointer Events rather than Touch Events: one code path covers touch, pen
     and a mouse drag, and it does not fight the browser's own gestures.
     Vertical drags are left alone so the caption can still be scrolled. */
  var sx = 0, sy = 0, tracking = false;
  var fig = dialog.querySelector(".lightbox__figure");
  if (fig && window.PointerEvent) {
    fig.addEventListener("pointerdown", function (ev) {
      if (ev.pointerType === "mouse" && ev.button !== 0) return;
      tracking = true; sx = ev.clientX; sy = ev.clientY;
    });
    fig.addEventListener("pointerup", function (ev) {
      if (!tracking) return;
      tracking = false;
      var dx = ev.clientX - sx, dy = ev.clientY - sy;
      /* Far enough to be deliberate, and more horizontal than vertical. */
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
      show(index + (dx < 0 ? 1 : -1));
    });
    fig.addEventListener("pointercancel", function () { tracking = false; });
  }

  dialog.addEventListener("close", function () {
    document.documentElement.classList.remove("has-lightbox");
    document.documentElement.style.removeProperty("--scroll-y");
    /* The body was position: fixed, so the document had collapsed to one
       viewport and its scroll range with it. Reading offsetHeight forces the
       layout back before scrolling — without it the browser clamps against the
       stale height and lands short (measured: asked for 900, got 772). */
    void document.body.offsetHeight;
    window.scrollTo(0, scrollY);
    if (dialog._trigger) dialog._trigger.focus();
    img.removeAttribute("src");     /* let the browser release it */
  });
})();
