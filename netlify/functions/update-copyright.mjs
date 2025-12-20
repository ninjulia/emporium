export default async (req) => {
	const BUILD_HOOK_URL = process.env.BUILD_HOOK_URL;

	await fetch(BUILD_HOOK_URL, {
		method: 'POST',
	}).then((response) => {
		console.log('Build hook response:', response.json());
	});
};
