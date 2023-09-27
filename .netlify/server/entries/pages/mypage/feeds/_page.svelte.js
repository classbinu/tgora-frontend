import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { a as formatRelativeTime } from "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let feeds = [];
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="overflow-x-auto m-3 w-full lg:w-1/2 mx-auto"><table class="table table-zebra text-center"><thead data-svelte-h="svelte-c0pxbt"><tr> <th>채널</th> <th>제목</th> <th>좋아요</th> <th>댓글</th> <th>작성일</th></tr></thead> <tbody>${each(feeds, (feed) => {
    return `<tr> <td>${escape(feed.channel)}</td> <td><a href="${"/agora/my/" + escape(feed._id, true)}" class="link link-primary">${escape(feed.title)}</a></td> <td>${escape(feed.likes.length.toLocaleString())}</td> <td>${escape(feed.comments.length.toLocaleString())}</td> <td>${escape(formatRelativeTime(feed.createdAt))}</td> </tr>`;
  })}</tbody></table></div> `;
});
export {
  Page as default
};
