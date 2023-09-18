import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/utils.js";
import "../../chunks/store.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
