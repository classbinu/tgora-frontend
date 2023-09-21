import { c as create_ssr_component, v as validate_component, a as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
import { c as convertUTCtoUTC9 } from "../../../chunks/utils.js";
import { U as USER_ID, B as BEFORE_FEED_ID } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  BEFORE_FEED_ID.subscribe((value) => {
  });
  let feeds = [];
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><a href="/agora/create" class="btn btn-circle btn-success btn-lg fixed bottom-10 right-10 text-white shadow-lg text-2xl font-bold z-10" data-svelte-h="svelte-110grnz"><span class="material-symbols-outlined">edit</span></a> ${each(feeds, (feed) => {
    return `<div class="p-1 w-full lg:w-1/2 mx-auto"${add_attribute("id", feed._id, 0)}><div class="card bg-base-100 border"><a href="${"/agora/" + escape(feed._id, true)}"><div class="card-body"><div><span class="text-sm">${escape(feed.nickname)}</span> <span class="text-xs text-gray-300">${escape(convertUTCtoUTC9(feed.createdAt))}</span></div> <h2 class="text-lg font-bold my-5">${escape(feed.title)}</h2> <p>${escape(feed.content)}</p> </div></a> <div class="join my-3"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(feed["likes"].includes(userId) ? "text-error" : "", true)}">favorite</span><span>${escape(feed.likes.length)} </span></button> <button class="w-1/3 join-item text-gray-400"><span class="material-symbols-outlined" data-svelte-h="svelte-uzmdsi">chat_bubble </span><span>${escape(feed.comments.length)}</span></button> <button class="w-1/3 join-item text-gray-400"><span class="material-symbols-outlined" data-svelte-h="svelte-ccpozr">visibility </span><span>${escape(feed.views.length)}</span></button> </div></div> </div>`;
  })}</main> `;
});
export {
  Page as default
};
