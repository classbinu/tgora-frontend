const load = async ({ params }) => {
  const issue = await fetch(`${"https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app"}/issues/${params.issueId}`);
  return { issue: await issue.json() };
};
export {
  load
};
