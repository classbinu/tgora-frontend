import { s as subscribe } from "../../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../../chunks/Navbar.js";
import "../../../../../chunks/utils.js";
import { U as USER_ID, A as API_URL } from "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let title = "";
  USER_ID.subscribe((value) => {
  });
  API_URL.subscribe((value) => {
  });
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="w-full lg:w-1/2 mx-auto p-1"><form><label class="label" for="title" data-svelte-h="svelte-1gr6rsr"><span id="title" class="label-text">제목</span></label> <input type="text" placeholder="제목을 입력해주세요." class="input input-bordered w-full" required${add_attribute("value", title, 0)}> <div class="form-control"><label class="label" for="content" data-svelte-h="svelte-1w806jy"><span class="label-text">내용</span></label> <textarea id="content" class="textarea textarea-bordered h-96" placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요." required>${escape("")}</textarea></div> <button class="btn btn-success mt-5 w-full" data-svelte-h="svelte-12xgtp8">수정</button> <div class="text-right"><a class="btn btn-ghost text-error mt-5"><span class="material-symbols-outlined" data-svelte-h="svelte-1go2wfh">delete</span></a></div></form></div></main> `;
});
export {
  Page as default
};
