import { API_URL } from '$lib/store';

let API;
API_URL.subscribe((value) => {
	API = value;
});

export const load = async ({ params }) => {
	const issue = await fetch(`${API}/issues/${params.issueId}`);
	return { issue: await issue.json() };
};
