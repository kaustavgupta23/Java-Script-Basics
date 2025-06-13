const random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // array isliye liya taki jo bhi user submit krega values ko store krlega or user ko dhikayega taki same values user guess na kare
let numGuess = 1;

let playGame = true;

function valiadateGuess(guess){
    //value <1 or >100 toh nai hai
}

function checkGuess(guess){
    // 
}

function displayMessage(){
    // 
}