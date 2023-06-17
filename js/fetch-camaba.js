import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableCamaba } from "./controller/get-camaba.js";

import { urlAPI } from "./config/url.js";
get(urlAPI, isiTableCamaba);
