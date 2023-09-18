import { A as API_URL } from "../../../../chunks/store.js";
const load = async () => {
  let API;
  API_URL.subscribe((value) => {
    API = value;
  });
  const issues = await fetch(`${API}/issues?state=all&isPublic=all`);
  return { issues: await issues.json() };
};
export {
  load
};
