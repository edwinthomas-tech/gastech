const gasText = document.querySelector(".gas-percent");

let baseGas = 67;           // realistic starting value
let currentGas = baseGas;  // animated value
let targetGas = baseGas;

const HERO_SCROLL_RANGE = 500; // px (only hero zone)
const MAX_DROP = 4;           // max % change (realistic)

/* Clamp helper */
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/* Smooth animation */
function animateGas() {
  currentGas += (targetGas - currentGas) * 0.08;

  gasText.textContent = `${Math.round(currentGas)}%`;

  requestAnimationFrame(animateGas);
}

/* Scroll logic */
window.addEventListener("scroll", () => {
  const scrollY = clamp(window.scrollY, 0, HERO_SCROLL_RANGE);

  const scrollFactor = scrollY / HERO_SCROLL_RANGE;

  // Only a small realistic variation
  targetGas = baseGas - scrollFactor * MAX_DROP;
});

/* Start animation loop */
animateGas();
