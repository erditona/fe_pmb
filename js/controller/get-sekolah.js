import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable3 } from "../temp/table.js";

//Sekolah
var MyvarSekolah = {};
export function isiTableSekolah(results3) {
  results2.reverse();
  MyvarSekolah.length = results3.length;
  results3.forEach(isiRow3);
  console.log(results3);
}
function isiRow3(value) {
  document.getElementById("jmlsekolah").innerHTML = "" + MyvarSekolah.length + " Data";
  let content = isiTable3
    .replace("#KDSEKOLAH#", value.kdsekolah)
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelSekolah", content);
}
