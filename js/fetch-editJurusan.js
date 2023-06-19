import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-jurusan.js";
import { urlFetch } from "./config/url-get-detail-jurusan.js";
get(urlFetch, isiData);
