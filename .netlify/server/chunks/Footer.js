import { c as create_ssr_component } from "./ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded mt-60" data-svelte-h="svelte-sjnjn1"><nav class="grid grid-flow-col gap-4"><a class="link link-hover" onclick="my_modal_1.showModal()">Contact</a> <dialog id="my_modal_1" class="modal"><div class="modal-box"><h3 class="font-bold text-lg text-left">Contact</h3> <p class="py-4 text-left">tgoraofficial@gmail.com</p> <div class="modal-action"><form method="dialog"> <button class="btn">Close</button></form></div></div></dialog></nav>  <aside><p>Copyright © 2023 - All right reserved by T-Agora</p></aside></footer>`;
});
export {
  Footer as F
};
