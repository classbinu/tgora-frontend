import { c as create_ssr_component } from "./ssr.js";
import { s as subscribe } from "./utils2.js";
import { i as isLoggedIn } from "./store.js";
import "./utils.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-60" data-svelte-h="svelte-sjnjn1"><nav class="grid grid-flow-col gap-4"><a class="link link-hover" onclick="my_modal_1.showModal()">Contact</a> <dialog id="my_modal_1" class="modal"><div class="modal-box"><h3 class="font-bold text-lg text-left">Contact</h3> <p class="py-4 text-left">tgoraofficial@gmail.com</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog></nav>  <aside><p>Copyright © 2023 - All right reserved by T-Agora</p></aside></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_isLoggedIn();
  return `<nav class="container mx-auto"><div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-1hc0fyh"><a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a></div> <div class="flex-none"><ul class="menu menu-horizontal px-1"><li><a data-svelte-h="svelte-trpi63">이슈관리</a></li> <li data-svelte-h="svelte-1aj90tk"><a href="/agora">속닥속닥</a></li>  ${$isLoggedIn ? `<li data-svelte-h="svelte-f6iobd"><a href="/mypage">마이페이지</a></li> <li><a data-svelte-h="svelte-1wf0jb8">로그아웃</a></li>` : `<li data-svelte-h="svelte-z0fgil"><a href="/notice">회원가입</a></li> <li data-svelte-h="svelte-1d2gz4d"><a href="/login">로그인</a></li>`}</ul></div></div></nav>`;
});
export {
  Footer as F,
  Navbar as N
};
