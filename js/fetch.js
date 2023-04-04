import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePendaftaran } from "./controller/get.js";
import { isiTableJurusan } from "./controller/get.js";
import { urlAPI } from "./config/url.js";
import { urlAPIJurusan } from "./config/url.js";
get(urlAPI, isiTablePendaftaran);
get(urlAPIJurusan, isiTableJurusan);
