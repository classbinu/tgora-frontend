import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex justify-center h-screen mt-20"><div><a href="/mypage/password" class="btn btn-info m-3" data-svelte-h="svelte-bqdddk">비밀번호 변경</a> <a href="/mypage/profile" class="btn btn-success m-3" data-svelte-h="svelte-6m7pi0">회원정보 변경</a> <a href="/mypage/invite" class="btn btn-warning m-3" data-svelte-h="svelte-nu692f">초대하기</a> <button class="btn btn-error m-3" data-svelte-h="svelte-1gh0k5m">회원탈퇴</button></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
