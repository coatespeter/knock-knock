
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
/**
 * Reset button
 */
resetButton.addEventListener("click", () => {
  location.reload();
});