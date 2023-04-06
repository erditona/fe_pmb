import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePendaftaran, isiTableJurusan, isiTableSekolah, isiTableCamaba } from "./controller/get.js";
import { urlAPI, urlAPIJurusan, urlAPISekolah, urlAPICamaba } from "./config/url.js";

get(urlAPI, isiTablePendaftaran);
get(urlAPIJurusan, isiTableJurusan);
get(urlAPISekolah, isiTableSekolah);
get(urlAPICamaba, isiTableCamaba);
