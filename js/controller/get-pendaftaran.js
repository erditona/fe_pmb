// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTable } from "../temp/table.js";

// // Pendaftaran
// var MyvarPendaftaran = {};

// export function isiTablePendaftaran(results) {
//   // results.reverse();
//   MyvarPendaftaran.length = results.length;
//   results.forEach(isiRow);
//   console.log(results);
// }

// async function isiRow(value) {
//   document.getElementById("jmlpendaftar").innerHTML = "" + MyvarPendaftaran.length + " Data";

//   // Fetch sekolah berdasarkan ID
//   const sekolahResponse = await fetch(`https://ws-dito.herokuapp.com/sekolah/${value.asalsekolah._id}`);
//   const sekolahData = await sekolahResponse.json();

//   // Fetch jurusan berdasarkan ID
//   const jurusanResponse = await fetch(`https://ws-dito.herokuapp.com/jurusan/${value.jurusan._id}`);
//   const jurusanData = await jurusanResponse.json();

//   let content = isiTable
//     .replace("#KDPENDAFTAR#", value.kdpendaftar)
//     .replace("#NAMA#", value.biodata.nama)
//     .replace("#NOHP#", value.biodata.phone_number)
//     .replace("#SEKOLAH#", sekolahData.nama)
//     .replace("#NOHPSEKOLAH#", sekolahData.phone_number)
//     .replace("#JURUSAN#", jurusanData.nama)
//     .replace("#JENJANG#", jurusanData.jenjang)
//     .replace("#JALUR#", value.jalur)
//     .replace("#ALULBI#", value.alulbi)
//     .replace("#ALJURUSAN#", value.aljurusan)
//     .replace("#IDEDIT#", value._id)
//     .replace("#IDHAPUS#", value._id)
//     .replace("#WARNA#", getRandomColor())
//     .replace(/#WARNALOGO#/g, getRandomColorName());

//   addInner("iniTabel", content);
// }

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
    .replace("#IDEDIT#", value._id)
    .replace("#IDSTATUS#", value._id)
    .replace("#IDHAPUS#", value._id)
    .replace("#WARNA#", getRandomColor())
    .replace(/#WARNALOGO#/g, getRandomColorName());

  // Menentukan warna latar belakang berdasarkan status
  let backgroundColor = "";
  if (value.status === "terdaftar") {
    backgroundColor = "green";
  } else if (value.status === "diterima") {
    backgroundColor = "blue";
  } else if (value.status === "tidak diterima") {
    backgroundColor = "red";
  }

  content = content.replace("#STATUS#", `<p class="text-xs font-semibold text-coolGray-800" style="background-color: ${backgroundColor}">${value.statuspendaftar}</p>`);

  addInner("iniTabel", content);
}
