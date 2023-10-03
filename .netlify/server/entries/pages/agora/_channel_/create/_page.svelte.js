import { s as subscribe } from "../../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../../chunks/Navbar.js";
import { A as API_URL } from "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/utils.js";
import "browser-image-compression";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const channels = {
    my: "전체",
    every: "전체",
    elementary: "초등",
    middle: "중등",
    child: "유치원",
    special: "특수"
  };
  channels[$page.params.channel];
  let title = "";
  API_URL.subscribe((value) => {
  });
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="w-full lg:w-1/2 mx-auto p-1"><form><label class="label" for="title" data-svelte-h="svelte-hzbv3k"><span id="title" class="label-text">채널 / 제목</span></label> <div class="flex"><div class="form-control"> <select class="select select-bordered" id="channel"><option value="전체" data-svelte-h="svelte-1sbuj5g">전체</option><option value="초등" data-svelte-h="svelte-a75bmb">초등</option><option value="중등" data-svelte-h="svelte-1ovafta">중등</option><option value="유치원" data-svelte-h="svelte-11k88fu">유치원</option><option value="특수" data-svelte-h="svelte-1fibard">특수</option></select></div>  <input type="text" placeholder="제목을 입력해주세요." class="input input-bordered w-full" required${add_attribute("value", title, 0)}></div> <div class="form-control"><label class="label" for="content" data-svelte-h="svelte-1w806jy"><span class="label-text">내용</span></label> <textarea id="content" class="textarea textarea-bordered" placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요." required rows="3">${escape("")}</textarea></div> <div class="form-control"><label class="label" for="image" data-svelte-h="svelte-1a3fzt1"><span class="label-text">이미지 첨부</span></label> <input type="file" class="file-input file-input-bordered file-input-success w-full max-w-xs" accept="image/jpeg, image/png, image/gif"> <label class="label" data-svelte-h="svelte-1b3vow0"><span class="label-text-alt">이미지는 1장만 첨부 가능합니다.</span></label></div> <button class="btn btn-success mt-5 w-full" data-svelte-h="svelte-sxdfw4">저장</button></form></div></main> `;
});
export {
  Page as default
};
