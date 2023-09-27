import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto" data-svelte-h="svelte-ywk0s6"><h1 class="text-3xl font-bold mt-20 mx-3 mb-10">🕹 ADMIN DASHBOARD</h1> <div class="mx-3"><a href="/admin0904/issues" class="btn btn-lg btn-primary">이슈관리</a></div></main> `;
});
export {
  Page as default
};
