import { c as create_ssr_component, v as validate_component, a as each, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { C as Carousel } from "../../../../chunks/Carousel.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { N as Navbar } from "../../../../chunks/Navbar.js";
import { f as formatDate } from "../../../../chunks/utils.js";
import { U as USER_ID, A as API_URL, i as isLoggedIn } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userId;
  USER_ID.subscribe((value) => {
    userId = value;
  });
  API_URL.subscribe((value) => {
  });
  isLoggedIn.subscribe((value) => {
  });
  let { data } = $$props;
  const issues = data.issues;
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
  const agree = { bgColor: "bg-green-100", textColor: "" };
  const disagree = { bgColor: "bg-red-100", textColor: "" };
  const petition = { bgColor: "bg-teal-100", textColor: "" };
  const survey = { bgColor: "bg-purple-100", textColor: "" };
  const signature = { bgColor: "bg-orange-100", textColor: "" };
  const press = { bgColor: "bg-gray-100", textColor: "" };
  const other = { bgColor: "bg-indigo-100", textColor: "" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} <main class="container mx-auto"><h1 class="text-3xl font-bold my-10 text-center text-error" data-svelte-h="svelte-1jxr1ej">마감된 이슈입니다 🙇</h1> <div class="text-center" data-svelte-h="svelte-f92ye8"><a href="/" class="link link-success">진행 중인 이슈 보기</a></div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-66v49s">❌ 입법 반대</h1> <div class="flex flex-wrap">${each(issuesDisagree, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(disagree.bgColor, true) + " " + escape(disagree.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1r7m58w">✅ 입법 찬성</h1> <div class="flex flex-wrap">${each(issuesAgree, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(agree.bgColor, true) + " " + escape(agree.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1tuja1e">🙆 국민동의청원</h1> <div class="flex flex-wrap">${each(issuesPetition, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(petition.bgColor, true) + " " + escape(petition.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1ogoq7q">🎤 설문</h1> <div class="flex flex-wrap">${each(issuesSurvey, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(survey.bgColor, true) + " " + escape(survey.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-ccjehd">📑 서명</h1> <div class="flex flex-wrap">${each(issuesSignature, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(signature.bgColor, true) + " " + escape(signature.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rcav9f">📰 언론</h1> <div class="flex flex-wrap">${each(issuesPress, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(press.bgColor, true) + " " + escape(press.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rw0ig6">🎸 기타</h1> <div class="flex flex-wrap">${each(issuesOther, (issue) => {
    return `<div class="p-2 w-full lg:w-96"><div class="${"card " + escape(other.bgColor, true) + " " + escape(other.textColor, true) + " shadow-xl"}"><div class="card-body"><h2 class="card-title">${escape(issue.title)}</h2> <p>${escape(issue.summary)}</p> <div class="flex justify-between my-5"><button class="${"btn btn-circle " + escape(
      issue["participants"]?.includes(userId) ? "btn-success" : "btn-error",
      true
    )}">${issue["participants"]?.includes(userId) ? `
									완료
								` : `
									미참여
								`}</button> <a${add_attribute("href", issue.link, 0)} target="_blank" class="btn">마감</a></div> <span class="text-xs">마감일 ${escape(formatDate(issue.dueDate))}</span> </div></div> </div>`;
  })}</div> <div class="text-center mt-20" data-svelte-h="svelte-1nn2jdi"><a href="/" class="link link-success">진행 중인 이슈 보기</a></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
