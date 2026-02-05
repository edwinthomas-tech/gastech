// ===============================
// SAFETY & GAS SAVING QUOTES
// ===============================

const safetyPrecautions = [
  "Always turn off the regulator when the stove is not in use.",
  "Ensure proper ventilation while cooking with LPG.",
  "Regularly check the rubber hose for cracks or leaks.",
  "Never place the cylinder near heat sources or flames.",
  "If you smell gas, open windows immediately and avoid switches."
];

const gasSavingTips = [
  "Use pressure cookers to reduce cooking gas consumption.",
  "Match vessel size with burner size for efficient heating.",
  "Turn off the flame a little earlier and use residual heat.",
  "Keep burners clean to ensure a steady blue flame.",
  "Plan cooking in batches to reduce repeated ignition."
];

// Utility: random item
function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Inject into DOM
function updateQuotes() {
  const safetyEl = document.getElementById("safetyQuote");
  const savingEl = document.getElementById("savingQuote");

  if (safetyEl) safetyEl.textContent = getRandomItem(safetyPrecautions);
  if (savingEl) savingEl.textContent = getRandomItem(gasSavingTips);
}

// Initial load
updateQuotes();

// Rotate every 15 seconds
setInterval(updateQuotes, 15000);
