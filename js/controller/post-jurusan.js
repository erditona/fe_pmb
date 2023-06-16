import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan.js";

// function pushData() {
//   let data = {
//     kdjurusan: getValue("kdjurusan"),
//     nama: getValue("nama"),
//     jenjang: getValue("jenjang"),
//   };
//   console.log(data);
//   postData(urlPOST, data, AmbilResponse);
// }

// onClick("button", pushData);

function pushData() {
  // Get the form values
  let kdjurusanValue = getValue("kdjurusan");
  let namaValue = getValue("nama");
  let jenjangValue = getValue("jenjang");

  // Perform form validation
  if (kdjurusanValue === "" || namaValue === "" || jenjangValue === "") {
    console.log("Lengkapi Semua Kolom");
    return; // Stop further execution if the form is not valid
  }

  let data = {
    kdjurusan: kdjurusanValue,
    nama: namaValue,
    jenjang: jenjangValue,
  };

  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
