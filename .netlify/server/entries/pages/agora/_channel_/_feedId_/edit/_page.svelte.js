import { s as subscribe } from "../../../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../../../chunks/Navbar.js";
import "../../../../../../chunks/utils.js";
import { U as USER_ID, A as API_URL } from "../../../../../../chunks/store.js";
import { p as page } from "../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let title = "";
  USER_ID.subscribe((value) => {
  });
  API_URL.subscribe((value) => {
  });
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="w-full lg:w-1/2 mx-auto p-1"><form><label class="label" for="title" data-svelte-h="svelte-hzbv3k"><span id="title" class="label-text">채널 / 제목</span></label> <div class="flex"><div class="form-control"> <select class="select select-bordered" id="channel"><option value="전체" data-svelte-h="svelte-1sbuj5g">전체</option><option value="초등" data-svelte-h="svelte-a75bmb">초등</option><option value="중등" data-svelte-h="svelte-1ovafta">중등</option><option value="유치원" data-svelte-h="svelte-11k88fu">유치원</option><option value="특수" data-svelte-h="svelte-1fibard">특수</option></select></div>  <input type="text" placeholder="제목을 입력해주세요." class="input input-bordered w-full" required${add_attribute("value", title, 0)}></div> <div class="form-control"><label class="label" for="content" data-svelte-h="svelte-1w806jy"><span class="label-text">내용</span></label> <textarea id="content" class="textarea textarea-bordered" placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요." required rows="3">${escape("")}</textarea></div> <button class="btn btn-success mt-5 w-full" data-svelte-h="svelte-12xgtp8">수정</button> <div class="text-right"><a class="btn btn-ghost text-error mt-5"><span class="material-symbols-outlined" data-svelte-h="svelte-1go2wfh">delete</span></a></div></form></div></main> `;
});
export {
  Page as default
};
