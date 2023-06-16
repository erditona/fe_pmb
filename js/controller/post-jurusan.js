import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan.js";

function pushData() {
  let data = {
    kdjurusan: getValue("kdjurusan"),
    nama: getValue("nama"),
    jenjang: getValue("jenjang"),
  };
  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

function validateForm() {
  let nama = document.forms["FtJurusan"]["nama"].value;
  if (nama == "") {
    alert("Name must be filled out");
    return false;
  } else {
    pushData();
  }
}

onClick("button", validateForm);
