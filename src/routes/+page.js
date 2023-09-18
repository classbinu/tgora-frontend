import { API_URL } from '$lib/store';

export const load = async () => {
	let API;
	API_URL.subscribe((value) => {
		API = value;
	});
	const issues = await fetch(`${API}/issues?state=open&isPublic=public`);
	return { issues: await issues.json() };
};
