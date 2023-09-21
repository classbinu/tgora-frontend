import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { A as API_URL } from "../../../../chunks/store.js";
import "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let oldPassword = "";
  let newPassword = "";
  let newPassword2 = "";
  API_URL.subscribe((value) => {
  });
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="relative flex flex-col justify-center overflow-hidden"><div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg"><h1 class="text-3xl font-semibold text-center text-purple-700" data-svelte-h="svelte-ocuwab">비밀번호 변경</h1> <form class="space-y-4"><div class="form-control w-full"><label class="label" for="oldPassword" data-svelte-h="svelte-fbztkp"><span class="text-base label-text">기존 비밀번호</span></label> <input type="password" id="oldPassword" placeholder="" class="w-full input input-bordered input-primary"${add_attribute("value", oldPassword, 0)}></div> <div class="form-control w-full"><label class="label" for="newPassword" data-svelte-h="svelte-zwq892"><span class="text-base label-text">새로운 비밀번호</span></label> <input type="password" id="newPassword" placeholder="" class="w-full input input-bordered input-primary"${add_attribute("value", newPassword, 0)}></div> <div class="form-control w-full"><label class="label" for="newPassword2" data-svelte-h="svelte-npxgrf"><span class="text-base label-text">새로운 비밀번호 확인</span></label> <input type="password" id="newPassword2" placeholder="" class="w-full input input-bordered input-primary"${add_attribute("value", newPassword2, 0)}></div> <div data-svelte-h="svelte-bplfvh"><button class="btn btn-primary">저장</button></div></form></div></div> `;
});
export {
  Page as default
};
