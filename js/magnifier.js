const magnifyTargets = document.querySelectorAll(
  "a, button, .btn-primary, .btn-secondary, .card, .metric-card"
);

magnifyTargets.forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;

    el.style.transform = `scale(1.06) translate(${moveX}px, ${moveY}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
});
