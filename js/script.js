"use strict";


// Function based on Fisher–Yates Shuffle algorithm
const shuffle = (array,num=3) => {
	let arrShuffle = array.slice();
	let currentIndex = arrShuffle.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = arrShuffle[currentIndex];
		arrShuffle[currentIndex] = arrShuffle[randomIndex];
		arrShuffle[randomIndex] = temporaryValue;
	}
	return arrShuffle.slice(0,num);
}


// Keys of object of Taro Cards
let keysTarotArr = Object.keys(tarot);

//Shuffle cards's keys
let resultArr = shuffle(keysTarotArr);

let firstCardURL = tarot[resultArr[0]].url;
let secondCardURL = tarot[resultArr[0]].url;
let thirdCardURL = tarot[resultArr[0]].url;

console.log(resultArr);
