import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex justify-center h-screen" data-svelte-h="svelte-1fji9g1"><div> <a href="/mypage/password" class="btn btn-success m-3">비밀번호 변경</a> <a href="/mypage/profile" class="btn btn-warning m-3">회원정보 변경</a> <a href="/mypage/delete" class="btn btn-error m-3">회원탈퇴</a></div></div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
