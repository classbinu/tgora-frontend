import { c as create_ssr_component } from "./ssr.js";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel w-full" data-svelte-h="svelte-9d0wzi"><div id="item1" class="carousel-item w-full relative"><img src="https://cdn.theyoungtimes.com/news/photo/202308/1637_3666_5847.jpg" class="w-full h-96 object-cover filter grayscale" alt=""> <div class="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><p class="text-white text-3xl font-bold whitespace-nowrap">선생님, 오늘은 무사하십니까?</p></div></div> </div> `;
});
export {
  Carousel as C
};
