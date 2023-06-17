import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable4 } from "../temp/table.js";

//Camaba
var MyvarCamaba = {};
export function isiTableCamaba(results4) {
  results4.reverse();
  MyvarCamaba.length = results4.length;
  results4.forEach(isiRow4);
  console.log(results4);
}
function isiRow4(value) {
  document.getElementById("jmlcamaba").innerHTML = "" + MyvarCamaba.length + " Data";
  let content = isiTable4
    .replace("#KTP#", value.biodata.ktp)
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#ALAMAT#", value.biodata.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelCamaba", content);
}
