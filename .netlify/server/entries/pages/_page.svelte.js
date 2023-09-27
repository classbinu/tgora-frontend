import { c as create_ssr_component, v as validate_component, e as escape, a as each, b as add_attribute } from "../../chunks/ssr.js";
import { C as Carousel } from "../../chunks/Carousel.js";
import { F as Footer } from "../../chunks/Footer.js";
import { N as Navbar } from "../../chunks/Navbar.js";
import { f as formatDate } from "../../chunks/utils.js";
import { U as USER_ID, A as API_URL, i as isLoggedIn } from "../../chunks/store.js";
import { I as InviteBanner } from "../../chunks/InviteBanner.js";
const ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button id="shareButton" class="btn btn-circle bg-yellow-300 hover:bg-yellow-400 btn-lg fixed bottom-10 right-10 shadow-lg text-2xl font-bold z-10" data-svelte-h="svelte-waxo5p"><span class="material-symbols-outlined">share</span></button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  API_URL.subscribe((value) => {
  });
  let isLoggedInCheck;
  isLoggedIn.subscribe((value) => {
    isLoggedInCheck = value;
  });
  let { data } = $$props;
  let participants = 0;
  data.participants;
  let participatedIssuesCount = 0;
  let myRank = 0;
  const issues = data.issues;
  let isNotice = [];
  const issuesAgree = [];
  const issuesDisagree = [];
  const issuesPetition = [];
  const issuesSurvey = [];
  const issuesSignature = [];
  const issuesPress = [];
  const issuesOther = [];
  for (const issue of issues) {
    if (issue.category === "입법 찬성") {
      issuesAgree.push(issue);
    } else if (issue.category === "입법 반대") {
      issuesDisagree.push(issue);
    } else if (issue.category === "국민동의청원") {
      issuesPetition.push(issue);
    } else if (issue.category === "설문") {
      issuesSurvey.push(issue);
    } else if (issue.category === "서명") {
      issuesSignature.push(issue);
    } else if (issue.category === "언론") {
      issuesPress.push(issue);
    } else if (issue.category === "기타") {
      issuesOther.push(issue);
    }
  }
  for (const issue of issues) {
    if (issue.isNotice) {
      isNotice.push(issue);
    }
  }
  const fire = { bgColor: "bg-yellow-100", textColor: "" };
  const agree = { bgColor: "bg-green-100", textColor: "" };
  const disagree = { bgColor: "bg-red-100", textColor: "" };
  const petition = { bgColor: "bg-teal-100", textColor: "" };
  const survey = { bgColor: "bg-purple-100", textColor: "" };
  const signature = { bgColor: "bg-orange-100", textColor: "" };
  const press = { bgColor: "bg-gray-100", textColor: "" };
  const other = { bgColor: "bg-indigo-100", textColor: "" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(InviteBanner, "InviteBanner").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} <div class="text-center">${validate_component(ShareButton, "ShareButton").$$render($$result, {}, {}, {})}</div> <main class="container mx-auto"><h1 class="text-xl font-bold mx-1 my-5 text-center text-gray-500" data-svelte-h="svelte-5zqx56">T-아고라를 통해 참여 완료된 이슈</h1> <p class="text-center text-6xl text-primary font-bold">${escape(participants.toLocaleString())}</p> <div class="text-center mt-5 text-secondary font-bold">${isLoggedInCheck ? `<p>선생님께서 참여하신 이슈는 ${escape(participatedIssuesCount)}건으로
				<br>
				T-아고라 상위 ${escape(myRank)}%입니다.</p> <button class="btn bg-yellow-300 mt-3" data-svelte-h="svelte-1ex151b">내 활동 공유하기 🔥</button>` : `<p data-svelte-h="svelte-68wi9l">로그인 후 참여한 이슈만 집계됩니다.
				<br> <br></p> <button class="btn bg-yellow-300 mt-3" disabled="disabled" data-svelte-h="svelte-1pu1fcx">내 활동 공유하기 🔥</button>`}</div> <h1 class="text-center text-xl font-bold text-primary mt-20 mx-3" data-svelte-h="svelte-8zejj">&#39;미참여&#39;를 눌러 참여 여부를 관리할 수 있어요</h1> <h1 class="text-3xl font-bold mx-3" data-svelte-h="svelte-jljxzl">🔥 화력집중(중요)</h1> <div class="flex flex-wrap">${each(isNotice, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(fire.bgColor, true) + " " + escape(fire.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="${"badge " + escape(
      issue.category === "입법 반대" ? "bg-red-300" : issue.category === "입법 찬성" ? "bg-green-300" : issue.category === "국민동의청원" ? "bg-teal-300" : issue.category === "설문" ? "bg-purple-300" : issue.category === "서명" ? "bg-orange-300" : issue.category === "언론" ? "bg-gray-300" : issue.category === "기타" ? "bg-indigo-300" : "",
      true
    )}">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-66v49s">❌ 입법 반대</h1> <div class="flex flex-wrap">${each(issuesDisagree, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(disagree.bgColor, true) + " " + escape(disagree.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-red-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1r7m58w">✅ 입법 찬성</h1> <div class="flex flex-wrap">${each(issuesAgree, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(agree.bgColor, true) + " " + escape(agree.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-green-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1tuja1e">🙆 국민동의청원</h1> <div class="flex flex-wrap">${each(issuesPetition, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(petition.bgColor, true) + " " + escape(petition.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-teal-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1ogoq7q">🎤 설문</h1> <div class="flex flex-wrap">${each(issuesSurvey, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(survey.bgColor, true) + " " + escape(survey.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-purple-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-ccjehd">📑 서명</h1> <div class="flex flex-wrap">${each(issuesSignature, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(signature.bgColor, true) + " " + escape(signature.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-orange-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rcav9f">📰 언론</h1> <div class="flex flex-wrap">${each(issuesPress, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(press.bgColor, true) + " " + escape(press.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-gray-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rw0ig6">🎸 기타</h1> <div class="flex flex-wrap">${each(issuesOther, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(other.bgColor, true) + " " + escape(other.textColor, true) + " shadow-xl"}"><div class="card-body"><div class="badge bg-indigo-300">${escape(issue.category)}</div> <h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <div class="text-center mt-20" data-svelte-h="svelte-vb1u60"><a href="/issues/closed" class="link link-error">마감된 이슈 보기</a></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
