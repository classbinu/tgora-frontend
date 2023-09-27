import { s as subscribe } from "../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { a as formatRelativeTime } from "../../../../chunks/utils.js";
import { U as USER_ID, B as BEFORE_FEED_ID, I as IP } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
import { W as WaterMark, F as FeedSecretWarning } from "../../../../chunks/FeedSecretWarning.js";
import { I as InviteBanner } from "../../../../chunks/InviteBanner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  BEFORE_FEED_ID.subscribe((value) => {
  });
  let ipAddress;
  IP.subscribe((value) => {
    ipAddress = value;
  });
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
    badgeColor: "badge-success",
    textColor: ""
  };
  let feeds = [];
  $$unsubscribe_page();
  return `${validate_component(InviteBanner, "InviteBanner").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto">${validate_component(WaterMark, "WaterMark").$$render($$result, {}, {}, {
    userId: () => {
      return `<span slot="userId">${escape(userId)}<br>${escape(ipAddress)}</span>`;
    }
  })} <a href="${"/agora/" + escape($page.params.channel, true) + "/create"}" class="btn btn-circle btn-success btn-lg fixed bottom-10 right-10 text-white shadow-lg text-2xl font-bold z-10"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit</span></a> <div class="p-1 w-full lg:w-1/2 mx-auto text-right"><button class="btn btn btn-outline btn-neutral" data-svelte-h="svelte-1h249h1">전체</button> <button class="btn btn-outline btn-primary" data-svelte-h="svelte-18jr3xg">초등</button> <button class="btn btn-outline btn-secondary" data-svelte-h="svelte-1z37u6">중등</button> <button class="btn btn-outline btn-accent" data-svelte-h="svelte-1srom0p">유치원</button> <button class="btn btn-outline btn-success" data-svelte-h="svelte-8dkn28">특수</button> </div> ${validate_component(FeedSecretWarning, "FeedSecretWarning").$$render($$result, {}, {}, {})} ${each(feeds, (feed) => {
    return `<div class="p-1 w-full lg:w-1/2 mx-auto"${add_attribute("id", feed._id, 0)}><div class="card bg-base-100 border"><a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}"><div class="card-body"><div><span class="${"badge badge-outline " + escape(
      feed.channel === "초등" ? elementary.badgeColor : feed.channel === "중등" ? middle.badgeColor : feed.channel === "유치원" ? child.badgeColor : feed.channel === "특수" ? special.badgeColor : "",
      true
    )}">${escape(feed.channel ? feed.channel : "전체")}</span> <span class="text-sm text-gray-400">${escape(feed.nickname)}</span> <span class="text-xs text-gray-500">${escape(formatRelativeTime(feed.createdAt))}</span></div> <h2 class="text-lg font-bold mt-5">${escape(feed.title)}</h2> <p class="truncate">${escape(feed.content)}</p> </div></a> <div class="join my-3"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(feed["likes"].includes(userId) ? "text-error" : "", true)}">favorite</span><span>${escape(feed.likes.length)} </span></button> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="material-symbols-outlined" data-svelte-h="svelte-uzmdsi">chat_bubble </span><span>${escape(feed.comments.length)}</span></a> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="material-symbols-outlined" data-svelte-h="svelte-ccpozr">visibility </span><span></span></a> </div></div> </div>`;
  })} <div class="my-40"></div></main> `;
});
export {
  Page as default
};
