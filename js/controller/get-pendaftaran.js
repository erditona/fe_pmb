import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTable } from "../temp/table.js";

// Pendaftaran
var MyvarPendaftaran = {};

export function isiTablePendaftaran(results) {
  results.reverse();
  MyvarPendaftaran.length = results.length;
  results.forEach(isiRow);
  console.log(results);
}

async function isiRow(value) {
  document.getElementById("jmlpendaftar").innerHTML = "" + MyvarPendaftaran.length + " Data";

  // Fetch sekolah berdasarkan ID
  const sekolahResponse = await fetch(`https://ws-dito.herokuapp.com/sekolah/${value.asalsekolah._id}`);
  const sekolahData = await sekolahResponse.json();

  // Fetch jurusan berdasarkan ID
  const jurusanResponse = await fetch(`https://ws-dito.herokuapp.com/jurusan/${value.jurusan._id}`);
  const jurusanData = await jurusanResponse.json();

  let content = isiTable
    .replace("#KDPENDAFTAR#", value.kdpendaftar)
    .replace("#NAMA#", value.biodata.nama)
    .replace("#NOHP#", value.biodata.phone_number)
    .replace("#SEKOLAH#", sekolahData.nama)
    .replace("#NOHPSEKOLAH#", sekolahData.phone_number)
    .replace("#JURUSAN#", jurusanData.nama)
    .replace("#JENJANG#", jurusanData.jenjang)
    .replace("#JALUR#", value.jalur)
    .replace("#ALULBI#", value.alulbi)
    .replace("#ALJURUSAN#", value.aljurusan)
    .replace("#IDEDIT#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());

  addInner("iniTabel", content);
}
