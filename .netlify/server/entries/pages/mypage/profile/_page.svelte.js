import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import "../../../../chunks/utils.js";
import { A as API_URL } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let nickname = "";
  let email = "";
  let phone = "";
  API_URL.subscribe((value) => {
  });
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative flex flex-col justify-center overflow-hidden mt-10"><div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"><h1 class="text-3xl font-semibold text-center text-purple-700" data-svelte-h="svelte-bs7p30">회원정보 변경</h1> <form class="space-y-4"><div class="form-control w-full"><label class="label" for="username" data-svelte-h="svelte-eqje75"><span class="text-base label-text">아이디</span></label> <p class="ml-1 mb-3">${escape(username)}</p> <label class="label" for="nickname" data-svelte-h="svelte-1ca1mt2"><span class="text-base label-text">닉네임</span></label> <div class="flex"><input type="text" id="nickname" class="w-full input input-bordered input-primary" required maxlength="24"${add_attribute("value", nickname, 0)}> <a class="btn btn-success" data-svelte-h="svelte-ubq3ww">랜덤 닉네임 생성🚀</a></div> <p class="text-xs text-gray-600 mt-1" data-svelte-h="svelte-14q2b2x">익명화를 위해 랜덤 닉네임 사용을 권장합니다.</p> <p class="text-xs text-gray-600 mt-1" data-svelte-h="svelte-zxiyp3">변경 전 닉네임은 공개되지 않지만 누적해서 관리됩니다.</p></div> <div class="form-control w-full hidden"><label class="label" for="email" data-svelte-h="svelte-60mb3x"><span class="text-base label-text">이메일</span></label> <input type="email" id="email" placeholder="" maxlength="100" class="w-full input input-bordered input-primary" readonly${add_attribute("value", email, 0)}></div> <div class="form-control w-full hidden"><label class="label" for="phone" data-svelte-h="svelte-x5smye"><span class="text-base label-text">연락처</span></label> <input type="phone" id="phone" placeholder="" maxlength="100" class="w-full input input-bordered input-primary"${add_attribute("value", phone, 0)}></div> <div data-svelte-h="svelte-bplfvh"><button class="btn btn-primary">저장</button></div></form></div></div> `;
});
export {
  Page as default
};
