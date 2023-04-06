import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable, isiTable2, isiTable3, isiTable4 } from "../temp/table.js";

export function isiTablePendaftaran(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
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

export function isiTableJurusan(results) {
  results.forEach(isiRow2);
}
function isiRow2(value) {
  let content = isiTable2
    .replace("#KDJURUSAN#", value.kdjurusan)
    .replace("#NAMA#", value.nama)
    .replace("#JENJANG#", value.jenjang)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelJurusan", content);
}

export function isiTableSekolah(results) {
  results.forEach(isiRow3);
}
function isiRow3(value) {
  let content = isiTable3
    .replace("#KDSEKOLAH#", value.kdsekolah)
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelSekolah", content);
}

export function isiTableCamaba(results) {
  results.forEach(isiRow4);
}
function isiRow4(value) {
  let content = isiTable4
    .replace("#KTP#", value.ktp)
    .replace("#NAMA#", value.nama)
    .replace("#NOHP#", value.phone_number)
    .replace("#ALAMAT#", value.alamat)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("TabelCamaba", content);
}
