import { User } from "./classes/user.js";
import { endpoints } from "./API/constant.js";
import { postMovies } from "./API/requests/index.js";
const form = document.querySelector(".signup-form");
const userInput = document.querySelector("#exampleInputEmail1");
const fullNameInput = document.querySelector("#exampleInputPassword1");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const signUpUsername = document.querySelector(".signupusername");
const signUpFullName = document.querySelector(".signupfullname");
const signUpEmail = document.querySelector(".signupemail");
const signUpPassword = document.querySelector(".signuppassword");
const signUpConfirmPassword = document.querySelector(".signupconfirmpassword");
const signUpBtn = document.querySelector(".signupbtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newUser = new User(
    userInput.value,
    fullNameInput.value,
    emailInput.value,
    passwordInput.value
  );

  console.log(newUser);
  console.log(newUser);
  let checkUser = {
    usernameValid: true,
    fullNameValid: true,
    emailValid: true,
    passwordValid: true,
    confirmPasswordValid: true,
  };

  if (userInput.value.trim().length === 0) {
    signUpUsername.classList.remove("d-none");
    signUpUsername.classList.add("d-block");
    checkUser.usernameValid = false;
  } else {
    signUpUsername.classList.remove("d-block");
    signUpUsername.classList.add("d-none");
    checkUser.usernameValid = true;
  }

  if (fullNameInput.value.trim().length === 0) {
    signUpFullName.classList.remove("d-none");
    signUpFullName.classList.add("d-block");
  } else {
    signUpFullName.classList.remove("d-block");
    signUpFullName.classList.add("d-none");
  }

  if (emailInput.value.trim().length === 0) {
    signUpEmail.classList.remove("d-none");
    signUpEmail.classList.add("d-block");
  } else {
    signUpEmail.classList.remove("d-block");
    signUpEmail.classList.add("d-none");
  }

  if (passwordInput.value.trim().length === 0) {
    signUpPassword.classList.remove("d-none");
    signUpPassword.classList.add("d-block");
  } else {
    signUpPassword.classList.remove("d-block");
    signUpPassword.classList.add("d-none");
  }

  if (confirmPasswordInput.value.trim().length === 0) {
    signUpConfirmPassword.classList.remove("d-none");
    signUpConfirmPassword.classList.add("d-block");
  } else {
    signUpConfirmPassword.classList.remove("d-block");
    signUpConfirmPassword.classList.add("d-none");
  }

  if (
    checkUser.usernameValid &&
    checkUser.fullNameValid &&
    checkUser.emailValid &&
    checkUser.passwordValid &&
    checkUser.confirmPasswordValid
  ) {
    console.log(checkUser);
    await postMovies(endpoints.users, newUser);
  } else {
    window.alert("validation failed!");
  }
  resetForm();
});
function resetForm() {
  userInput.value = "";
  fullNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
}
