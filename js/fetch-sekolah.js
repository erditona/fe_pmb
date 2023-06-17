import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableSekolah } from "./controller/get-sekolah.js";

import { urlAPISekolah } from "./config/url.js";
get(urlAPISekolah, isiTableSekolah);
