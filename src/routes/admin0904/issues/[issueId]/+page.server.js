
export const load = async ({ params }) => {
	const issue = await fetch(`${import.meta.env.VITE_API_URL}/issues/${params.issueId}`);
	return { issue: await issue.json() };
};
