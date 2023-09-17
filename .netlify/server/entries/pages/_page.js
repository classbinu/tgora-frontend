const load = async () => {
  const issues = await fetch(`${"http://localhost:3000"}/issues?state=open&isPublic=public`);
  return { issues: await issues.json() };
};
export {
  load
};
