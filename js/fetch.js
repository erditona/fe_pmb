import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePendaftaran, isiTableJurusan } from "./controller/get.js";
import { urlAPI, urlAPIJurusan } from "./config/url.js";

get(urlAPI, isiTablePendaftaran);
get(urlAPIJurusan, isiTableJurusan);
