import { r as readable, w as writable } from "./index.js";
const API_URL = readable("https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app");
const isLoggedIn = writable(false);
const USER_ID = writable(void 0);
const IP = writable("000.000.000.000");
const BEFORE_FEED_ID = writable(void 0);
const FEEDS = writable([]);
export {
  API_URL as A,
  BEFORE_FEED_ID as B,
  FEEDS as F,
  IP as I,
  USER_ID as U,
  isLoggedIn as i
};
