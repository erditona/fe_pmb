import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan";

function pushData() {
  let data = {
    kdjurusan: getValue("kdjurusan"),
    nama: getValue("nama"),
    jenjang: getValue("jenjang"),
  };
  postData(urlPOST, data, AmbilResponse);
}

onClick("button", pushData);
