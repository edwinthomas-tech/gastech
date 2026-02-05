import { database, ref, onValue } from "./firebase.js";

const readings = [];
const MAX_STORE = 50;

const ctx = document.getElementById("gasChart").getContext("2d");
const tableBody = document.getElementById("reportTable");
const limitSelect = document.getElementById("limitSelect");

let chart;

function render(limit) {
  const data = readings.slice(-limit);

  // TABLE
  tableBody.innerHTML = "";
  data.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${r.time}</td><td>${r.value}</td>`;
    tableBody.appendChild(tr);
  });

  // CHART
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map(r => r.time),
      datasets: [{
        label: "Gas Percentage",
        data: data.map(r => r.value),
        borderWidth: 2,
        tension: 0.3
      }]
    }
  });
}

// Firebase listener
const gasRef = ref(database, "lpg/gas_percentage");
onValue(gasRef, snapshot => {
  const val = snapshot.val();
  if (val === null) return;

  readings.push({
    value: val,
    time: new Date().toLocaleTimeString()
  });

  if (readings.length > MAX_STORE) readings.shift();

  render(Number(limitSelect.value));
});

limitSelect.addEventListener("change", () => {
  render(Number(limitSelect.value));
});
