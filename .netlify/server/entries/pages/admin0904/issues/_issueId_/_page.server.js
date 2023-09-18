import { A as API_URL } from "../../../../../chunks/store.js";
let API;
API_URL.subscribe((value) => {
  API = value;
});
const load = async ({ params }) => {
  const issue = await fetch(`${API}/issues/${params.issueId}`);
  return { issue: await issue.json() };
};
export {
  load
};
