import { API_URL } from '$lib/store';
let API;
API_URL.subscribe((value) => {
	API = value;
});

export const load = async () => {
	const issues = await fetch(`${API}/issues?state=closed&isPublic=public`);
	return { issues: await issues.json() };
};
