import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="container mx-auto mx-auto p-3" data-svelte-h="svelte-bhvyxu"><h1 class="text-center text-3xl font-bold mb-20 text-success">초대 링크를 통해서만 가입할 수 있어요 😅</h1> <h2 class="text-2xl font-bold text-error">🔥 꼭 읽어주세요</h2> <br> <h3 class="text-xl font-bold">T-아고라는 현직 교사 커뮤니티입니다.</h3> <p class="my-3">1️⃣ 현직 교사만 가입할 수 있습니다.
		<br>
		* 유치원, 초등, 중등, 특수 등 <span class="font-bold">교과 교사</span>에 한하여 가입을 받고
		있습니다.
		<br><span class="text-gray-400 text-sm">(비교과 교사, 교감, 교장, 교육전문직 가입 가능 여부 검토 중)</span></p> <p class="my-3">2️⃣ 초대장은 회원당 5장만 지급됩니다. 초대장을 받을 수 있는 주변 선생님이 있는지 찾아 보세요.
		<br> <span class="text-gray-400 text-sm">(한시적으로 5장의 초대장을 지급하며 추후 2장으로 축소 예정)</span></p> <p class="my-3">3️⃣ 초대장이 만료된 경우 해당 초대장으로 가입할 수 없습니다. 다른 분에게 초대를 받아 주세요.</p> <p class="my-3">4️⃣ 초대 코드로 누가 가입했는지 알 수 없습니다. 마찬가지로 초대 코드로 회원을 유추할 수 없습니다.</p> <p class="my-3">5️⃣ 가입 대상이 아닌 사람이 가입한 경우 계정은 영구 삭제되며, 초대한 사람의 계정은 접속 정지 후
		소명 자료를 제출하여야 해제됩니다.</p> <p class="my-3"><span class="text-error font-bold">⭐️ 초등교사인 경우 아래 게시글에 초대장 링크를 확인하실 수 있습니다.</span> <br> <a href="https://indischool.com/boards/square/37354885" target="_blank" class="link link-primary">초대장 링크 확인하기 (초등교사 전용)</a></p> <div class="my-20"></div></div> `;
});
export {
  Page as default
};
