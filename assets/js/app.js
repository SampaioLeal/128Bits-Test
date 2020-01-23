let name = document.getElementById("nameInput");
let cpf = document.getElementById("cpfInput");
let email = document.getElementById("emailInput");
let telephone = document.getElementById("telInput");

let error = document.createElement("p");
error.className = "error-msg";

let submit = document.getElementById("submit");

// Initial state
name.status = false;
cpf.status = false;
email.status = false;
telephone.status = false;

function setError(el, message) {
  if (el.status === false) {
    error.innerHTML = message;
    el.parentElement.appendChild(error);
  } else {
    if (el.parentElement.children.length === 3)
      el.parentElement.removeChild(error);
  }
}

function check() {
  if (name.status && cpf.status && email.status && telephone.status) {
    submit.removeAttribute("disabled");
  }
}

function send() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("cpf", cpf.value);
  localStorage.setItem("telephone", telephone.value);
  console.log(name.value, cpf.value, email.value, telephone.value);
}

function validateName() {
  let words = name.value.split(" ");
  if (words.length >= 2) {
    name.status = true;
  } else {
    name.status = false;
  }

  check();
  setError(name, "O nome deve conter ao menos 2 palavras");
}

function validateEmail() {
  let value = email.value;
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(value)) {
    email.status = true;
  } else {
    email.status = false;
  }

  check();
  setError(email, "E-mail inválido");
}

function validateCpf() {
  let value = cpf.value;
  let allNum = /^\d+$/.test(value);
  if (value.length === 11 && allNum) {
    cpf.status = true;
  } else {
    cpf.status = false;
  }

  check();
  setError(cpf, "CPF inválido");
}

function validateTel() {
  let value = telephone.value;
  let allNum = /^\d+$/.test(value);
  if (value.length === 11 && allNum) {
    telephone.status = true;
  } else {
    telephone.status = false;
  }

  check();
  setError(telephone, "Número de telefone inválido");
}
