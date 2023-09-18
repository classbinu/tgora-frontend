import { A as API_URL } from "../../../../chunks/store.js";
let API;
API_URL.subscribe((value) => {
  API = value;
});
const load = async () => {
  const issues = await fetch(`${API}/issues?state=closed&isPublic=public`);
  return { issues: await issues.json() };
};
export {
  load
};
