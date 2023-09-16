import { c as create_ssr_component } from "./ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-60" data-svelte-h="svelte-1rta7rx"><nav class="grid grid-flow-col gap-4"><a class="link link-hover" onclick="my_modal_1.showModal()">Contact</a> <dialog id="my_modal_1" class="modal"><div class="modal-box"><h3 class="font-bold text-lg text-left">Contact</h3> <p class="py-4 text-left">classbinu@gmail.com</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog></nav>  <aside><p>Developed by Classbinu</p> <p>Copyright © 2023 - All right reserved by KOREAN TEACHERS</p></aside></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="container mx-auto"><div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-1hc0fyh"><a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a></div> <div class="flex-none"><ul class="menu menu-horizontal px-1"><li><a data-svelte-h="svelte-1xyo32t">로그인</a></li> <li><a data-svelte-h="svelte-gmizpb">회원가입</a></li> </ul></div></div></nav>`;
});
export {
  Footer as F,
  Navbar as N
};
