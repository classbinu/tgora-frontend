import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { F as Footer } from "../../../../../chunks/Footer.js";
import { N as Navbar } from "../../../../../chunks/Navbar.js";
import { f as formatDate } from "../../../../../chunks/utils.js";
import { A as API_URL } from "../../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const issue = data.issue;
  API_URL.subscribe((value) => {
  });
  let { title } = issue;
  let { link } = issue;
  let dueDate = formatDate(issue.dueDate);
  let { summary } = issue;
  let { adminMemo } = issue;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="container mx-auto"><h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-192y6yh">🕹 이슈 수정</h1> <div class="m-3 flex justify-center mt-20"><form class="w-full md:w-96 card"><div class="form-control w-full"><label class="label" for="category" data-svelte-h="svelte-1i8rdz8"><span class="label-text">카테고리</span></label> <select id="category" name="category" class="select select-bordered w-full"><option disabled selected value="카테고리를 선택하세요" data-svelte-h="svelte-ouhsqi">카테고리를 선택하세요</option><option value="입법 반대" data-svelte-h="svelte-jb72le">❌ 입법 반대</option><option value="입법 찬성" data-svelte-h="svelte-167nsqt">✅ 입법 찬성</option><option value="국민동의청원" data-svelte-h="svelte-1d50n1b">🙆 국민동의청원</option><option value="설문" data-svelte-h="svelte-17stbtw">🎤 설문</option><option value="서명" data-svelte-h="svelte-xabrk8">📑 서명</option><option value="언론" data-svelte-h="svelte-14napb3">📰 언론</option><option value="기타" data-svelte-h="svelte-uvupv4">🎸 기타</option></select></div> <div class="form-control w-full"><label class="label" for="title" data-svelte-h="svelte-l816aj"><span class="label-text">제목</span></label> <input type="text" id="title" name="title" placeholder="이슈 제목을 입력해 주세요." class="input input-bordered w-full" required${add_attribute("value", title, 0)}></div> <div class="form-control w-full"><label class="label" for="link" data-svelte-h="svelte-111imyb"><span class="label-text">링크</span></label> <input type="text" id="link" name="link" placeholder="https://가 포함되어야 합니다." class="input input-bordered w-full" required${add_attribute("value", link, 0)}> <a${add_attribute("href", link, 0)} target="_blank" class="text-sm link link-primary text-right">링크 바로가기</a></div> <div class="form-control w-full"><label class="label" for="dueDate" data-svelte-h="svelte-er1dh2"><span class="label-text">마감일</span></label> <input type="date" id="dueDate" name="dueDate" placeholder="" class="input input-bordered w-full" required${add_attribute("value", dueDate, 0)}></div> <div class="form-control w-full"><label class="label" for="summary" data-svelte-h="svelte-1bnbext"><span class="label-text">설명</span></label> <textarea id="summary" name="summary" class="textarea textarea-bordered h-24" placeholder="간단한 설명을 적어주세요.(200자 이내 권장)">${escape(summary || "")}</textarea></div> <div class="form-control w-full"><label class="label" for="isPublic" data-svelte-h="svelte-cdit0h"><span class="label-text">공개상태</span></label> <select id="isPublic" name="isPublic" class="select select-bordered w-full"><option value="공개" data-svelte-h="svelte-soyokx">공개</option><option value="비공개" data-svelte-h="svelte-1ail045">비공개</option></select></div> <div class="form-control w-full"><label class="label" for="adminMemo" data-svelte-h="svelte-1rjnmu1"><span class="label-text">관리자 메모</span></label> <textarea id="adminMemo" name="adminMemo" class="textarea textarea-bordered h-24" placeholder="관리자 메모는 공개되지 않습니다.">${escape(adminMemo || "")}</textarea></div> <button class="btn btn-neutral mt-5" data-svelte-h="svelte-xz5rfv">수정</button> <a href="#" class="link link-error text-center mt-20" data-svelte-h="svelte-fn26be">삭제</a></form></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
