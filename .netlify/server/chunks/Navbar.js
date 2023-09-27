import { s as subscribe } from "./utils2.js";
import { c as create_ssr_component } from "./ssr.js";
import { i as isLoggedIn } from "./store.js";
import "./utils.js";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isLoggedIn();
  return `<nav class="container mx-auto"><div class="navbar bg-base-100"><div class="dropdown block md:hidden"><label tabindex="0" class="btn btn-ghost btn-circle" data-svelte-h="svelte-sgxtk2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg></label> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">${$isLoggedIn ? `<li data-svelte-h="svelte-19eed2o"><a class="py-5" href="/agora/every">속닥속닥</a></li> <li data-svelte-h="svelte-1jp7ulv"><a class="py-5" href="/mypage">마이페이지</a></li> <li><a class="py-5" data-svelte-h="svelte-1681gy">로그아웃</a></li>` : `<li data-svelte-h="svelte-1xsbrb9"><a class="py-5" href="/login">속닥속닥</a></li> <li data-svelte-h="svelte-38d88i"><a class="py-5" href="/notice/signup">회원가입</a></li> <li data-svelte-h="svelte-k00q3z"><a class="py-5" href="/login">로그인</a></li>`}</ul></div> <div class="flex-1" data-svelte-h="svelte-1hc0fyh"><a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a></div> <div class="flex-none"><ul class="menu menu-horizontal px-1">${$isLoggedIn ? `<li class="" data-svelte-h="svelte-z6jmcl"><a href="/agora/every">속닥속닥</a></li> <li class="hidden md:block" data-svelte-h="svelte-1yuth4c"><a href="/mypage">마이페이지</a></li> <li class="hidden md:block"><a data-svelte-h="svelte-1wf0jb8">로그아웃</a></li>` : `<li class="hidden md:block" data-svelte-h="svelte-s830oy"><a href="/login">속닥속닥</a></li>`} ${$isLoggedIn === false ? `<li data-svelte-h="svelte-e05jgu"><a href="/notice/signup">회원가입</a></li> <li data-svelte-h="svelte-1d2gz4d"><a href="/login">로그인</a></li>` : ``}</ul></div></div></nav>`;
});
export {
  Navbar as N
};
