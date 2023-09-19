import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../../chunks/Navbar.js";
import "../../../../chunks/utils.js";
import { A as API_URL } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nickname = "";
  let email = "";
  let phone = "";
  API_URL.subscribe((value) => {
  });
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative flex flex-col justify-center h-screen overflow-hidden"><div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"><h1 class="text-3xl font-semibold text-center text-purple-700" data-svelte-h="svelte-bs7p30">회원정보 변경</h1> <form class="space-y-4"><div class="form-control w-full"><label class="label" for="nickname" data-svelte-h="svelte-1ca1mt2"><span class="text-base label-text">닉네임</span></label> <input type="text" id="nickname" placeholder="3-15자 이내" class="w-full input input-bordered input-primary" required minlength="3" maxlength="15"${add_attribute("value", nickname, 0)}></div> <div class="form-control w-full"><label class="label" for="email" data-svelte-h="svelte-60mb3x"><span class="text-base label-text">이메일</span></label> <input type="email" id="email" placeholder="" maxlength="100" class="w-full input input-bordered input-primary"${add_attribute("value", email, 0)}></div> <div class="form-control w-full"><label class="label" for="phone" data-svelte-h="svelte-x5smye"><span class="text-base label-text">연락처</span></label> <input type="phone" id="phone" placeholder="" maxlength="100" class="w-full input input-bordered input-primary"${add_attribute("value", phone, 0)}></div> <div data-svelte-h="svelte-bplfvh"><button class="btn btn-primary">저장</button></div></form></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
