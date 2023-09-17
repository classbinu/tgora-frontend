import { c as create_ssr_component, f as add_attribute } from "./ssr.js";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel w-full" data-svelte-h="svelte-cndsr6"><div id="item1" class="carousel-item w-full"><img src="https://img.sbs.co.kr/newimg/news/20230819/201822834_700.jpg" class="w-full h-96 object-cover filter grayscale" alt=""></div> </div> `;
});
const IssueCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor = "" } = $$props;
  let { textColor = "" } = $$props;
  let classes = `card ${bgColor} ${textColor} shadow-xl`;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  return `<div class="p-2 w-full lg:w-96"><div${add_attribute("class", classes, 0)}><div class="card-body"><h2 class="card-title">${slots.title ? slots.title({}) : `<span data-svelte-h="svelte-b4iicg">title</span>`}</h2> <p>${slots.summary ? slots.summary({}) : `<span data-svelte-h="svelte-1wsnaz6">summary</span>`}</p> <div class="card-actions justify-end">${slots.button ? slots.button({}) : `<a href="/" target="_blank" class="btn" data-svelte-h="svelte-1e3y0i1">참여하기</a>`}</div> <p><span class="text-xs" data-svelte-h="svelte-1taviom">마감일 </span>${slots.dueDate ? slots.dueDate({}) : `<span class="text-xs" data-svelte-h="svelte-ld9z4s">0000-00-00</span>`}</p></div></div></div>`;
});
export {
  Carousel as C,
  IssueCard as I
};
