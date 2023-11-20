const shopList = require('./shops');
const trelloList = require('./trello');

// Combine shop and trello results
function mergeLists(list1, list2) {
	const combinedList = [...list1, ...list2];

	// Remove duplicates
	const mergedList = combinedList.reduce((accumulator, current) => {
		// Check if the current object already exists in the accumulator
		const match = accumulator.findIndex((shop) => shop.name === current.name);
		// If the object already exists, update its offer
		if (match > -1) {
			accumulator[match].offer = current.offer;
		} else {
			// Otherwise, add the object to the accumulator
			accumulator.push(current);
		}
		return accumulator;
	}, []);
	return mergedList;
}

// Sort shops by offer, alpha
function sortList(list) {
	// Separate the objects with offers from the rest
	const offersArray = list.filter((shop) => shop.offer);

	// Sort the objects with offers by offer and name
	offersArray.sort((a, b) => {
		if (a.offer < b.offer) return -1;
		if (a.offer > b.offer) return 1;
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	// Combine the sorted objects with offers with the rest of the objects
	const data = [...offersArray, ...list.filter((shop) => !shop.offer)];

	return data;
}

async function obtainTrello() {
	//trelloData = await trelloList().then((res) => res)
	return trelloList();
}

module.exports = async () => {
	const trelloData = await obtainTrello();
	const mergedList = mergeLists(shopList, trelloData);
	const sortedList = sortList(mergedList);
	return sortedList;
};
