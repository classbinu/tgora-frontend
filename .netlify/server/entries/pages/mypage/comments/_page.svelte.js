import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { a as formatRelativeTime } from "../../../../chunks/utils.js";
const maxLength = 20;
function limitContentLength(text, maxLength2) {
  if (text.length > maxLength2) {
    return text.slice(0, maxLength2) + "...";
  }
  return text;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let comments = [];
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="overflow-x-auto m-3 w-full lg:w-1/2 mx-auto"><table class="table table-zebra text-center"><thead data-svelte-h="svelte-1t3zfi3"><tr><th>채널</th> <th>내용</th> <th>작성일</th></tr></thead> <tbody>${each(comments, (comment) => {
    return `<tr><td>${escape(comment.feedId.channel)}</td> <td><a href="${"/agora/my/" + escape(comment.feedId._id, true)}" class="link link-primary">${escape(limitContentLength(comment.content, maxLength))}</a></td> <td>${escape(formatRelativeTime(comment.createdAt))}</td> </tr>`;
  })}</tbody></table></div> `;
});
export {
  Page as default
};
