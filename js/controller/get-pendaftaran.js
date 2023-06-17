import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable } from "../temp/table.js";

//pendaftaran
var MyvarPendaftaran = {};
export function isiTablePendaftaran(results) {
  MyvarPendaftaran.length = results.length;
  results.forEach(isiRow);
  console.log(results);
}
function isiRow(value) {
  document.getElementById("jmlpendaftar").innerHTML = "" + MyvarPendaftaran.length + " Data";
  let content = isiTable
    .replace("#KDPENDAFTAR#", value.kdpendaftar)
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#SEKOLAH#", value.asalsekolah.nama)
    .replace("#NOHPSEKOLAH#", value.asalsekolah.phone_number)
    .replace("#JURUSAN#", value.jurusan.nama)
    .replace("#JENJANG#", value.jurusan.jenjang)
    .replace("#JALUR#", value.jalur)
    .replace("#ALULBI#", value.alulbi)
    .replace("#ALJURUSAN#", value.aljurusan)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
