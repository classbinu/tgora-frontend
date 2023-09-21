import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { A as API_URL } from "../../../../chunks/store.js";
import "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  API_URL.subscribe((value) => {
  });
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="w-full lg:w-1/2 mx-auto p-1"><form><label class="label" for="title" data-svelte-h="svelte-1gr6rsr"><span id="title" class="label-text">제목</span></label> <input type="text" placeholder="제목을 입력해주세요." class="input input-bordered w-full" required${add_attribute("value", title, 0)}> <div class="form-control"><label class="label" for="content" data-svelte-h="svelte-1w806jy"><span class="label-text">내용</span></label> <textarea id="content" class="textarea textarea-bordered h-96" placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요." required>${escape("")}</textarea></div> <button class="btn btn-success mt-5 w-full" data-svelte-h="svelte-sxdfw4">저장</button></form></div></main> `;
});
export {
  Page as default
};
