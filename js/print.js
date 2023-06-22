import jsPDF from "../node_modules/jspdf";

function generatePDF() {
  const doc = new jsPDF();
  const table = document.getElementById("TabelJurusan");

  doc.autoTable({ html: table });

  doc.save("data.pdf");
}
