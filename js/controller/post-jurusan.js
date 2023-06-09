import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan";

function pushData() {
  var hari_kerja = getValue("hari_kerja");

  let data = {
    kdjurusan: "kdjurusan",
    nama: "nama",
    jenjang: "jenjang",
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
