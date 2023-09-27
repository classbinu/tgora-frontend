import { c as create_ssr_component } from "./ssr.js";
const WaterMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center"><div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div> <div class="fixed top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div> <div class="fixed top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div></div>`;
});
const FeedSecretWarning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-1 w-full lg:w-1/2 mx-auto" data-svelte-h="svelte-1cj7q8w"><p class="text-error font-bold text-sm">피드를 캡처해서 외부로 유출하지 말아주세요 🙅</p> <p class="text-sm text-gray-400">모든 피드는 조회 회원이 기록되며 UUID, IPv4 워터마크 등 보안 코드가 작동 중입니다 🔐</p></div>`;
});
export {
  FeedSecretWarning as F,
  WaterMark as W
};
