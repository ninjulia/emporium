require('dotenv').config();

const TRELLO_LIST_URL = `https://api.trello.com/1/lists/${process.env.TRELLO_LIST_ID}/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_TOKEN}`;

exports.handler = async () => {
	try {
		let response = await fetch(TRELLO_LIST_URL);

		let trello = response.json();
		console.log(trello);

		return {
			statusCode: 200,
			body: JSON.stringify({ trello }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error }),
		};
	}
};
