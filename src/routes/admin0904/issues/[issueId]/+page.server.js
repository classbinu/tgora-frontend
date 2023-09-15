export const load = async ({ params }) => {
	const issue = await fetch(`http://localhost:3000/issues/${params.issueId}`);
	return { issue: await issue.json() };
};
