import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData2 } from "./controller/edit-pendaftaran.js";
import { urlFetch } from "./config/url-get-detail-pendaftaran.js";
get(urlFetch, isiData2);
