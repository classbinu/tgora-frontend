export const load = async () => {
	const issues = await fetch(
		'https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app/issues'
	);
	return { issues: await issues.json() };
};
