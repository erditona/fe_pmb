import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable } from "../temp/table.js";
export function isiTablePresensi(results) {
  results.forEach(isiRow);
}
function isiRow(value) {
  let content = isiTable
    .replace("#KDPENDAFTAR#", value.kdpendaftar)
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#SEKOLAH#", value.biodata.jabatan)
    .replace("#JURUSAN#", value.location)
    .replace("#JALUR#", value.checkin)
    .replace("#ALULBI#", value.biodata.hari_kerja)
    .replace("#ALJURUSAN#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].durasi : "JAMKERJA#")
    .replace("#CREATEDAT#", value.biodata.jam_kerja ? value.biodata.jam_kerja[0].jam_masuk : "JAMMASUK")
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());
  addInner("iniTabel", content);
}
