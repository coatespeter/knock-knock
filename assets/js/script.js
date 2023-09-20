
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-btn");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-btn");
const musicButton = document.getElementById('music-btn');

//music controls

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

