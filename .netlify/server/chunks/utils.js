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
function formatRelativeTime(ISODate) {
  const now = /* @__PURE__ */ new Date();
  const diffMilliseconds = now - new Date(ISODate);
  const diffMinutes = Math.floor(diffMilliseconds / (1e3 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours >= 24) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(ISODate).toLocaleDateString(void 0, options);
  } else if (diffHours >= 1) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes >= 1) {
    return `${diffMinutes}분 전`;
  } else {
    return "방금 전";
  }
}
export {
  formatRelativeTime as a,
  formatDate as f
};
