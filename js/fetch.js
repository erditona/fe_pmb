import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePendaftaran, isiTableJurusan, isiTableSekolah } from "./controller/get.js";
import { urlAPI, urlAPIJurusan, urlAPISekolah } from "./config/url.js";

get(urlAPI, isiTablePendaftaran);
get(urlAPIJurusan, isiTableJurusan);
get(urlAPISekolah, isiTableSekolah);
