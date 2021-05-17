function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".Bground");
const modalBtn = document.querySelectorAll(".ModalBtn");
const formData = document.querySelectorAll(".FormData");
const closeBtn = document.getElementsByClassName('Close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeBtn[0].addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}





