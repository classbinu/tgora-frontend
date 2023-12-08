import { s as subscribe } from "../../../../chunks/utils2.js";
import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, a as each } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { a as formatRelativeTime } from "../../../../chunks/utils.js";
import { U as USER_ID, B as BEFORE_FEED_ID, I as IP, F as FEEDS } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
import { W as WaterMark, F as FeedSecretWarning, C as CommonBanner } from "../../../../chunks/CommonBanner.js";
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
  let feeds;
  FEEDS.subscribe((value) => {
    feeds = value;
  });
  let feedInfoMessage = "피드는 최신 200개만 노출됩니다 🤗";
  const elementary = {
    badgeColor: "badge-primary",
    textColor: ""
  };
  const middle = {
    badgeColor: "badge-secondary",
    textColor: ""
  };
  const child = { badgeColor: "badge-error", textColor: "" };
  const special = {
    badgeColor: "badge-accent",
    textColor: ""
  };
  let topFeeds = [];
  let q = "";
  $$unsubscribe_page();
  return ` ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto">${validate_component(WaterMark, "WaterMark").$$render($$result, {}, {}, {
    userId: () => {
      return `<span slot="userId">${escape(userId)}<br>${escape(ipAddress)}</span>`;
    }
  })} <a href="${"/agora/" + escape($page.params.channel, true) + "/create"}" class="btn btn-circle btn-success btn-lg fixed bottom-10 right-10 text-white shadow-lg text-2xl font-bold z-10"><span class="material-symbols-outlined" data-svelte-h="svelte-1j4ecmj">edit</span></a> <div class="p-1 w-full lg:w-1/2 mx-auto text-right"><button class="btn btn-sm btn-outline btn-neutral" data-svelte-h="svelte-p1rx2n">전체</button> <button class="btn btn-sm btn-outline btn-primary" data-svelte-h="svelte-1xrvoie">초등</button> <button class="btn btn-sm btn-outline btn-secondary" data-svelte-h="svelte-1v79i0m">중등</button> <button class="btn btn-sm btn-outline btn-error" data-svelte-h="svelte-bmv569">유치원</button> <button class="btn btn-sm btn-outline btn-accent" data-svelte-h="svelte-1ptke1j">특수</button></div> ${validate_component(FeedSecretWarning, "FeedSecretWarning").$$render($$result, {}, {}, {})} <div class="flex p-1 w-full lg:w-1/2 mx-auto"><input type="text" placeholder="피드 검색" class="input input-bordered w-full input-sm"${add_attribute("value", q, 0)}> <button class="btn join-item btn-sm" data-svelte-h="svelte-z6dmc6"><span class="material-symbols-outlined">search</span></button></div> <div class="p-1 w-full lg:w-1/2 mx-auto" data-svelte-h="svelte-oqu8k2"><p class="text-primary font-bold text-sm">🤗 &#39;속닥속닥&#39;은 자유롭게 이야기를 나눌 수 있는 공간이에요</p></div> <div class="p-1 lg:w-1/2 mx-auto">${validate_component(CommonBanner, "CommonBanner").$$render($$result, {}, {}, {})}</div> ${each(topFeeds, (feed) => {
    return `<div class="p-1 w-full lg:w-1/2 mx-auto"${add_attribute("id", feed._id, 0)}><div class="card bg-base-100 border-2 border-success"><a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}"><div class="card-body"><div><span class="badge badge-success text-white" data-svelte-h="svelte-3mx0x4">🔥인기글</span> <span class="${"badge badge-outline " + escape(
      feed.channel === "초등" ? elementary.badgeColor : feed.channel === "중등" ? middle.badgeColor : feed.channel === "유치원" ? child.badgeColor : feed.channel === "특수" ? special.badgeColor : "",
      true
    )}">${escape(feed.channel ? feed.channel : "전체")}</span> <span class="text-xs text-gray-500">${escape(formatRelativeTime(feed.createdAt))}</span> <p class="text-xs text-gray-400 m-1">${escape(feed.grade ? feed.grade : "비공개")} · ${escape(feed.nickname)} </p></div> <div class="flex justify-between"><div class="${"overflow-hidden whitespace-no-wrap " + escape(feed.image ? "w-3/4" : "", true)}"><h2 class="text-lg font-bold line-clamp-2">${escape(feed.title)}</h2> <p class="line-clamp-2">${escape(feed.content)}</p></div> ${feed.image ? `<div class="w-24 h-24"><img${add_attribute("src", feed.image, 0)}${add_attribute("alt", feed.title, 0)} loading="lazy" class="rounded-lg object-cover w-full h-full"> </div>` : ``}</div> </div></a> <div class="join my-3"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(feed["likes"].includes(userId) ? "text-error" : "", true)}">favorite</span><span class="like-count">${escape(feed.likes.length)} </span></button> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="${"material-symbols-outlined " + escape(feed["comments"].includes(userId) ? "text-success" : "", true)}">chat_bubble
						</span><span>${escape(feed.comments.length)}</span></a> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="material-symbols-outlined" data-svelte-h="svelte-ccpozr">visibility </span><span></span></a> </div></div> </div>`;
  })} ${each(feeds, (feed) => {
    return `<div class="p-1 w-full lg:w-1/2 mx-auto"${add_attribute("id", feed._id, 0)}><div class="card bg-base-100 border"><a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true) + "?q=" + escape(q, true)}"><div class="card-body"><div><span class="${"badge badge-outline " + escape(
      feed.channel === "초등" ? elementary.badgeColor : feed.channel === "중등" ? middle.badgeColor : feed.channel === "유치원" ? child.badgeColor : feed.channel === "특수" ? special.badgeColor : "",
      true
    )}">${escape(feed.channel ? feed.channel : "전체")}</span> <span class="text-xs text-gray-500">${escape(formatRelativeTime(feed.createdAt))}</span> <p class="text-xs text-gray-400 m-1">${escape(feed.grade ? feed.grade : "비공개")} · ${escape(feed.nickname)} </p></div> <div class="flex justify-between"><div class="${"overflow-hidden whitespace-no-wrap " + escape(feed.image ? "w-3/4" : "", true)}"><h2 class="text-lg font-bold line-clamp-2">${escape(feed.title)}</h2> <p class="line-clamp-2">${escape(feed.content)}</p></div> ${feed.image ? `<div class="w-24 h-24"><img${add_attribute("src", feed.image, 0)}${add_attribute("alt", feed.title, 0)} loading="lazy" class="rounded-lg object-cover w-full h-full"> </div>` : ``}</div> </div></a> <div class="join my-3"><button class="w-1/3 join-item text-gray-400"><span class="${"material-symbols-outlined " + escape(feed["likes"].includes(userId) ? "text-error" : "", true)}">favorite</span><span class="like-count">${escape(feed.likes.length)} </span></button> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="material-symbols-outlined" data-svelte-h="svelte-uzmdsi">chat_bubble </span><span>${escape(feed.comments.length)}</span></a> <a href="${"/agora/" + escape($page.params.channel, true) + "/" + escape(feed._id, true)}" class="w-1/3 join-item text-gray-400 text-center"><span class="material-symbols-outlined" data-svelte-h="svelte-ccpozr">visibility </span><span></span></a> </div></div> </div>`;
  })} <p class="text-center my-10 text-success">${escape(feedInfoMessage)}</p> <div class="my-40"></div></main> `;
});
export {
  Page as default
};
