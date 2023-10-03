import { s as subscribe } from "../../../chunks/utils2.js";
import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import { A as API_URL } from "../../../chunks/store.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let username = "";
  let password = "";
  let password2 = "";
  let mentor = "";
  API_URL.subscribe((value) => {
  });
  const inviteCode = $page.url.searchParams.get("invite");
  mentor = inviteCode;
  $$unsubscribe_page();
  return `<div class="relative flex flex-col justify-center h-screen overflow-hidden m-3"><div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"><h6 class="text-center text-success font-bold mb-3" data-svelte-h="svelte-1an2elw">현직 교사 커뮤니티</h6> <h1 class="text-3xl font-semibold text-center text-purple-700" data-svelte-h="svelte-gae5wh">T-Agora</h1> <div class="text-center" data-svelte-h="svelte-f5e4r9"><a href="/login" class="text-xs text-gray-600 hover:underline hover:text-blue-600">이미 회원이신가요?</a></div> <form class="space-y-4"><div class="form-control w-full"><label class="label" for="username" data-svelte-h="svelte-eqje75"><span class="text-base label-text">아이디</span></label> <input type="text" id="username" name="username" placeholder="아이디(3-15자 이내, 영문소문자/숫자 사용 가능)" class="w-full input input-bordered input-primary"${add_attribute("value", username, 0)}></div> <div class="form-control w-full"><label class="label" for="password" data-svelte-h="svelte-1y6qrty"><span class="text-base label-text">비밀번호</span></label> <input type="password" id="password" name="password" placeholder="비밀번호(8자 이상, 문자/숫자/기호 사용 가능)" class="w-full input input-bordered input-primary"${add_attribute("value", password, 0)}></div> <div class="form-control w-full"><label class="label" for="password2" data-svelte-h="svelte-i44jt1"><span class="text-base label-text">비밀번호 확인</span></label> <input type="password" id="password2" placeholder="비밀번호를 다시 입력해 주세요" class="w-full input input-bordered input-primary"${add_attribute("value", password2, 0)}></div> <div class="form-control"><label class="label" for="channel" data-svelte-h="svelte-shnnjd"><span class="label-text">학교급</span></label> <select class="select select-primary" id="channel"><option value="초등" data-svelte-h="svelte-a75bmb">초등</option><option value="중등" data-svelte-h="svelte-1ovafta">중등</option><option value="유치원" data-svelte-h="svelte-11k88fu">유치원</option><option value="특수" data-svelte-h="svelte-1fibard">특수</option><option value="비공개" data-svelte-h="svelte-1ail045">비공개</option></select></div> <div class="form-control w-full"><label class="label" for="mentor" data-svelte-h="svelte-1ss0ibs"><span class="text-base label-text">추천인</span></label> <input type="password" id="mentor" name="mentor" class="w-full input input-bordered input-primary" readonly${add_attribute("value", mentor, 0)}></div> <div data-svelte-h="svelte-19ma2g9"><button class="btn btn-primary">회원가입</button></div> <div class="text-right" data-svelte-h="svelte-18txx5p"><a href="/notice/signup" class="text-xs text-error hover:underline hover:text-blue-600">초대장이 만료되었나요?</a></div></form></div></div>`;
});
export {
  Page as default
};
