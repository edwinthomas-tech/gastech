document.getElementById("downloadPdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("GASTECH – Gas Usage Report", 20, 20);

  doc.setFontSize(10);
  doc.text("Generated on: " + new Date().toLocaleString(), 20, 30);

  // Watermark
  doc.setTextColor(200);
  doc.setFontSize(40);
  doc.text("GASTECH", 35, 150, { angle: 45 });

  // Table
  doc.setTextColor(0);
  doc.setFontSize(12);

  let y = 50;
  document.querySelectorAll("#reportTable tr").forEach(row => {
    const cols = row.querySelectorAll("td");
    if (cols.length === 2) {
      doc.text(cols[0].innerText, 20, y);
      doc.text(cols[1].innerText, 120, y);
      y += 8;
    }
  });

  doc.save("gastech-report.pdf");
});
