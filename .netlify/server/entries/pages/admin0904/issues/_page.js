const load = async () => {
  const issues = await fetch(`${"http://localhost:3000"}/issues?state=all&isPublic=all`);
  return { issues: await issues.json() };
};
export {
  load
};
