const shopList = require('./shops');
const trelloList = require('./trello');

//validate trello data, update shopList with any offers
function addOffers(list1, list2) {
	//for each listing in Trello array
	list1.forEach((shop) => {
		//compare to shop List
		list2.filter((obj) => {
			//update offer if name matches
			if (obj.name === shop.name) obj.offer = shop.offer;
		});
	});
	//return updated shopList data
	return shopList;
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
	return trelloList();
}

module.exports = async () => {
	const trelloData = await obtainTrello();
	const mergedList = addOffers(trelloData, shopList);
	const sortedList = sortList(mergedList);
	return sortedList;
};
