import { A as API_URL } from "./store.js";
API_URL.subscribe((value) => {
});
function formatDate(isoDate) {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function convertUTCtoUTC9(utcDateString) {
  const date = new Date(utcDateString);
  date.setHours(date.getHours() + 9);
  return date.toISOString();
}
export {
  convertUTCtoUTC9 as c,
  formatDate as f
};
