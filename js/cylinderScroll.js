const gasLiquid = document.querySelector(".gas-liquid");
const gasReadout = document.querySelector(".gas-readout");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = 700;

  let level = 72 - (scrollY / maxScroll) * 35;
  level = Math.max(20, level);

  gasLiquid.style.height = level + "%";
  gasReadout.textContent = Math.round(level) + "%";
});
