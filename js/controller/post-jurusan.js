import { postData } from "https://bukulapak.github.io/api/process.js";
// import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url-post-jurusan";

function pushData() {
  let data = {
    kdjurusan: getValue("kdjurusan"),
    nama: getValue("nama"),
    jenjang: getValue("jenjang"),
  };
  console.log(data);
  postData(urlPOST, data, AmbilResponse);
}

function onClick(id, actionfunctionname) {
  document.getElementById(id).onclick = actionfunctionname;
}

function getValue(id) {
  return document.getElementById(id).value;
}

onClick("button", pushData);
