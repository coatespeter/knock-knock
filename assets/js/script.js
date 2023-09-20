
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-btn");
let closeButton = document.querySelector(".close-button");
let resetButton = document.getElementById("reset-button");

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

