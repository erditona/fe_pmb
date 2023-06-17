import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan.js";

function pushData() {
  // Get the form values
  let kadjurusanValue = getValue("kdjurusan");
  let namaValue = getValue("nama");
  let jenjangValue = document.getElementById("jenjang").value; // Get the selected value from the dropdown

  // Perform form validation
  if ((namaValue === "") & (kadjurusanValue === "") & (jenjangValue === "")) {
    document.getElementById("status").innerHTML = "Data Tidak Boleh Kosong!";
    return;
  }
  if (namaValue === "") {
    document.getElementById("status").innerHTML = "Nama Tidak Boleh Kosong!";
    cek = false;
  }
  if (kadjurusanValue === "") {
    document.getElementById("status").innerHTML = "Kode Jurusan Tidak Boleh Kosong!";
    cek = false; // Stop further execution if the form is not valid
  }
  if (jenjangValue === "") {
    document.getElementById("status").innerHTML = "Jenjang Tidak Boleh Kosong!";
    cek = false; // Stop further execution if the form is not valid
  }

  // Additional validation for kdjurusan (4 digits)
  if (!/^[0-9]{4}$/.test(kadjurusanValue.toString())) {
    document.getElementById("status").innerHTML = "Format Kode Jurusan Salah! Harap masukkan tepat 4 angka.";
    return; // Stop further execution if kdsekolah is not valid
  }

  // if (namaValue === "") {
  //   document.getElementById("status").innerHTML = "Nama Tidak Boleh Kosong!";
  //   return;
  // }
  // if (kadjurusanValue === "" || jenjangValue === "") {
  //   document.getElementById("status").innerHTML = "Tolong Lengkapi Semua Kolom!";
  //   return; // Stop further execution if the form is not valid
  // }

  let data = {
    kdjurusan: kadjurusanValue,
    nama: namaValue,
    jenjang: jenjangValue,
  };

  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
