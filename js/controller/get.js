import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable, isiTable2, isiTable3, isiTable4 } from "../temp/table.js";

//pendaftaran
var MyvarPendaftaran = {};
export function isiTablePendaftaran(results) {
  MyvarPendaftaran.length = results.length;
  results.sort((a, b) => new Date(b.datetimeCreated) - new Date(a.datetimeCreated)); //mengurutkan berdasasrkan datetime in descending order
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

//Sekolah
var MyvarSekolah = {};
export function isiTableSekolah(results3) {
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

//Camaba
var MyvarCamaba = {};
export function isiTableCamaba(results4) {
  MyvarCamaba.length = results4.length;
  results4.forEach(isiRow4);
}
function isiRow4(value) {
  document.getElementById("jmlcamaba").innerHTML = "" + MyvarCamaba.length + " Data";
  let content = isiTable4
    .replace("#KTP#", value.ktp)
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelCamaba", content);
}
