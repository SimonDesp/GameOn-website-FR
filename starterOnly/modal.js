function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeSpan = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event with (X)
closeSpan.forEach((span) => span.addEventListener("click", closeModal));

// faire avec echap et clic en dehors de la zone

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate form
const form = document.querySelector(form);
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const number = document.getElementById("quantity")

const checkName = function (name) {
  const nameRegex = /^[a-zA-Z]{2,..}$/;
}
