import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url-put-sekolah.js";

function pushData() {
  // Get the form values
  let kdsekolahValue = parseInt(getValue("kdsekolah"));
  let namaValue = getValue("nama");
  let phoneNumberValue = getValue("phone_number");
  let alamatValue = getValue("alamat");

  // Perform form validation
  if (isNaN(kdsekolahValue) || kdsekolahValue < 0 || namaValue === "" || phoneNumberValue === "" || alamatValue === "") {
    document.getElementById("status").innerHTML = "Data Tidak Boleh Kosong!";
    return; // Stop further execution if the form is not valid
  }

  // Additional validation for kdsekolah (4 digits)
  if (!/^[0-9]{8}$/.test(kdsekolahValue.toString())) {
    document.getElementById("status").innerHTML = "Format Kode Sekolah Salah! Harap masukkan tepat 8 angka.";
    return; // Stop further execution if kdsekolah is not valid
  }

  // Additional validation for phone number
  if (!/^0\d{9,12}$/.test(phoneNumberValue)) {
    document.getElementById("status").innerHTML = "Format Nomor Telepon Salah! Harap masukkan nomor telepon yang diawali dengan '0' dan terdiri dari 10-13 angka.";
    return; // Stop further execution if phone number is not valid
  }

  // Clear the status message if all fields are valid
  document.getElementById("status").innerHTML = "";

  let data = {
    kdsekolah: kdsekolahValue,
    nama: namaValue,
    phone_number: phoneNumberValue,
    alamat: alamatValue,
  };

  console.log(data);
  putData(urlPUT, data, AmbilResponse);
}

onClick("button", pushData);
