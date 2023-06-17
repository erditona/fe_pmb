import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableJurusan } from "./controller/get-jurusan.js";

import { urlAPIJurusan } from "./config/url.js";
get(urlAPIJurusan, isiTableJurusan);
