// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber); // For debugging: show the random number in console

// Get references to DOM elements
const submit = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for user's guess
const guessSlot = document.querySelector('.guesses'); // Area to display previous guesses
const remaining = document.querySelector('.lastResult'); // Area to display remaining guesses
const lowOrHi = document.querySelector('.lowOrHi'); // Area to display feedback (low/high/correct)
const startOver = document.querySelector('.resultParas'); // Area to display "Start new Game" button

const p = document.createElement('p'); // Paragraph element for new game button

let prevGuess = []; // Array to store previous guesses
let numGuess = 1; // Counter for number of guesses (starts at 1)
let playGame = true; // Flag to control if the game is active

// Add event listener to submit button if game is active
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Get user's guess as a number
        console.log(guess); // Debug: log the guess
        validateGuess(guess); // Validate and process the guess
    })
}

// Validate the user's guess
function validateGuess(guess){
    // Check if guess is a valid number and within range
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess < 1){
        alert("Please enter a number more than 1")
    } else if(guess > 100){
        alert("Please enter a number less than 100")
    } else{
        prevGuess.push(guess); // Store the guess
        if(numGuess > 10){
            // If guesses exceed 10, end the game
            cleanupGuess(guess);
            displayMessage(`Game Over, random number was ${randomNumber}`);
            endGame();
        } else {
            // Otherwise, process the guess
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

// Check if the guess is correct, too low, or too high
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Right guess`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

// Clean up after each guess: clear input, update guesses and remaining
function cleanupGuess(guess){
    userInput.value = ''; // Clear input field
    guessSlot.innerHTML += `${guess}, ` // Show all guesses so far
    remaining.innerHTML = `${11 - numGuess}`; // Update remaining guesses
    numGuess++; // Increment guess counter
}

// Display a message to the user (low/high/correct/game over)
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// End the game: disable input, show new game button
function endGame(){
    userInput.value = '' // Clear input
    userInput.setAttribute('disabled', '') // Disable input field
    p.classList.add('button') // Add class for styling
    p.innerHTML =  `<h2 id="newGame">Start new Game</h2>` // Set button text
    startOver.appendChild(p); // Add button to DOM
    playGame = false; // Set game as inactive
    newGame(); // Set up new game listener
}

// Set up new game: reset everything when "Start new Game" is clicked
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate new random number
        prevGuess = []; // Reset previous guesses
        numGuess = 1; // Reset guess counter
        guessSlot.innerHTML = ''; // Clear guesses display
        remaining.innerHTML = `${11 - numGuess}`; // Reset remaining guesses
        userInput.removeAttribute('disabled') // Enable input field
        startOver.removeChild(p); // Remove new game button
        playGame = true; // Set game as active
    })
}