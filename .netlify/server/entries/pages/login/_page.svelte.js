import { c as create_ssr_component, b as add_attribute } from "../../../chunks/ssr.js";
import { A as API_URL } from "../../../chunks/store.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  API_URL.subscribe((value) => {
  });
  return `<div class="relative flex flex-col justify-center h-screen overflow-hidden"><div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"><h6 class="text-center text-success font-bold mb-3" data-svelte-h="svelte-5vgjw0">교사 전용 익명 커뮤니티</h6> <h1 class="text-3xl font-semibold text-center text-purple-700" data-svelte-h="svelte-gae5wh">T-Agora</h1> <div class="text-center" data-svelte-h="svelte-1sviowd"><a href="/notice/signup" class="text-xs text-gray-600 hover:underline hover:text-blue-600">회원이 아니신가요?</a></div> <form class="space-y-4"><div class="form-control w-full"><label class="label" for="username" data-svelte-h="svelte-eqje75"><span class="text-base label-text">아이디</span></label> <input type="text" id="username" name="username" placeholder="아이디(3-15자 이내, 영문소문자/숫자)" class="w-full input input-bordered input-primary"${add_attribute("value", username, 0)}></div> <div class="form-control w-full"><label class="label" for="password" data-svelte-h="svelte-1y6qrty"><span class="text-base label-text">비밀번호</span></label> <input type="password" id="password" name="password" placeholder="비밀번호(8자 이상, 문자/숫자/기호)" class="w-full input input-bordered input-primary"${add_attribute("value", password, 0)}></div> <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600" data-svelte-h="svelte-1hfowhe">비밀번호를 잊으셨나요?</a> <div data-svelte-h="svelte-e3kz10"><button class="btn btn-primary">로그인</button></div></form></div></div>`;
});
export {
  Page as default
};
