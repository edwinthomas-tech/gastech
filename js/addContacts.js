// js/addContacts.js (ES MODULE)

import { database, ref, set } from "./firebase.js";

console.log("addContacts.js loaded (module)");

let count = 0;
const MAX = 4;

const rowsDiv = document.getElementById("rows");
const addBtn = document.getElementById("addBtn");
const saveBtn = document.getElementById("saveBtn");

function addRow() {
  if (count >= MAX) return;
  count++;

  const row = document.createElement("div");
  row.className = "alert-row";
  row.innerHTML = `
    <input id="name${count}" placeholder="Name">
    <input id="phone${count}" placeholder="Phone (10 digits)">
  `;
  rowsDiv.appendChild(row);
}

/* minimum one row */
addRow();

/* button listeners */
addBtn.addEventListener("click", addRow);

saveBtn.addEventListener("click", () => {
  let users = {};
  let valid = 0;

  for (let i = 1; i <= count; i++) {
    const name = document.getElementById(`name${i}`)?.value.trim();
    const phone = document.getElementById(`phone${i}`)?.value.trim();

    if (name && /^\d{10}$/.test(phone)) {
      users[`user${i}`] = { name, phone };
      valid++;
    }
  }

  if (valid === 0) {
    alert("Enter at least one valid contact");
    return;
  }

  console.log("Saving to Firebase:", users);

  set(ref(database, "lpg/alert_users"), users)
    .then(() => {
  const overlay = document.getElementById("successOverlay");
  overlay.classList.remove("hidden");

  // smooth redirect after animation
  setTimeout(() => {
    window.location.href = "./app.html";
  }, 1600);
});
});