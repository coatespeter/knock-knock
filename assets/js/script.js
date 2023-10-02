/* jshint esversion: 11 */
let playerDirection;
let paperDoorPosition;
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-button");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-button");
const audio = document.getElementById("audio");
const musicButton = document.getElementById("music-button");
const controlButtons = document.querySelectorAll(".control-button");
const gameState = document.querySelector("#gameState");
const userScore = document.getElementById('user-score');
let image = document.getElementById("main-game-image");
let userRips = 0;


//theme music control

musicButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    musicButton.innerHTML = "Stop Music";
  } else {
    audio.pause();
    musicButton.innerHTML = "Play Music";
  }
});

//modal box settings

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

/**
 * Reset button
 */
resetButton.addEventListener("click", () => {
  location.reload();
});

controlButtons.forEach(button => button.addEventListener("click", () => {
  playerDirection = button.textContent;
  generatePaperDoorPosition();
  checkOutcome(playerDirection, paperDoorPosition);


  // add a timer before resetting the image to main game image
  // checkWinner();
}));

function generatePaperDoorPosition() {
  const cpuChoice = Math.floor(Math.random() * 3);
  

  switch (cpuChoice) {
    case 0:
      paperDoorPosition = 'left';
      break;
    case 1:
      paperDoorPosition = 'middle';
      break;
    case 2:
      paperDoorPosition = 'right';
      break;
  }
}

function checkOutcome(playerChoice, paperDoorPosition) {
  if (playerChoice.toLowerCase() === paperDoorPosition.toLowerCase()) {
    setResultImage(playerChoice, "rip");
    gameState.textContent = `Player rips through paper`;
    setTimeout(setMainImage, 3000);
    userRips++; // Increment the userRips variable
    userScore.innerHTML = userRips; // Update the score display

    if (userRips === 3) {
      declareWinner();
      }

  } else {
    setResultImage(playerChoice, "bang");
    gameState.textContent = `Player bangs into wood, the paper door was ${paperDoorPosition}`;
    setTimeout(() => {
      restartGame(); // Restart the game after 2 seconds
    }, 2000);
  }
}


function setResultImage(playerChoice, result) {
  image.src = `../assets/images/player-${playerChoice}-${result}.webp`;
}

function setMainImage() {
  image.src = `../assets/images/main-image.webp`;
}


function restartGame() {
  // Reset necessary variables or game state here
  userRips = 0;
  userScore.innerHTML = userRips;
  // Call any other functions needed to reset the game
  // For example, you might want to reset the image and game state text
  setMainImage();
  gameState.textContent = "Pick a door and RUN!!";
}

function declareWinner() {
  // display a message declaring the user as the winner
  gameState.textContent = "Congratulations! You have Knock-Knock'D your way to the next round and are now, one step closer to storming Takeshi's Castle!";
  document.getElementById("winning-image").src = "assets/images/winning-image.webp";
  // Show the winning image
  document.getElementById("winning-image").style.display = "block";
  
  // Hide the main game image
  image.style.display = "none";
  
  setTimeout(() => {
    setMainImage(); // Set the main image
    gameState.textContent = "Pick a door and RUN!!"; // Reset game state text
    document.getElementById("winning-image").style.display = "none"; // Hide winning image
    image.style.display = "block"; // Show main game image
  }, 4000);
}













