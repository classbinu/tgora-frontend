import { c as create_ssr_component, v as validate_component, d as each, e as escape, f as add_attribute } from "../../chunks/ssr.js";
import { C as Carousel, I as IssueCard } from "../../chunks/IssueCard.js";
import { N as Navbar, F as Footer } from "../../chunks/Navbar.js";
import { f as formatDate } from "../../chunks/utils.js";
const ShareButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button id="shareButton" class="btn bg-yellow-300 hover:bg-yellow-400" data-svelte-h="svelte-lbvgwk"><span class="material-symbols-outlined">share</span></button>`;
});
const DAYS = 1;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const issues = data.issues;
  const issuesRecently = [];
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
  const recentIssuesBaselineDate = /* @__PURE__ */ new Date();
  recentIssuesBaselineDate.setDate(recentIssuesBaselineDate.getDate() - DAYS);
  for (const issue of issues) {
    const createdAtDate = new Date(issue.createdAt);
    if (createdAtDate >= recentIssuesBaselineDate) {
      issuesRecently.push(issue);
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
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} <main class="container mx-auto"><h1 class="text-2xl font-bold my-5 text-center text-success m-3" data-svelte-h="svelte-i3szjd">공교육 정상화를 위해 T-아고라를 주변 선생님에게 공유해 주세요 🙏</h1> <div class="text-center">${validate_component(ShareButton, "ShareButton").$$render($$result, {}, {}, {})}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rbg1qc">🔥 화력집중 (최근 등록 이슈)</h1> <div class="flex flex-wrap">${each(issuesRecently, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: fire.bgColor,
        textColor: fire.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-66v49s">❌ 입법 반대</h1> <div class="flex flex-wrap">${each(issuesDisagree, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: disagree.bgColor,
        textColor: disagree.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1r7m58w">✅ 입법 찬성</h1> <div class="flex flex-wrap">${each(issuesAgree, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: agree.bgColor,
        textColor: agree.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1tuja1e">🙆 국민동의청원</h1> <div class="flex flex-wrap">${each(issuesPetition, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: petition.bgColor,
        textColor: petition.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-1ogoq7q">🎤 설문</h1> <div class="flex flex-wrap">${each(issuesSurvey, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: survey.bgColor,
        textColor: survey.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-ccjehd">📑 서명</h1> <div class="flex flex-wrap">${each(issuesSignature, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: signature.bgColor,
        textColor: signature.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rcav9f">📰 언론</h1> <div class="flex flex-wrap">${each(issuesPress, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: press.bgColor,
        textColor: press.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-rw0ig6">🎸 기타</h1> <div class="flex flex-wrap">${each(issuesOther, (issue) => {
    return `${validate_component(IssueCard, "IssueCard").$$render(
      $$result,
      {
        key: issue._id,
        bgColor: other.bgColor,
        textColor: other.textColor
      },
      {},
      {
        dueDate: () => {
          return `<span slot="dueDate" class="text-xs">${escape(formatDate(issue.dueDate))}</span>`;
        },
        button: () => {
          return `<a slot="button"${add_attribute("href", issue.link, 0)} target="_blank" class="btn bg-white">참여하기</a>`;
        },
        summary: () => {
          return `<span slot="summary">${escape(issue.summary)}</span>`;
        },
        title: () => {
          return `<span slot="title">${escape(issue.title)}</span>`;
        }
      }
    )}`;
  })}</div> <div class="text-center mt-20" data-svelte-h="svelte-vb1u60"><a href="/issues/closed" class="link link-error">마감된 이슈 보기</a></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
