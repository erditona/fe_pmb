import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable2 } from "../temp/table.js";

//jurusan
var MyvarJurusan = {};
export function isiTableJurusan(results2) {
  MyvarJurusan.length = results2.length;
  results2.sort((a, b) => new Date(b.datetime) - new Date(a.datetime)); //mengurutkan berdasasrkan datetime in descending order
  results2.forEach(isiRow2);
  console.log(results2);
}
function isiRow2(value) {
  document.getElementById("jmljurusan").innerHTML = "" + MyvarJurusan.length + " Data";
  let content = isiTable2
    .replace("#KDJURUSAN#", value.kdjurusan)
    .replace("#NAMA#", value.nama)
    .replace("#JENJANG#", value.jenjang)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelJurusan", content);
}
