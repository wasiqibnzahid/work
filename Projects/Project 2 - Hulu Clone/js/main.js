modal = document.querySelector(".modal");
login = document.querySelector(".btn-login");
modalCloser = document.querySelector(".modal-close");

function modalOpen() {
  modal.style.display = "block";
}

function modalClose() {
  modal.style.display = "none";
}

function modalOutsideClick(e) {
  if (e.target == modal) {
    modalClose();
  }
}

login.addEventListener("click", modalOpen);
modalCloser.addEventListener("click", modalClose);

modal.addEventListener("click", modalOutsideClick);
