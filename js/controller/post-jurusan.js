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

onClick("button", pushData);
