import { s as subscribe } from "../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, e as escape, a as each } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import "../../../../chunks/utils.js";
import { U as USER_ID, A as API_URL } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  API_URL.subscribe((value) => {
  });
  let feed = {
    createdAt: "",
    nickname: "",
    title: "",
    content: ""
  };
  let comments = [];
  let likesCount = 0;
  let commentsCount = 0;
  let viewsCount = 0;
  let likesArray = [];
  let flagsArray = [];
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="card-body w-full lg:w-1/2 mx-auto">${feed.userId === userId ? `<a href="${"/agora/" + escape(feed._id, true) + "/edit"}" class="text-success text-right"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit</span></a>` : `<button class="${"text-right " + escape(flagsArray.includes(userId) ? "text-error" : "", true)}"><span class="material-symbols-outlined" data-svelte-h="svelte-1js64bj">flag</span></button>`} <div><span class="text-sm">${escape(feed.nickname)}</span> <span class="text-xs text-gray-300">${escape(feed.createdAt)}</span></div> <h2 class="text-lg font-bold my-5">${escape(feed.title)}</h2> <p>${escape(feed.content)}</p> <div class="join mt-20 mb-10"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(likesArray.includes(userId) ? "text-error" : "", true)}">favorite
				</span><span>${escape(likesCount)}</span></button> <button class="w-1/3 join-item text-gray-400"><span class="material-symbols-outlined" data-svelte-h="svelte-uzmdsi">chat_bubble </span><span>${escape(commentsCount)}</span></button> <button class="w-1/3 join-item text-gray-400"><span class="material-symbols-outlined" data-svelte-h="svelte-ccpozr">visibility </span><span>${escape(viewsCount)}</span></button></div> <form><div class="flex"><textarea type="text" placeholder="착한 댓글을 달아 주세요." class="textarea textarea-bordered w-full" rows="1">${escape("")}</textarea> <button class="btn btn-success" data-svelte-h="svelte-uev7il">작성</button></div></form> ${each(comments, (comment) => {
    return `<div class="mt-3"><div><span class="text-sm">${escape(comment.nickname)}</span> <span class="text-xs text-gray-300">${escape(comment.createdAt)}</span></div> <div class="mt-1 flex"><p>${escape(comment.content)}</p> ${comment.userId === userId ? `<a href="${"/agora/" + escape(comment.feedId, true) + "/" + escape(comment._id, true) + "/edit"}" class="text-success text-right"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit </span></a>` : ``}</div> <div class="divider"></div> </div>`;
  })}</div></main> `;
});
export {
  Page as default
};
