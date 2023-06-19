import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-sekolah.js";
import { urlFetch } from "./config/url-get-detail-sekolah.js";
get(urlFetch, isiData);
