export const load = async () => {
	const issues = await fetch('http://localhost:3000/issues');
	return { issues: await issues.json() };
};
