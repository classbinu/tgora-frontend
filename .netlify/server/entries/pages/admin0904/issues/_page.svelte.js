import { c as create_ssr_component, v as validate_component, a as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { f as formatDate } from "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1xr6epi">🕹 이슈 관리</h1> <div class="text-right m-3" data-svelte-h="svelte-69e8ya"><a href="issues/register" class="btn btn-primary">이슈 등록</a></div> <div class="overflow-x-auto m-3"><table class="table table-zebra text-center"><thead data-svelte-h="svelte-wc93cg"><tr><th>_id</th> <th>분류</th> <th>제목</th> <th>마감일</th> <th>관리자 메모</th> <th>생성일</th> <th>수정</th></tr></thead> <tbody>${each(data.issues, (issue) => {
    return `<tr><td>${escape(issue._id)}</td> <td>${escape(issue.category)}</td> <td><a${add_attribute("href", issue.link, 0)} target="_blank" class="link link-primary">${escape(issue.title)}</a></td> <td>${escape(formatDate(issue.dueDate))}</td> <td>${escape(issue.adminMemo)}</td> <td>${escape(issue.createdAt)}</td> <td><a href="${"issues/" + escape(issue._id, true)}" class="btn btn-primary btn-xs">수정</a></td> </tr>`;
  })}</tbody></table></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
