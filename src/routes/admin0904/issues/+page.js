export const load = async () => {
	const issues = await fetch(`${import.meta.env.VITE_API_URL}/issues?state=all&isPublic=all`);
	return { issues: await issues.json() };
};
