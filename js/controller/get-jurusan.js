import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable2 } from "../temp/table.js";

//jurusan
// var MyvarJurusan = {};
// export function isiTableJurusan(results2) {
//   MyvarJurusan.length = results2.length;
//   results2.forEach(isiRow2);
//   console.log(results2);
// }
// function isiRow2(value) {
//   document.getElementById("jmljurusan").innerHTML = "" + MyvarJurusan.length + " Data";
//   let content = isiTable2
//     .replace("#KDJURUSAN#", value.kdjurusan)
//     .replace("#NAMA#", value.nama)
//     .replace("#JENJANG#", value.jenjang)
//     .replace("#WARNA#", getRandomColor())
//     .replace(/#WARNALOGO#/g, getRandomColorName());
//   addInner("TabelJurusan", content);
// }

export function isiTableJurusan(results2) {
  MyvarJurusan.length = results2.length;
  const table = document.getElementById("TabelJurusan");
  results2.forEach((value) => {
    const newRow = table.insertRow(); // Create a new row
    const kdJurusanCell = newRow.insertCell(); // Insert cell for kdjurusan
    const namaCell = newRow.insertCell(); // Insert cell for nama
    const jenjangCell = newRow.insertCell(); // Insert cell for jenjang
    const warnaCell = newRow.insertCell(); // Insert cell for warna
    const warnaLogoCell = newRow.insertCell(); // Insert cell for warna logo

    kdJurusanCell.textContent = value.kdjurusan; // Set the cell content
    namaCell.textContent = value.nama;
    jenjangCell.textContent = value.jenjang;
    warnaCell.style.backgroundColor = getRandomColor(); // Set the background color
    warnaLogoCell.textContent = getRandomColorName(); // Set the color name
  });
  console.log(results2);
  document.getElementById("jmljurusan").innerHTML = "" + MyvarJurusan.length + " Data";
}
