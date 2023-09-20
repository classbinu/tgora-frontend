import { A as API_URL } from "../../../chunks/store.js";
const load = async () => {
  let API;
  API_URL.subscribe((value) => {
    API = value;
  });
  const feeds = await fetch(`${API}/feeds`);
  return { feeds: await feeds.json() };
};
export {
  load
};
