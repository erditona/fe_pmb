import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePendaftaran } from "./controller/get-pendaftaran.js";
import { isiTableJurusan } from "./controller/get-jurusan.js";
import { isiTableSekolah } from "./controller/get-sekolah.js";
import { isiTableCamaba } from "./controller/get-camaba.js";
import { urlAPI, urlAPIJurusan, urlAPISekolah, urlAPICamaba } from "./config/url.js";

get(urlAPI, isiTablePendaftaran);
get(urlAPIJurusan, isiTableJurusan);
get(urlAPISekolah, isiTableSekolah);
get(urlAPICamaba, isiTableCamaba);
