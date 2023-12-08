import { r as readable, w as writable } from "./index.js";
const API_URL = readable("https://tgora.fly.dev");
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
