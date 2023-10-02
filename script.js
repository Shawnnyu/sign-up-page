const submitButton = document.querySelector(".submit-button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const invalidFields = document.getElementsByClassName("invalid");

submitButton.addEventListener("click", confirmPwd);

function confirmPwd() {
  let pwdVal = checkPwd(),
    phoneVal = checkPhone(),
    emailVal = checkEmail();
  if (pwdVal && phoneVal && emailVal) {
    location.replace("index.html");
  } else {
    return false;
  }
}

function checkPwd() {
  if (password.value != confirmPassword.value) {
    invalidFields[2].textContent = "*Passwords do NOT match";
    return false;
  }
  confirmPassword.setCustomValidity("");
  invalidFields[2].textContent = "";
  return true;
}

function checkPhone() {
  if (phone.value.length < 7) {
    invalidFields[0].textContent = "*Invalid phone number";
    return false;
  }
  phone.setCustomValidity("");
  invalidFields[0].textContent = "";
  return true;
}

function checkEmail() {
  if (!email.value.includes("@") || !email.value.endsWith(".com")) {
    invalidFields[1].textContent = "*Invalid email address";
    return false;
  }
  email.setCustomValidity("");
  invalidFields[1].textContent = "";
  return true;
}
