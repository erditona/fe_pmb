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

// function pushData() {
//   if (kdjurusan || nama || jenjang) {
//     let data = {
//       kdjurusan: getValue("kdjurusan"),
//       nama: getValue("nama"),
//       jenjang: getValue("jenjang"),
//     };
//     console.log(data);
//     postData(urlPOST, data, AmbilResponse);
//   } else {
//     document.getElementById("status").innerHTML = "Lengkasi Semua Kolom!";
//   }
// }
// onClick("button", pushData);

function pushData() {
  // Get the form values
  let kadjurusanValue = getValue("kdjurusan");
  let namaValue = getValue("nama");
  let jenjangValue = getValue("jenjang");

  // Perform form validation
  if (kadjurusanValue === "" || namaValue === "" || jenjangValue === "") {
    console.log("Please fill in all fields");
    return; // Stop further execution if the form is not valid
  }

  let data = {
    kdjurusan: kadjurusanValue,
    nama: namaValue,
    jenjang: jenjangValue,
  };

  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
