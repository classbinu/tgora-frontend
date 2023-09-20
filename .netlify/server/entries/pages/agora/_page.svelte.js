import { c as create_ssr_component, v as validate_component, a as each, e as escape } from "../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../chunks/Navbar.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let feeds = data.feeds;
  feeds = [
    {
      author: "IIIiiIIiIIIiIiI",
      title: "테스트1",
      content: "테스트 내용 1",
      createdAt: "2022-01-01"
    },
    {
      author: "IiiiiiiIiIIIiIiI",
      title: "테스트2",
      content: "테스트 내용 2",
      createdAt: "2022-01-02"
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><div class="flex justify-center"><div>${each(feeds, (feed) => {
    return `<div class="p-2 w-screen lg:w-96"><div class="card bg-base-100 shadow-md"><div class="card-body"><div><span class="text-sm">${escape(feed.author)}</span> <span class="text-xs text-gray-300">${escape(feed.createdAt)}</span></div> <h2 class="card-title">${escape(feed.title)}</h2> <p>${escape(feed.content)}</p> </div></div> </div>`;
  })}</div></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
