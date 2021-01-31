"use strict";

let arrOfCards = [1,2,3,4,5,6,7,8,9];


const shuffle = (array,num) => {
	let arrShuffle = array.slice();
	let currentIndex = arrShuffle.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = arrShuffle[currentIndex];
		arrShuffle[currentIndex] = arrShuffle[randomIndex];
		arrShuffle[randomIndex] = temporaryValue;
	}
	return arrShuffle.slice(0,num);
}

console.log(shuffle(arrOfCards,3))