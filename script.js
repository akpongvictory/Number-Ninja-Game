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

let scoreText = document.getElementById("score");
let bestScoreText = document.getElementById("bestScore");

let attempts = 0;
let maxAttempts = 5;

let score = 0;
let bestScore = 0;

function checkGuess() {

  if (attempts >= maxAttempts) {
    return;
  }

  let userGuess = Number(guessInput.value);

  attempts++;

  attemptsText.textContent =
    "Attempts: " + attempts + " / " + maxAttempts;

  if (userGuess === secretNumber) {

    score = (maxAttempts - attempts + 1) * 20;

    scoreText.textContent = "Score: " + score;

    if (score > bestScore) {
      bestScore = score;
      bestScoreText.textContent =
        "Best Score: " + bestScore;
    }

    message.textContent =
      "🎉 Correct! You guessed the number!";

    message.style.color = "green";

    guessBtn.disabled = true;

  } else if (userGuess > secretNumber) {

    message.textContent = "📈 Too high! Try again.";
    message.style.color = "red";

  } else {

    message.textContent = "📉 Too low! Try again.";
    message.style.color = "red";
  }

  if (attempts >= maxAttempts &&
      userGuess !== secretNumber) {

    message.textContent =
      "❌ Game Over! The number was " + secretNumber;

    guessBtn.disabled = true;
  }
}

// BUTTON CLICK
guessBtn.addEventListener("click", checkGuess);

// ENTER KEY
guessInput.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {
    checkGuess();
  }

});

// RESET BUTTON
resetBtn.addEventListener("click", function () {

  secretNumber = Math.floor(Math.random() * 10) + 1;

  attempts = 0;

  attemptsText.textContent = "Attempts: 0 / " + maxAttempts;

  message.textContent = "";

  guessInput.value = "";

  guessBtn.disabled = false;

  scoreText.textContent = "Score: 0";
});