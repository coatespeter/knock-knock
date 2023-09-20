
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-btn");

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

