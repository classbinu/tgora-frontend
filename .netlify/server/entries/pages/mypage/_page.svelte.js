import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="mt-20 w-full lg:w-1/2 mx-auto"><div class="px-1"><a href="/mypage/feeds" class="btn btn-success my-1 w-full" data-svelte-h="svelte-1awp5dm">내가 쓴 피드</a> <a href="/mypage/comments" class="btn btn-warning my-1 w-full" data-svelte-h="svelte-jjpxqd">내가 쓴 댓글</a> <div class="divider"></div> <a href="/mypage/invite" class="btn btn-primary btn-outline my-1 w-full" data-svelte-h="svelte-iylsfe">초대하기</a> <a href="/mypage/profile" class="btn btn-primary btn-outline my-1 w-full" data-svelte-h="svelte-12nqaf8">회원정보 변경</a> <a href="/mypage/password" class="btn btn-primary btn-outline my-1 w-full" data-svelte-h="svelte-khv8h7">비밀번호 변경</a> <div class="divider"></div> <button class="btn btn-outline btn-error my-1 w-full" data-svelte-h="svelte-61ctfp">회원탈퇴</button></div></div> `;
});
export {
  Page as default
};
