import { s as subscribe } from "../../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, e as escape, a as each } from "../../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../../chunks/Navbar.js";
import { a as formatRelativeTime } from "../../../../../chunks/utils.js";
import { U as USER_ID, A as API_URL, I as IP } from "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
import { W as WaterMark, F as FeedSecretWarning } from "../../../../../chunks/FeedSecretWarning.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  API_URL.subscribe((value) => {
  });
  let ipAddress;
  IP.subscribe((value) => {
    ipAddress = value;
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
  let likesArray = [];
  let flagsArray = [];
  const elementary = {
    badgeColor: "badge-primary",
    textColor: ""
  };
  const middle = {
    badgeColor: "badge-secondary",
    textColor: ""
  };
  const child = {
    badgeColor: "badge-accent",
    textColor: ""
  };
  const special = {
    badgeColor: "badge-neutral",
    textColor: ""
  };
  $$unsubscribe_page();
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto">${validate_component(WaterMark, "WaterMark").$$render($$result, {}, {}, {
    userId: () => {
      return `<span slot="userId">${escape(userId)}<br>${escape(ipAddress)}</span>`;
    }
  })} ${validate_component(FeedSecretWarning, "FeedSecretWarning").$$render($$result, {}, {}, {})} <div class="card-body w-full lg:w-1/2 mx-auto">${feed.userId === userId ? `<a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true) + "/edit"}" class="text-success text-right"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit</span></a>` : `<button class="${"text-right " + escape(flagsArray.includes(userId) ? "text-error" : "", true)}"><span class="material-symbols-outlined" data-svelte-h="svelte-1js64bj">flag</span></button>`} <div><span class="${"badge badge-outline " + escape(
    feed.channel === "초등" ? elementary.badgeColor : feed.channel === "중등" ? middle.badgeColor : feed.channel === "유치원" ? child.badgeColor : feed.channel === "특수" ? special.badgeColor : "",
    true
  )}">${escape(feed.channel ? feed.channel : "전체")}</span> <span class="text-sm text-gray-400">${escape(feed.nickname)}</span> <span class="text-xs text-gray-500">${escape(formatRelativeTime(feed.createdAt))}</span></div> <h2 class="text-lg font-bold my-5">${escape(feed.title)}</h2> <p class="whitespace-pre-line">${escape(feed.content)}</p> <div class="join mt-20 mb-10"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(likesArray.includes(userId) ? "text-error" : "", true)}">favorite
				</span><span>${escape(likesCount)}</span></button> <button class="w-1/3 join-item text-gray-400"><span class="material-symbols-outlined" data-svelte-h="svelte-uzmdsi">chat_bubble </span><span>${escape(commentsCount)}</span></button> <button class="w-1/3 join-item text-gray-400" data-svelte-h="svelte-1ozmyzs"><span class="material-symbols-outlined">visibility </span><span></span></button></div> <form><div class="flex"><textarea type="text" placeholder="공감과 지지의 댓글을 달아 주세요." class="textarea textarea-bordered w-full" rows="1" required>${escape("")}</textarea> <button class="btn btn-success" data-svelte-h="svelte-uev7il">작성</button></div></form> ${each(comments, (comment) => {
    return `<div class="mt-3"><div><span class="text-sm text-gray-400">${escape(comment.nickname)}</span> <span class="text-xs text-gray-500">${escape(formatRelativeTime(comment.createdAt))}</span></div> <div class="mt-1 flex"><p>${escape(comment.content)}</p> ${comment.userId === userId ? `<a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(comment.feedId, true) + "/" + escape(comment._id, true) + "/edit"}" class="text-success text-right"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit </span></a>` : ``}</div> <div class="divider"></div> </div>`;
  })} <div class="my-60"></div></div></main> `;
});
export {
  Page as default
};
