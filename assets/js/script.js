
let playerScore = 0;
let cpuScore = 0;
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-button");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-button");
const audio = document.getElementById("audio");
const musicButton = document.getElementById("music-button");

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

// Global variables to keep track of scores

// Function to choose a random door number
function chooseRandomDoor() {
    return Math.floor(Math.random() * 3) + 1;
}

// Function to start the game
function startGame(playerChoice) {
    // Get the random door chosen by the computer
    const cpuChoice = chooseRandomDoor();

    // Determine the winner and update scores
    if (playerChoice === cpuChoice) {
        cpuScore++;
        alert(`Computer chose Door ${cpuChoice}. CPU wins!`);
    } else {
        playerScore++;
        alert(`Computer chose Door ${cpuChoice}. You win!`);
    }

    // Update scores on the page
    document.getElementById('playerScore').textContent = `Player Score: ${playerScore}`;
    document.getElementById('cpuScore').textContent = `CPU Score: ${cpuScore}`;
}

// Function to handle button click
function handleButtonClick() {
    // Assuming the modal has buttons with IDs "door1", "door2", and "door3"
    document.getElementById("door1").addEventListener('click', () => startGame(1));
    document.getElementById("door2").addEventListener('click', () => startGame(2));
    document.getElementById('door3').addEventListener('click', () => startGame(3));
}
