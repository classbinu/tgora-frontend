import { s as subscribe } from "./utils2.js";
import { c as create_ssr_component } from "./ssr.js";
import { i as isLoggedIn } from "./store.js";
import "./utils.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  let showHomeBanner;
  isLoggedIn.subscribe((value) => {
    showHomeBanner = value;
  });
  $$unsubscribe_isLoggedIn();
  return `${showHomeBanner ? `<a href="/mypage/invite" data-svelte-h="svelte-6d4pbn"><div class="alert bg-yellow-300 flex justify-center font-bold"><span>📮 초대장이 지급되었어요!</span></div></a>` : ``} <nav class="container mx-auto"><div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-1hc0fyh"><a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a></div> <div class="flex-none"><ul class="menu menu-horizontal px-1">  ${$isLoggedIn ? `<li data-svelte-h="svelte-1aj90tk"><a href="/agora">속닥속닥</a></li> <li data-svelte-h="svelte-f6iobd"><a href="/mypage">마이페이지</a></li> <li><a data-svelte-h="svelte-1wf0jb8">로그아웃</a></li>` : `<li data-svelte-h="svelte-9tvltn"><a href="/login">속닥속닥</a></li> <li data-svelte-h="svelte-e05jgu"><a href="/notice/signup">회원가입</a></li> <li data-svelte-h="svelte-1d2gz4d"><a href="/login">로그인</a></li>`}</ul></div></div></nav>`;
});
export {
  Navbar as N
};
