// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTable } from "../temp/table.js";

// // Pendaftaran
// var MyvarPendaftaran = {};

// export function isiTablePendaftaran(results) {
//   results.reverse();
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

// import { addInner } from "https://bukulapak.github.io/element/process.js";
// import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
// import { isiTable } from "../temp/table.js";

// // Pendaftaran
// var MyvarPendaftaran = {};
// export function isiTablePendaftaran(results) {
//   results.reverse();
//   MyvarPendaftaran.length = results.length;
//   results.forEach(isiRow);
//   console.log(results);
// }

// function isiRow(value) {
//   document.getElementById("jmlpendaftar").innerHTML = "" + MyvarPendaftaran.length + " Data";
//   let content = isiTable
//     .replace("#KDPENDAFTAR#", value.kdpendaftar)
//     .replace("#NAMA#", value.biodata.nama)
//     .replace("#NOHP#", value.biodata.phone_number)
//     // .replace("#SEKOLAH#", value.sekolah.nama)
//     // .replace("#NOHPSEKOLAH#", value.sekolah.phone_number)
//     // .replace("#JURUSAN#", value.jurusan.nama)
//     // .replace("#JENJANG#", value.jurusan.jenjang)
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

export async function isiTablePendaftaran(results) {
  results.reverse();
  MyvarPendaftaran.length = results.length;

  // Create an array of promises for the fetch requests
  const fetchPromises = results.map((value) => {
    return Promise.all([
      fetch(`https://ws-dito.herokuapp.com/sekolah/${value.asalsekolah._id}`).then((response) => response.json()),
      fetch(`https://ws-dito.herokuapp.com/jurusan/${value.jurusan._id}`).then((response) => response.json()),
    ]).then(([sekolahData, jurusanData]) => {
      return {
        value,
        sekolahData,
        jurusanData,
      };
    });
  });

  // Wait for all fetch requests to resolve
  const fetchedData = await Promise.all(fetchPromises);

  fetchedData.forEach(({ value, sekolahData, jurusanData }) => {
    isiRow(value, sekolahData, jurusanData);
  });

  console.log(results);
}

function isiRow(value, sekolahData, jurusanData) {
  document.getElementById("jmlpendaftar").innerHTML = "" + MyvarPendaftaran.length + " Data";

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
