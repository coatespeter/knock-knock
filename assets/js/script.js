let playerDirection;
let paperDoorPosition;
let player = 0;
let cpu = 1;
let playerScore = 0;
let cpuScore = 0;
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-button");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-button");
const options = ["left", "middle", "right"];
const cpuChoice = options[Math.floor(Math.random() * 3)];
const audio = document.getElementById("audio");
const musicButton = document.getElementById("music-button");
const controlButtons = document.querySelectorAll(".control-button");
const gameState = document.querySelector("#gameState");
const userScore = document.getElementById('user-score');
let image = document.getElementById("main-game-image");

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
  const cpuChoice = Math.floor(Math.random() * 3)

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
    setTimeout(setMainImage, 2000);
    userScore++;
    updateScore();
    // setMainImage();

  } else {
    setResultImage(playerChoice, "bang");
    gameState.textContent = `Player bangs into wood, the paper door was ${paperDoorPosition}`;
    setTimeout(setMainImage, 2000);
    // setMainImage();
  }
}

function setResultImage(playerChoice, result) {
  image.src = `../assets/images/player-${playerChoice}-${result}.webp`
}

function setMainImage() {
  image.src = `../assets/images/main-image.webp`
}

function updateScore() {
  // Assuming you have an element with the id 'scoreDisplay'
  const userScore = document.getElementById('userScore');
  scoreDisplay.textContent = `Score: ${userScore}`;
}














