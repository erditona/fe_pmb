// import { postData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
// import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

// async function getSchoolData(schoolId) {
//   // Fetch school data based on the ID (replace with your API endpoint)
//   const response = await fetch(`https://ws-dito.herokuapp.com/sekolah/${schoolId}`);
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("Failed to fetch school data.");
//   }
// }

// async function getMajorData(majorId) {
//   // Fetch major data based on the ID (replace with your API endpoint)
//   const response = await fetch(`https://ws-dito.herokuapp.com/jurusan/${majorId}`);
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error("Failed to fetch major data.");
//   }
// }

// function pushData() {
//   // Get the form values
//   let kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
//   let ktpValue = parseInt(getValue("ktp"));
//   let namaValue = getValue("nama");
//   let phoneValue = getValue("phone_number");
//   let alamatValue = getValue("alamat");
//   let asalSekolahValue = getValue("asalsekolah"); // Get user input for asalsekolah
//   let jurusanValue = getValue("jurusan"); // Get user input for jurusan
//   let jalurValue = getValue("jalur");
//   let alasanULBIValue = getValue("alulbi");
//   let alasanJurusanValue = getValue("aljurusan");

//   // Perform form validation
//   if (ktpValue === "" || namaValue === "" || phoneValue === "" || alamatValue === "" || asalSekolahValue === "" || jurusanValue === "" || jalurValue === "" || alasanULBIValue === "" || alasanJurusanValue === "") {
//     // Jika ada field yang kosong, tampilkan pesan error
//     document.getElementById("status").textContent = "Data tidak boleh kosong!";
//     return;
//   }

//   if (!/^\d{16}$/.test(ktpValue)) {
//     // Jika Nomor KTP tidak valid, tampilkan pesan error
//     document.getElementById("status").textContent = "Nomor KTP harus terdiri dari 16 digit angka.";
//     return;
//   }

//   if (!/^0\d{9,12}$/.test(phoneValue)) {
//     // Jika Nomor Telepon tidak valid, tampilkan pesan error
//     document.getElementById("status").textContent = "Nomor Telepon harus berawalan 0 dan terdiri dari 10 hingga 13 digit angka.";
//     return;
//   }

//   // Clear the status message if all fields are valid
//   document.getElementById("status").textContent = "";

//   // Ambil data sekolah dan data jurusan secara bersamaan
//   Promise.all([getSchoolData(asalSekolahValue), getMajorData(jurusanValue)])
//     .then(([schoolData, majorData]) => {
//       // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
//       let asalSekolahText = schoolData.nama;
//       let phoneSekolahValue = schoolData.phone_number;
//       let alamatSekolahValue = schoolData.alamat;

//       let jurusanText = majorData.nama;
//       let kdjurusanValue = majorData.kdjurusan;
//       let jenjangValue = majorData.jenjang;

//       // Bangun objek data
//       let data = {
//         kdpendaftar: kdpendaftaranValue,
//         biodata: {
//           ktp: ktpValue,
//           nama: namaValue,
//           phone_number: phoneValue,
//           alamat: alamatValue,
//         },
//         asalsekolah: {
//           _id: asalSekolahValue,
//           nama: asalSekolahText,
//           phone_number: phoneSekolahValue,
//           alamat: alamatSekolahValue,
//         },
//         jurusan: {
//           _id: jurusanValue,
//           kdjurusan: kdjurusanValue,
//           nama: jurusanText,
//           jenjang: jenjangValue,
//         },
//         jalur: jalurValue,
//         alulbi: alasanULBIValue,
//         aljurusan: alasanJurusanValue,
//       };

//       console.log(data);
//       postData(urlPOST, data, AmbilResponse);
//     })
//     .catch((error) => {
//       console.error(error);
//       document.getElementById("status").textContent = "Failed to fetch data.";
//     });
// }

// onClick("button", pushData);

import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

async function isKodePendaftaranTerdaftar(kodePendaftaran) {
  try {
    const response = await fetch(`https://ws-dito.herokuapp.com/pendaftaran/kd/${kodePendaftaran}`);
    const data = await response.json();
    return response.ok && data.length > 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function generateKodePendaftaran() {
  // Mendapatkan tanggal sekarang
  var currentDate = new Date();
  // Mendapatkan dua digit tahun terakhir
  var year = currentDate.getFullYear().toString().substr(-2);
  // Mendapatkan dua digit bulan
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  // Mendapatkan dua digit tanggal
  var day = currentDate.getDate().toString().padStart(2, "0");

  // Mengambil angka acak berurutan dari localStorage
  var randomNum = localStorage.getItem("randomNum");
  // Jika angka acak belum ada atau lebih kecil dari tanggal sekarang, inisialisasi dengan tanggal sekarang
  if (!randomNum || parseInt(randomNum.substr(0, 6)) < parseInt(day + month + year)) {
    randomNum = day + month + year + "01";
  }

  // Menggabungkan semua bagian untuk membentuk kode pendaftaran
  var kodePendaftaran = randomNum;

  // Memeriksa apakah kode pendaftaran sudah terdaftar di API
  const isTerdaftar = await isKodePendaftaranTerdaftar(kodePendaftaran);
  if (isTerdaftar) {
    // Jika kode pendaftaran sudah terdaftar, menghasilkan kode baru dengan increment angka acak
    var increment = parseInt(randomNum.substr(-2)) + 1;
    randomNum = randomNum.substr(0, randomNum.length - 2) + increment.toString().padStart(2, "0");
    kodePendaftaran = randomNum;
  }

  return kodePendaftaran;
}

async function getSchoolData(schoolId) {
  // Fetch school data based on the ID (replace with your API endpoint)
  const response = await fetch(`https://ws-dito.herokuapp.com/sekolah/${schoolId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch school data.");
  }
}

async function getMajorData(majorId) {
  // Fetch major data based on the ID (replace with your API endpoint)
  const response = await fetch(`https://ws-dito.herokuapp.com/jurusan/${majorId}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch major data.");
  }
}

async function pushData() {
  // Get the form values
  let kdpendaftaranValue = await generateKodePendaftaran();
  let ktpValue = parseInt(getValue("ktp"));
  let namaValue = getValue("nama");
  let phoneValue = getValue("phone_number");
  let alamatValue = getValue("alamat");
  let asalSekolahValue = getValue("asalsekolah"); // Get user input for asalsekolah
  let jurusanValue = getValue("jurusan"); // Get user input for jurusan
  let jalurValue = getValue("jalur");
  let alasanULBIValue = getValue("alulbi");
  let alasanJurusanValue = getValue("aljurusan");

  // Perform form validation
  if (ktpValue === "" || namaValue === "" || phoneValue === "" || alamatValue === "" || asalSekolahValue === "" || jurusanValue === "" || jalurValue === "" || alasanULBIValue === "" || alasanJurusanValue === "") {
    // Jika ada field yang kosong, tampilkan pesan error
    document.getElementById("status").textContent = "Data tidak boleh kosong!";
    return;
  }

  if (!/^\d{16}$/.test(ktpValue)) {
    // Jika Nomor KTP tidak valid, tampilkan pesan error
    document.getElementById("status").textContent = "Nomor KTP harus terdiri dari 16 digit angka.";
    return;
  }

  if (!/^0\d{9,12}$/.test(phoneValue)) {
    // Jika Nomor Telepon tidak valid, tampilkan pesan error
    document.getElementById("status").textContent = "Nomor Telepon harus berawalan 0 dan terdiri dari 10 hingga 13 digit angka.";
    return;
  }

  // Clear the status message if all fields are valid
  document.getElementById("status").textContent = "";

  // Ambil data sekolah dan data jurusan secara bersamaan
  Promise.all([getSchoolData(asalSekolahValue), getMajorData(jurusanValue)])
    .then(([schoolData, majorData]) => {
      // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
      let asalSekolahText = schoolData.nama;
      let phoneSekolahValue = schoolData.phone_number;
      let alamatSekolahValue = schoolData.alamat;

      let jurusanText = majorData.nama;
      let kdjurusanValue = majorData.kdjurusan;
      let jenjangValue = majorData.jenjang;

      // Bangun objek data
      let data = {
        kdpendaftar: kdpendaftaranValue,
        biodata: {
          ktp: ktpValue,
          nama: namaValue,
          phone_number: phoneValue,
          alamat: alamatValue,
        },
        asalsekolah: {
          _id: asalSekolahValue,
          nama: asalSekolahText,
          phone_number: phoneSekolahValue,
          alamat: alamatSekolahValue,
        },
        jurusan: {
          _id: jurusanValue,
          kdjurusan: kdjurusanValue,
          nama: jurusanText,
          jenjang: jenjangValue,
        },
        jalur: jalurValue,
        alulbi: alasanULBIValue,
        aljurusan: alasanJurusanValue,
      };

      console.log(data);
      postData(urlPOST, data, AmbilResponse);
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("status").textContent = "Failed to fetch data.";
    });
}

onClick("button", pushData);
