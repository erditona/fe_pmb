import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-sekolah.js";

function pushData() {
  // Get the form values
  let kdsekolahValue = getValue("kdsekolah");
  let namaValue = getValue("nama");
  let phoneNumberValue = getValue("phone_number");
  let alamatValue = getValue("alamat");

  // Perform form validation
  if (kdsekolahValue === "" || namaValue === "" || phoneNumberValue === "" || alamatValue === "") {
    document.getElementById("status").innerHTML = "Tolong Lengkapi Semua Kolom!";
    return; // Stop further execution if the form is not valid
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
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
