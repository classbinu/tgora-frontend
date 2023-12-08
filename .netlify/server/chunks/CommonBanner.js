import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const WaterMark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center pointer-events-none"><div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div> <div class="fixed top-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div> <div class="fixed top-3/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50 opacity-50 text-gray-300 text-xs">${slots.userId ? slots.userId({}) : ``}</div></div>`;
});
const FeedSecretWarning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-1 w-full lg:w-1/2 mx-auto" data-svelte-h="svelte-1trsiqs"><p class="text-error font-bold text-sm">피드를 캡처해서 외부로 유출하지 말아주세요 🙅</p> <p class="text-sm text-gray-400">Logs, UUID/IPv4 Watermark 등 유출 추적 보안코드 실행 중 🔐</p></div>`;
});
const CommonBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const bannerList = [
    {
      url: "https://www.kftu.net/",
      alt: "교사노동조합연맹",
      img: "/kftu_banner.png"
    },
    {
      url: "https://padlet.com/Rysery/1-iy536ucbyexos5r9",
      alt: "공교육 정상화 전략기획팀",
      img: "/save_teachers_banner.png"
    },
    {
      url: "https://padlet.com/Rysery/1-iy536ucbyexos5r9",
      alt: "공교육 정상화 전략기획팀",
      img: "/save_teachers_banner.png"
    }
  ];
  const randomIndex = Math.floor(Math.random() * bannerList.length);
  const selectedBanner = bannerList[randomIndex];
  return `<div><a${add_attribute("href", selectedBanner.url, 0)} target="_blank"><img${add_attribute("src", selectedBanner.img, 0)}${add_attribute("alt", selectedBanner.alt, 0)} class="card"></a></div>`;
});
export {
  CommonBanner as C,
  FeedSecretWarning as F,
  WaterMark as W
};
