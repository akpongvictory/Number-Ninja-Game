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

let difficulty = document.getElementById("difficulty");

let range = Number(difficulty.value);

let secretNumber = Math.floor(Math.random() * range) + 1;

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


// CHECK GUESS FUNCTION
function checkGuess() {

  // Stop game if max attempts reached
  if (attempts >= maxAttempts) {
    return;
  }

  let userGuess = Number(guessInput.value);

  // Validation
  if (!userGuess || userGuess < 1 || userGuess > range) {

    message.textContent =
      "⚠️ Enter a valid number between 1 and " + range;

    message.style.color = "orange";

    return;
  }

  attempts++;

  attemptsText.textContent =
    "Attempts: " + attempts + " / " + maxAttempts;

  // CORRECT GUESS
  if (userGuess === secretNumber) {

    score = (maxAttempts - attempts + 1) * 20;

    scoreText.textContent = "Score: " + score;

    // BEST SCORE
    if (score > bestScore) {

      bestScore = score;

      bestScoreText.textContent =
        "Best Score: " + bestScore;
    }

    message.textContent =
      "🎉 Correct! You guessed the number!";

    message.style.color = "green";

    guessBtn.disabled = true;

  }

  // TOO HIGH
  else if (userGuess > secretNumber) {

    message.textContent =
      "📈 Too high! Try again.";

    message.style.color = "red";
  }

  // TOO LOW
  else {

    message.textContent =
      "📉 Too low! Try again.";

    message.style.color = "red";
  }

  // GAME OVER
  if (
    attempts >= maxAttempts &&
    userGuess !== secretNumber
  ) {

    message.textContent =
      "❌ Game Over! The number was " +
      secretNumber;

    message.style.color = "red";

    guessBtn.disabled = true;
  }
}


// BUTTON CLICK
guessBtn.addEventListener("click", checkGuess);


// ENTER KEY SUPPORT
guessInput.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    checkGuess();
  }

});


// DIFFICULTY CHANGE
difficulty.addEventListener("change", function () {

  range = Number(difficulty.value);

  secretNumber =
    Math.floor(Math.random() * range) + 1;

  document.querySelector("p").textContent =
    "Guess a number between 1 and " + range;

  attempts = 0;

  attemptsText.textContent =
    "Attempts: 0 / " + maxAttempts;

  message.textContent = "";

  guessInput.value = "";

  guessBtn.disabled = false;

  scoreText.textContent = "Score: 0";
});


// RESET BUTTON
resetBtn.addEventListener("click", function () {

  range = Number(difficulty.value);

  secretNumber =
    Math.floor(Math.random() * range) + 1;

  attempts = 0;

  attemptsText.textContent =
    "Attempts: 0 / " + maxAttempts;

  message.textContent = "";

  guessInput.value = "";

  guessBtn.disabled = false;

  scoreText.textContent = "Score: 0";
});