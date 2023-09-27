import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/store.js";
import "../../../chunks/utils.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
