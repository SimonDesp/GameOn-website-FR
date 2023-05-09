function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// gestion du formulaire
const modalForm = document.getElementById("modal-form");
const modalFormBtn = document.querySelectorAll(".modal-btn");
const formData = modalForm.querySelectorAll(".formData");
const closeFormSpan = modalForm.querySelector(".close");
const homeBtn = document.getElementById("homeBtn")

// launch modal event
modalFormBtn.forEach((item) => {
  item.addEventListener('click', launchModal)
});
homeBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalForm.style.display = "block";
}

// close modal event with (X)
closeFormSpan.addEventListener("click", closeModalForm);

// close modal form
function closeModalForm() {
  modalForm.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == modalForm) {
    modalForm.style.display = "none";
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

const btnValid = document.getElementById('btnValid');

btnValid.addEventListener("click", function (event) {
  event.preventDefault();
  validateForm();
});

// validation du formulaire
function validateForm() {

  // gestion des messages d'erreur
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
    closeModalForm();
    //ouvrir une modale de confirmation
    launchModalConfirmation();
    // valeur du formulaire
    console.log()
  }
}

function FirstNameValidate() {
  const firstName = firstNameField.value.trim();
  if (firstName.length >= 2) {
    document.getElementById('first-error').innerHTML = '';
    return true;
  } else {
    document.getElementById('first-error').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    return false;
  }
}

function LastNameValidate() {
  const lastName = lastNameField.value.trim();
  if (lastName.length >= 2) {
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

// gestion de la modale de confirmation
const modalconfirmation = document.querySelector(".modal");
const closeSpanConfirmation = document.querySelector(".close-confirmation");
const closeBtnConfirmation = document.querySelector(".btn-close");

// launch modal form
function launchModalConfirmation() {
  modalconfirmation.style.display = "block";
}
// close modal form
function closeModalConfirmation() {
  modalconfirmation.style.display = "none";
}
// close modal event with (X) and Btn
closeSpanConfirmation.addEventListener("click", closeModalConfirmation);
closeBtnConfirmation.addEventListener("click", closeModalConfirmation);

window.addEventListener("click", function (event) {
  if (event.target == modalconfirmation) {
    modalconfirmation.style.display = "none";
  }
});
