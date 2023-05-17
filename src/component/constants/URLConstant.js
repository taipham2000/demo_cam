const HOST = window.location;
// let BASE_URL = "https://staging.mvc.com.vn/";
// let CUSTOM_URL_SEND_WITH_API = "https://test.mvc.com.vn/";
let BASE_URL =
  "http://ec2-13-250-133-136.ap-southeast-1.compute.amazonaws.com/api/ocr/scan?sm=auto&p=0";
let CUSTOM_URL_SEND_WITH_API = "https://yomostsummer.cogaihalan.com.vn/";

let BASE_URL_NODEJS = "https://pg.mvc.com.vn";
if (!HOST.hostname.includes("localhost")) {
  CUSTOM_URL_SEND_WITH_API = HOST.protocol + "//" + HOST.hostname + "/";
  BASE_URL_NODEJS = HOST.protocol + "//" + HOST.hostname;
}
// export info
export const TITLE = "GIỜ YO! VUI HÈ NGẬP QUÀ";
// export URL
export const URL_API_BE_ODOO = BASE_URL;
export const URL_API_UPLOAD_GCS = BASE_URL_NODEJS + "/apinode/upload";
export const URL_API_DETECT_OCR =
  "http://ec2-13-250-47-10.ap-southeast-1.compute.amazonaws.com/api/ocr/scan?sm=cm";
export const URL_SEND_WITH_API = CUSTOM_URL_SEND_WITH_API;

// export BE ODOO
export const URL_API_BE_GETCAMPAIGN = BASE_URL + "ocr/campaign_info";
