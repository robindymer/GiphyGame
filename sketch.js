/*
 * Replace a sentence with giphs. Try to guess each word
 * Alternatively with emojis!
 */

let host = 'http://api.giphy.com';
let path = '/v1/gifs/search?';
let q = '&q=epic';
let limit = '&limit=1';
let apiKey = '&api_key=Gpss0lVXHPWrYGxlEqLJgdObRa6L2MKC';

let input;
let words;
let giphs = [];

function setup() {
	noCanvas();

	input = select('input');
	input.changed(sendData);
}

function sendData() {
	for (let j = 0; j < giphs.length; j++) {
		giphs[j].hide();
	}
	words = input.value().split(" ");
	for (let i = 0; i < words.length; i++) {
		let url = host+path+`&q=${words[i]}`+limit+apiKey;
		loadJSON(url, gotData);
	}
}

function gotData(giphy) {
	let imgUrl = giphy.data[0].images.original.url;
	let img = createImg(imgUrl)
}
