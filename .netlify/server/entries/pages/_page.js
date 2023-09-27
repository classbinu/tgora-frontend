import { A as API_URL } from "../../chunks/store.js";
const load = async () => {
  let API;
  API_URL.subscribe((value) => {
    API = value;
  });
  const issues = await fetch(`${API}/issues?state=open&isPublic=public`);
  const participants = await fetch(`${API}/issues/participants`);
  const data = {
    issues: await issues.json(),
    participants: await participants.json()
  };
  return data;
};
export {
  load
};
