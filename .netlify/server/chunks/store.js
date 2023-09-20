import { r as readable, w as writable } from "./index.js";
const API_URL = readable("http://localhost:3000");
const isLoggedIn = writable(false);
const USER_ID = writable(void 0);
export {
  API_URL as A,
  USER_ID as U,
  isLoggedIn as i
};
