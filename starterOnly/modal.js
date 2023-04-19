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

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
});

// Récupérer les champs du formulaire
const firstNameField = document.getElementById('first');
const lastNameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthdateField = document.getElementById('birthdate');
const quantityField = document.getElementById('quantity');
const tournoiLocationField = document.getElementsByName("location");
const ConditionsField = document.getElementById('checkbox1');

const btnValid = document.getElementById('btnValid')

btnValid.addEventListener("click", function (event) {
  event.preventDefault()
  validateForm()
});

// ALGO

function validateForm() {

  // afficher les messages d'erreur
  const isValidFirstName = FirstNameValidate();
  const isValidLastName = LastNameValidate();
  const isValidEmail = emailValidate();
  const isValidBirthdate = birthdateValidate();
  const isValidQuantity = quantityValidate();
  const isValidTournoiLocation = tournoiLocationValidate();
  const isValidConditions = conditionsValidate();

  if (isValidFirstName && isValidLastName && isValidEmail && isValidBirthdate && isValidQuantity && isValidTournoiLocation && isValidConditions) {
    // effacer les champs
    firstNameField.value = '';
    lastNameField.value = '';
    emailField.value = '';
    birthdateField.value = '';
    quantityField.value = '';
    tournoiLocationField.value = '';
    ConditionsField.checked = false;
    //fermer le formulaire
    closeModal()
    //ouvrir une modale de confirmation
   launchModalConfirmation()
  }
}

function FirstNameValidate() {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const firstName = firstNameField.value.trim();
  if (nameRegex.test(firstName)) {
    document.getElementById('first-error').innerHTML = '';
    return true;
  } else {
    document.getElementById('first-error').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prenom.';
    return false;
  }
}

function LastNameValidate() {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const lastName = lastNameField.value.trim();
  if (nameRegex.test(lastName)) {
    document.getElementById('last-error').innerHTML = '';
    return true
  } else {
    document.getElementById('last-error').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    return false
  }
}

function emailValidate() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const email = emailField.value.trim();
  if (emailRegex.test(email)) {
    document.getElementById('email-error').innerHTML = '';
    return true
  } else {
    document.getElementById('email-error').innerHTML = "L'email n'est pas valide";
    return false
  }
}

function birthdateValidate() {
  const dateToday = Date.now();
  const birthDateMinimum = dateToday - Date.parse(birthdateField.value);
  if (birthdateField.value !== "" && birthDateMinimum >= 410240376000) {
    document.getElementById('birthdate-error').innerHTML = '';
    return true
  } else {
    document.getElementById('birthdate-error').innerHTML = 'Vous devez entrer votre date de naissance et avoir au moins 13 ans.';
    return false
  }
}

function quantityValidate() {
  const quantityRegex = /^-?\d+$/;
  const quantity = quantityField.value
  if (quantityRegex.test(quantity)) {
    document.getElementById('quantity-error').innerHTML = '';
    return true
  } else {
    document.getElementById('quantity-error').innerHTML = 'Saisissez une valeur numérique.';
    return false
  }
}

function tournoiLocationValidate() {
  let locationSelected = false;
  for (let i = 0; i < tournoiLocationField.length; i++) {
    if (tournoiLocationField[i].checked) {
      locationSelected = true;
      break;
    }
  }
  if (locationSelected) {
    document.getElementById("location-error").innerHTML = '';
    return true
  } else {
    document.getElementById("location-error").innerHTML = 'Vous devez choisir une option.';
    return false
  }
}

function conditionsValidate() {
  if (ConditionsField.checked) {
    document.getElementById('checkbox1-error').innerHTML = '';
    return true
  } else {
    document.getElementById('checkbox1-error').innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    return false
  }
}


const modalconfirmation = document.querySelector(".modal");

// launch modal form
function launchModalConfirmation() {
  modalconfirmation.style.display = "block";
}


const closeSpanConfirmation = document.querySelectorAll(".close-confirmation");
const closeBtnConfirmation = document.querySelectorAll(".btn-close");
// close modal form
function closeModalConfirmation() {
  modalconfirmation.style.display = "none";
}

// close modal event with (X) and Btn
closeSpanConfirmation.forEach((span) => span.addEventListener("click", closeModalConfirmation));

closeBtnConfirmation.forEach((input) => input.addEventListener("click", closeModalConfirmation));

window.addEventListener("click", function (event) {
  if (event.target == modalconfirmation) {
    modalconfirmation.style.display = "none";
  }
});
