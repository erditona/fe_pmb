import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUTStat, AmbilResponse } from "../config/url-put-pendaftaran.js";

function pushData() {
  // Get the form values
  let kdpendaftaranValue = parseInt(getValue("kdpendaftaran"));
  let ktpValue = parseInt(getValue("ktp"));
  let namaValue = getValue("nama");
  let statuspendaftarValue = document.getElementById("statuspendaftar").value; // Get the selected value from the dropdown

  // Perform form validation
  if (statuspendaftarValue === "") {
    document.getElementById("status").innerHTML = "Data Tidak Boleh Kosong!";
    return;
  }

  let data = {
    kdpendaftar: kdpendaftaranValue,
    statuspendaftar: statuspendaftarValue,
    biodata: {
      ktp: ktpValue,
      nama: namaValue,
    },
  };

  console.log(data);
  putData(urlPUTStat, data, AmbilResponse);
}

onClick("button", pushData);
