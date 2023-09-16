import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape } from "../../chunks/ssr.js";
import { N as Navbar, F as Footer } from "../../chunks/Navbar.js";
import { f as formatDate } from "../../chunks/utils.js";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="carousel w-full" data-svelte-h="svelte-cndsr6"><div id="item1" class="carousel-item w-full"><img src="https://img.sbs.co.kr/newimg/news/20230819/201822834_700.jpg" class="w-full h-96 object-cover filter grayscale" alt=""></div> </div> `;
});
const IssueCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor = "" } = $$props;
  let { textColor = "" } = $$props;
  let classes = `card ${bgColor} ${textColor} shadow-xl`;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  return `<div class="p-2 w-full lg:w-96"><div${add_attribute("class", classes, 0)}><div class="card-body"><h2 class="card-title">${slots.title ? slots.title({}) : `<span data-svelte-h="svelte-b4iicg">title</span>`}</h2> <p>${slots.summary ? slots.summary({}) : `<span data-svelte-h="svelte-1wsnaz6">summary</span>`}</p> <div class="card-actions justify-end">${slots.button ? slots.button({}) : `<a href="/" target="_blank" class="btn" data-svelte-h="svelte-1e3y0i1">참여하기</a>`}</div> <p><span class="text-xs" data-svelte-h="svelte-1taviom">마감일 </span>${slots.dueDate ? slots.dueDate({}) : `<span class="text-xs" data-svelte-h="svelte-ld9z4s">0000-00-00</span>`}</p></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} <main class="container mx-auto"> <h1 class="text-3xl font-bold mt-20 mx-3" data-svelte-h="svelte-66v49s">❌ 입법 반대</h1> <div class="flex flex-wrap">${each(issuesDisagree, (issue) => {
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
  })}</div> </main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
