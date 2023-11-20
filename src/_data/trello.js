//idea from @https://css-tricks.com/using-trello-as-a-super-simple-cms/
//https://github.com/philhawksworth/hello-trello

const EleventyFetch = require('@11ty/eleventy-fetch');
const NETLIFY_TRELLO_LIST_URL = `https://api.trello.com/1/lists/${process.env.TRELLO_LIST_ID}/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;

module.exports = async function () {
	//convert date to match Trello format, account for timezone
	const today = new Date();
	const dateStamp = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString();

	return await EleventyFetch(NETLIFY_TRELLO_LIST_URL, {
		duration: '1h',
		type: 'json',
	})
		.then((response) => {
			//check that offers are valid, offer text is present, brand marked via labels
			const results = response.filter(
				(card) => card.start <= dateStamp && card.due >= dateStamp && card.desc !== '' && card.labels
			);

			//return the shop name and offer text only
			const data = results.map((card) => {
				return {
					name: card.labels[0].name,
					offer: card.desc,
				};
			});

			return data;
		})
		.catch((error) => {
			console.error(error);
			return [];
		});
};
