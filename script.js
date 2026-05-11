// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let guessInput = document.getElementById("guessInput");

// let guessBtn = document.getElementById("guessBtn");

// let message = document.getElementById("message");


// guessBtn.addEventListener("click", function () {

//   let userGuess = Number(guessInput.value);

  
//   if (userGuess === secretNumber) {

//     message.textContent = "🎉 Correct! You guessed the number!";

//   } 
  
//   else if (userGuess > secretNumber) {

//     message.textContent = "📈 Too high! Try again.";

//   } 
  
//   else {

//     message.textContent = "📉 Too low! Try again.";

//   }

// });

let secretNumber = Math.floor(Math.random() * 10) + 1;

let guessInput = document.getElementById("guessInput");

let guessBtn = document.getElementById("guessBtn");

let message = document.getElementById("message");

let attemptsText = document.getElementById("attempts");

let resetBtn = document.getElementById("resetBtn");


let attempts = 0;
let maxAttempts = 5;



function checkGuess() {

  if (attempts >= maxAttempts){
    return;
  }

  let userGuess = Number(guessInput.value);

  
  attempts++;

  attemptsText.textContent = "Attempts: " 
  + attempts + " / " + maxAttempts;



  if (userGuess === secretNumber) {

    message.textContent = 
    "🎉 Correct! You guessed the number!";

    message.style.color = "green";

    guessBtn.disabled = true;

  } 

  else if (attempts >= maxAttempts) {

    message.textContent = 
    "💀 Game Over! The number was " + secretNumber;

    message.style.color = "red"

  }

  
  else if (userGuess > secretNumber) {

    message.textContent =
     "📈 Too high! Try again.";

    message.style.color = "orange";

  } 
  
  else {

    message.textContent = "📉 Too low! Try again.";

    message.style.color = "orange";

  }

};

guessInput.addEventListener("keydown", function(event) {
  // console.log(event.key);

  if (event.key === "Enter") {

    checkGuess();

  }

});

resetBtn.addEventListener("click", function () {

  secretNumber = Math.floor(Math.random() * 10) + 1;

  attempts = 0;

  attemptsText.textContent = "Attempts: 0";

  message.textContent = "";

  guessInput.value = "";

  guessBtn.disabled = false;

});