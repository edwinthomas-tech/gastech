import { database, ref, onValue } from "./firebase.js";

/* ================= AUTH CHECK ================= */
if (!sessionStorage.getItem("gastech_auth")) {
  window.location.href = "login.html";
}

/* ================= LOGOUT ================= */
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.onclick = () => {
    sessionStorage.clear();
    window.location.href = "login.html";
  };
}

/* ================= CONSTANTS ================= */
const MAX_DAYS = 59.92;
let lastUpdateTime = null;

/* ================= UI ELEMENTS ================= */
const gasEl = document.getElementById("gasPercentage");
const statusEl = document.getElementById("gasStatus");
const daysEl = document.getElementById("daysRemaining");
const connEl = document.getElementById("connectionStatus");
const updatedEl = document.getElementById("lastUpdated");

/* ================= CHART INIT ================= */
const ctx = document.getElementById("usageChart");
let chart = null;

if (ctx) {
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "Gas %",
        data: [],
        borderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      animation: false,
      scales: {
        y: {
          min: 0,
          max: 100
        }
      }
    }
  });
}

/* ================= FIREBASE LISTENER ================= */
const gasRef = ref(database, "lpg/gas_percentage");

onValue(gasRef, (snapshot) => {
  const gas = snapshot.val();

  if (gas === null || isNaN(gas)) {
    console.warn("Firebase value invalid or missing");
    return;
  }

  console.log("Firebase gas value:", gas); // ✅ DEBUG CONFIRMATION

  lastUpdateTime = Date.now();

  /* GAS PERCENTAGE */
  gasEl.textContent = gas.toFixed(1) + "%";
  updatedEl.textContent = "Last updated: just now";

  /* STATUS */
  statusEl.className = "status";
  if (gas > 90) {
    statusEl.textContent = "Excellent";
    statusEl.classList.add("good");
  } else if (gas >= 50) {
    statusEl.textContent = "Normal";
    statusEl.classList.add("normal");
  } else if (gas >= 30) {
    statusEl.textContent = "Low";
    statusEl.classList.add("low");
  } else {
    statusEl.textContent = "Critical";
    statusEl.classList.add("critical");
  }

  /* DAYS REMAINING */
  const days = (gas / 100) * MAX_DAYS;
  daysEl.textContent = days.toFixed(1) + " days";

  /* GRAPH */
  if (chart) addChartPoint(gas);
});

/* ================= CONNECTION STATUS ================= */
setInterval(() => {
  if (!lastUpdateTime) {
    connEl.textContent = "Waiting for data...";
    return;
  }

  const diff = (Date.now() - lastUpdateTime) / 1000;

  if (diff < 10) {
    connEl.textContent = "Connected";
    connEl.className = "status connected";
    updatedEl.textContent = `Last updated: ${Math.floor(diff)}s ago`;
  } else {
    connEl.textContent = "Device Offline";
    connEl.className = "status offline";
  }
}, 1000);

/* ================= GRAPH UPDATE ================= */
function addChartPoint(val) {
  const time = new Date().toLocaleTimeString();

  chart.data.labels.push(time);
  chart.data.datasets[0].data.push(val);

  if (chart.data.labels.length > 20) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }

  chart.update();
}

/* ================= PDF EXPORT ================= */
const downloadBtn = document.getElementById("downloadPdf");
if (downloadBtn) {
  downloadBtn.onclick = () => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.text("GASTECH LPG USAGE REPORT", 20, 20);
    pdf.text(`Downloaded: ${new Date().toLocaleString()}`, 20, 30);
    pdf.text(`Current Gas Level: ${gasEl.textContent}`, 20, 40);

    pdf.setTextColor(150);
    pdf.text("GASTECH", 60, 200, { angle: 45 });

    pdf.save("gastech_report.pdf");
  };
}

/* ================= QUOTE ROTATION (READY) ================= */
function rotateText(el, arr) {
  let i = 0;
  setInterval(() => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = arr[i++ % arr.length];
      el.style.opacity = 1;
    }, 300);
  }, 5000);
}
