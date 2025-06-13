let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
//  already guessed value ko user firse na let
let numGuess = 1;
// kitne number of guess vo le skta hai, 1 se 10 tak
// 10 tak phauch ke guess btn ko disable krdenge

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // kya value sahi ja rhi hai??
    // kahi <1 or > 100 toh ni ja rhi
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess < 1){
        alert("Please enter a number more than 1")
    } else if(guess > 100){
        alert("Please enter a number less than 100")
    } else{
        prevGuess.push(guess);
        if(numGuess > 10){
            cleanupGuess(guess);
            displayMessage(`Game Over, random number was ${randomNumber}`);
            endGame();
        } else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    // need to print ki value sahi hai ya galat
    // value sahi h ya galat
    // low or high values toh nahi hai?

    if(guess === randomNumber){
        displayMessage(`Right guess`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function cleanupGuess(guess){
    // 
    userInput.value = ''; // value clean krdo
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    // DOM ke sath interect krega
    // user se message leke print krega
    lowOrHi.innerHTML = `<h2>${message}</h2>`


}

function endGame(){
    userInput.value = '' // value clean;
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =  `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
    // 
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true;
    })
}









