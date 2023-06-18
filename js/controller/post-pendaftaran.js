// import { postData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
// import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

// function pushData() {
//   // Get the form values
//   let kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
//   let ktpValue = parseInt(getValue("ktp"));
//   let namaValue = getValue("nama");
//   let phoneValue = getValue("phone_number");
//   let alamatValue = getValue("alamat");
//   let asalSekolahValue = getValue("asalsekolah");
//   let jurusanValue = getValue("jurusan");
//   let jalurValue = getValue("jalur");
//   let alasanULBIValue = getValue("alulbi");
//   let alasanJurusanValue = getValue("aljurusan");

//   // Perform form validation
//   if (ktpValue === "" || namaValue === "" || phoneValue === "" || alamatValue === "" || asalSekolahValue === "" || jurusanValue === "" || jalurValue === "" || alasanULBIValue === "" || alasanJurusanValue === "") {
//     document.getElementById("status").textContent = "Data tidak boleh kosong!";
//     return;
//   }

//   // Validate KTP Number
//   if (!/^\d{16}$/.test(ktpValue)) {
//     document.getElementById("status").textContent = "Nomor KTP harus terdiri dari 16 digit angka.";
//     return;
//   }

//   // Get the selected options' text
//   let asalSekolahText = document.getElementById("asalsekolah").options[document.getElementById("asalsekolah").selectedIndex].text;
//   let jurusanText = document.getElementById("jurusan").options[document.getElementById("jurusan").selectedIndex].text;

//   // Clear the status message if all fields are valid
//   document.getElementById("status").textContent = "";

//   let data = {
//     kdpendaftar: kdpendaftaranValue,
//     biodata: {
//       ktp: ktpValue,
//       nama: namaValue,
//       phone_number: phoneValue,
//       alamat: alamatValue,
//     },
//     asalsekolah: {
//       _id: asalSekolahValue,
//       nama: asalSekolahText,
//     },
//     jurusan: {
//       _id: jurusanValue,
//       nama: jurusanText,
//     },
//     jalur: jalurValue,
//     alulbi: alasanULBIValue,
//     aljurusan: alasanJurusanValue,
//   };

//   console.log(data);
//   postData(urlPOST, data, AmbilResponse);
// }

// onClick("button", pushData);

import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-pendaftaran.js";

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

function pushData() {
  // Get the form values
  let kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
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
  // ...

  // Clear the status message if all fields are valid
  document.getElementById("status").textContent = "";

  Promise.all([getSchoolData(asalSekolahValue), getMajorData(jurusanValue)])
    .then(([schoolData, majorData]) => {
      let asalSekolahText = schoolData.nama;
      let phoneSekolahValue = schoolData.phone_number;
      let alamatSekolahValue = schoolData.alamat;

      let jurusanText = majorData.nama;
      let kdjurusanValue = majorData.kdjurusan;
      let jenjangValue = majorData.jenjang;

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
