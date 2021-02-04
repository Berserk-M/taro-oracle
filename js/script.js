"use strict";
//
//
//
// Logic

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

// Variables
let resultArr, firstCardURL, secondCardURL, thirdCardURL;


//
//
//
//
// Actions with DOM

let buttonGame = document.querySelector('.bottom-block__button');
let result = document.querySelector('.bottom-block__output');
let tryAgain = document.querySelector('.output-block__button');

let img1 = document.querySelector('#card-item1');
let img2 = document.querySelector('#card-item2');
let img3 = document.querySelector('#card-item3');


buttonGame.addEventListener('click', function(){
	this.classList.add('disabled');
	result.classList.remove('disabled');

	resultArr = shuffle(keysTarotArr);
	firstCardURL = tarot[resultArr[0]].url;
	secondCardURL = tarot[resultArr[1]].url;
	thirdCardURL = tarot[resultArr[2]].url;

	img1.src = firstCardURL;
	img2.src = secondCardURL;
	img3.src = thirdCardURL;
});


tryAgain.addEventListener('click', function(){
	result.classList.add('disabled');
	buttonGame.classList.remove('disabled');

	img1.src = 'assets/cards/card_1.png';
	img2.src = 'assets/cards/card_2.png';
	img3.src = 'assets/cards/card_3.png';	
});