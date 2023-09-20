import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../../../chunks/Navbar.js";
import { A as API_URL, U as USER_ID } from "../../../../chunks/store.js";
import "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countMentees = 0;
  API_URL.subscribe((value) => {
  });
  USER_ID.subscribe((value) => {
  });
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="container mx-auto mx-auto p-3" data-svelte-h="svelte-un45t6"><h1 class="text-center text-3xl font-bold my-20 text-success">T-아고라에서 함께 하고 싶은 선생님을 초대해 주세요 💌</h1> <h2 class="text-2xl font-bold text-error">🔥 꼭 읽어주세요</h2> <br> <h3 class="text-xl font-bold">T-아고라는 교사 전용 익명 커뮤니티입니다.</h3> <p class="my-3">1️⃣ 현직 교사만 가입할 수 있습니다. 초대장은 반드시 가입 대상에게 보내주세요.
		<br>
		* 유치원, 초등, 중등, 특수 등 <span class="font-bold">교과 교사</span>에 한하여 가입을 받고
		있습니다.
		<br>(비교과 교사, 교감, 교장, 교육전문직 가입 가능 여부 검토 중)</p> <p class="my-3">2️⃣ 초대장은 회원당 5장만 지급됩니다. 내 초대 코드로 5명의 회원이 가입하면 초대장은 만료됩니다.
		<br>
		(한시적으로 5장의 초대장을 지급하며 추후 2장으로 축소 예정)</p> <p class="my-3">3️⃣ 내 초대 코드로 누가 가입했는지 알 수 없습니다. 마찬가지로 초대 코드로 회원을 유추할 수
		없습니다.</p> <p class="my-3">4️⃣ 가입 대상이 아닌 사람에게 초대장을 발송한 경우에는 영구 제명됩니다.</p> <p class="my-3">5️⃣ 접근이 자유로운 공개된 공간에 초대장 링크를 공유하지 마세요.</p></div> <div class="text-center mt-20">${`<p class="text-sm text-success font-bold mb-3">남은 초대장은 ${escape(5 - countMentees)}장입니다.</p> <button id="shareButton" class="btn btn-lg bg-yellow-300 hover:bg-yellow-400" data-svelte-h="svelte-sgy2le">초대장 공유하기 🚀</button>`}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
