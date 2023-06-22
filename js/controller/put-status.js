import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url-put-pendaftaran.js";

function pushData() {
  // Get the form values
  let statuspendaftarValue = document.getElementById("statuspendaftar").value; // Get the selected value from the dropdown

  // Perform form validation
  if (statuspendaftarValue === "") {
    document.getElementById("status").innerHTML = "Data Tidak Boleh Kosong!";
    return;
  }

  let data = {
    statuspendaftar: statuspendaftarValue,
  };

  console.log(data);
  putData(urlPUT, data, AmbilResponse);
}

onClick("button", pushData);
