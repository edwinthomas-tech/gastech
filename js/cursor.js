const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

/* SAFETY CHECK */
if (!cursorDot || !cursorRing) {
  console.warn("Custom cursor elements not found");
} else {

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let scrollTimeout;

  /* Track mouse */
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

    cursorDot.classList.remove("cursor-hidden");
    cursorRing.classList.remove("cursor-hidden");
  });

  /* Smooth follow for ring */
  function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animate);
  }
  animate();

  /* Hover detection */
  const hoverTargets = "a, button, .btn-primary, .btn-secondary, .card";

  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });

  /* Hide cursor while scrolling */
  window.addEventListener("scroll", () => {
    cursorDot.classList.add("cursor-hidden");
    cursorRing.classList.add("cursor-hidden");

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      cursorDot.classList.remove("cursor-hidden");
      cursorRing.classList.remove("cursor-hidden");
    }, 150);
  });
}