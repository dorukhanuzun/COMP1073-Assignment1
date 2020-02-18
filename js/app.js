// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');


//Query Selectors
var btnNouns = document.querySelector('#nouns');
var btnVerbs = document.querySelector('#verbs');
var btnAdjective = document.querySelector('#adjectives');
var btnAnotherNouns = document.querySelector('#another-nouns');
var btnPlaces = document.querySelector('#places');
var btnSpeaknow = document.querySelector('#speaknow');
var fullText = document.querySelector('p');
var reset = document.querySelector('#reset');


//Arrays
var arrayNouns = ["Seker", "Dorukhan", "Saadet", "Cavit", "Justin", "Trump", "Yunus", "Sevil", "Michael", "Uzum"];
var arrayVerbs = ["ate", "spoke", "danced", "played", "slept", "cried", "smiled", "moved", "run", "studied"];
var arrayAdjective = ["a beautiful", "an adorable", "a homeless", "hot", "icy", "solid", "tight", "silent", "voiceless", "red"];
var arrayAnotherNouns = ["fish", "cat", "dog", "lion", "chicken", "pickle", "hamburger", "pizza", "coffee", "tea"];
var arrayPlaces = ["at home", "in street", "in Paris", "in the class", "on the bed", "in Canada", "in Turkey", "in the USA", "in kitchen", "at school"];

var randomNouns = randomWord(arrayNouns);
var randomVerb = randomWord(arrayVerbs);
var randomAdjective = randomWord(arrayAdjective);
var randomAnotherNoun = randomWord(arrayAnotherNouns);
var randomPlace = randomWord(arrayPlaces);

var full = [];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function randomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}



/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
/*
speakButton.onclick = function () {
	speakNow(textToSpeak);
}
*/

btnNouns.onclick = function () {
	textToSpeak = randomWord(arrayNouns);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
}

btnVerbs.onclick = function () {
	textToSpeak = randomWord(arrayVerbs);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
}

btnAdjective.onclick = function () {
	textToSpeak = randomWord(arrayAdjective);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
}

btnAnotherNouns.onclick = function () {
	textToSpeak = randomWord(arrayAnotherNouns);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
}

btnPlaces.onclick = function () {
	textToSpeak = randomWord(arrayPlaces);
	speakNow(textToSpeak);
	full.push(textToSpeak);
	fullText.innerHTML = textToSpeak + " ";
}

btnSpeaknow.onclick = function () {
	speakNow(full);
	fullText.innerHTML = full.join(" ");
}

reset.onclick = function () {
	document.location.reload(true);
}
