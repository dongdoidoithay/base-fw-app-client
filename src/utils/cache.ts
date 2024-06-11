import { Constants } from "@/constants/constants";
import { currentByDomain } from "./currentSetting";
import { FetchApi } from "./handleApi";

// cache.js
const NodeCache = require('node-cache');
const cache = new NodeCache();

export async function getCacheConfig (domain:any) {
    var _ct_host = domain;
    let _domain = "default";
    if (_ct_host && !_ct_host.includes("localhost")) {
      _domain = _ct_host.replace("www.", "");
    }
  const cachedConfig = cache.get(_domain);
  if (cachedConfig) {
    return cachedConfig;
  }



  const config  = currentByDomain(_domain);

  console.log("### all api config |->"+_domain);
  // Cache dữ liệu cấu hình
  cache.set(_domain, config);

  return config;
}