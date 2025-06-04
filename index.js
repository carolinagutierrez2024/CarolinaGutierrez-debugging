const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);

  // To validate input:
  if (isNaN(guess) || guess < 1 || guess > 99) {
    alert("Please enter a number between 1 and 99.");
    guessInput.value = '';
    return;
  }

  attempts = attempts + 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`; //Error here: must use backticks ( `` ) for template literals in JavaScript.

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
  tooLowMessage.style.display = '';
} else {
  tooHighMessage.style.display = ''; //Error here; must say too high, not too low again
}


    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} ${remainingAttempts === 1 ? 'guess' : 'guesses'} remaining`;
  }

  if (attempts === maxNumberOfAttempts) {
    hideAllMessages();
    
    maxGuessesMessage.innerHTML = `You reached the max number of guesses. The correct number was ${targetNumber}.`;
    maxGuessesMessage.style.display = '';
    
    submitButton.disabled = true;
    guessInput.disabled = true;
  }


  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() { //Error here. too many iterations and it was confusing. Needed to be simplified. Arrays are 0-indexed.
  for (let i = 0; i < messages.length; i++) {
  messages[i].style.display = 'none';
}

}

function setup() { //Error here. funtion is a typo and causes a syntax error.
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`Target number: ${targetNumber}`); //Error here, wrong syntax. Missing the backticks and quote marks for logging

  // Reset number of attempts
attempts = 0; //Error here; maxNumberOfAttempts is a constant. Resetting attempts should modify 'attempts'.

  // Enable the input and submit button
  submitButton.disabled = false; //Error here. Typo in "disabeld". Causes button to remain disabled.


  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
