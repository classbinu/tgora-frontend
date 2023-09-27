import { c as create_ssr_component } from "./ssr.js";
import { i as isLoggedIn } from "./store.js";
const InviteBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showHomeBanner;
  isLoggedIn.subscribe((value) => {
    showHomeBanner = value;
  });
  return `${showHomeBanner ? `<a href="/mypage/invite" data-svelte-h="svelte-6d4pbn"><div class="alert bg-yellow-300 flex justify-center font-bold"><span>📮 초대장이 지급되었어요!</span></div></a>` : `<a href="/notice/signup" data-svelte-h="svelte-1xytylj"><div class="alert bg-success flex justify-center font-bold"><span>🙋 T-아고라는 현직 교사 커뮤니티입니다</span></div></a>`}`;
});
export {
  InviteBanner as I
};
