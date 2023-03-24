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

window.addEventListener("click", function(event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
});


// validate form
const form = document.querySelector("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const tournoi = document.getElementById("tournoi");
const checkbox1 = document.querySelector("#checkbox1");
const message = document.getElementById("message");


const checkName = function (name) {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  const isValid = nameRegex.test(name.value + "")
    ? formValidation(name)
    : formValidationError(name);
  if (isValid) return true;
  else return false;
};

function checkEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,}[a-zA-Z0-9])?)*$/;
  const isValid = emailRegex.test(email.value + "");
  const result = (isValid) ? formValidation(email) : formValidationError(email);
  if (result) {
    return true;
  } else {
    return false;
  }
}

const checkDate = function (dateInput) {
  const isValid = !(dateInput.value === null || dateInput.value === "")
    ? formValidation(birthdate)
    : formValidationError(birthdate);
  return isValid;
};

const checkNumber = function (number) {
  const nameRegex = /^-?\d+$/;
  const isValid = number.value !== "" && nameRegex.test(+number.value)
      ? formValidation(quantity)
      : formValidationError(quantity);
  return isValid;
};

const checkTournoi = function (element) {
  const isValid = element.querySelector('input[type="radio"]:checked')
    ? formValidation(element)
    : formValidationError(element);
  return isValid;
};

const checkCheckbox = function (element) {
  const isValid = document.querySelector("#checkbox1:checked")
    ? formValidation(element)
    : formValidationError(element);
  return isValid;
};

const createDivError = function (element, text) {
  const divError = document.createElement("div");
  divError.style.color = "red";
  divError.style.display = "inline-block";
  divError.style.margin = "0 0 6px 12px";
  divError.style.fontSize = ".6em";
  divError.classList.add(`error`);
  const divErrorText = document.createTextNode(text);
  divError.appendChild(divErrorText);
  element.appendChild(divError);
};

const formValidation = function (element) {
  const divErrorElement = element.parentNode.querySelector(`.error`);

  if (element.id === "tournoi") {
    divErrorElement ? (divErrorElement.style.display = "none") : null;
    element.style.border = "none";
  } else if (element.id === "checkbox1") {
    const elementSibling = document.querySelector(`#${element.id}+label`);
    divErrorElement ? (divErrorElement.style.display = "none") : null;
    elementSibling.style.border = "none";
  } else {
    divErrorElement ? (divErrorElement.style.display = "none") : null;
  }

  return true;
};

const formValidationError = function (element) {
  const elementID = element.id;
  const parentElement = element.parentNode;
  const elementSibling = document.querySelector(`#${elementID}+label`);
  const existingError = parentElement.querySelector('.error');

  element.style.border = "1px solid red";

  switch (elementID) {
    case "first":
      if (existingError) {
        existingError.textContent = `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`;
      } else {
        createDivError(parentElement, `Veuillez entrer 2 caractères ou plus pour le champ du prénom.`);
      }
      break;
    case "last":
      if (existingError) {
        existingError.textContent = `Veuillez entrer 2 caractères ou plus pour le champ du nom.`;
      } else {
        createDivError(parentElement, `Veuillez entrer 2 caractères ou plus pour le champ du nom.`);
      }
      break;
    case "email":
      if (existingError) {
        existingError.textContent = "L'email n'est pas valide";
      } else {
        createDivError(parentElement, "L'email n'est pas valide");
      }
      break;
    case "birthdate":
      if (existingError) {
        existingError.textContent = "Vous devez entrer votre date de naissance.";
      } else {
        createDivError(parentElement, "Vous devez entrer votre date de naissance.");
      }
      break;
    case "quantity":
      if (existingError) {
        existingError.textContent = "Saisissez une valeur numérique.";
      } else {
        createDivError(parentElement, "Saisissez une valeur numérique.");
      }
      break;
    case "tournoi":
      if (existingError) {
        existingError.textContent = "Vous devez choisir une option.";
      } else {
        createDivError(element, "Vous devez choisir une option.");
      }
      break;
    case "checkbox1":
      if (existingError) {
        existingError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
      } else {
        createDivError(parentElement, "Vous devez vérifier que vous acceptez les termes et conditions.");
        elementSibling.style.border = "1px solid red";
      }
      break;
    default:
      return false;
  }

  return false;
};

const verifyInputs = function () {
  checkTournoi(tournoi);
  checkCheckbox(checkbox1);
  checkNumber(quantity);
  checkDate(birthdate);
  checkEmail(email);
  checkName(lastName);
  checkName(firstName);

  if (
    checkTournoi(tournoi) &&
    checkCheckbox(checkbox1) &&
    checkNumber(quantity) &&
    checkDate(birthdate) &&
    checkEmail(email) &&
    checkName(lastName) &&
    checkName(firstName)
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};


const confirmationModal = document.querySelector("#confirmation-modal");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (verifyInputs()) {
    confirmationModal.style.display = "block";
  }
});

closeButton.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});
