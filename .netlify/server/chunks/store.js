import { r as readable, w as writable } from "./index.js";
const API_URL = readable("http://localhost:3000");
const isLoggedIn = writable(false);
export {
  API_URL as A,
  isLoggedIn as i
};
