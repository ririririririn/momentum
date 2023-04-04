//로그인 페이지, 메인 페이지
const loginPage = document.querySelector("#login-page");
const mainPage = document.querySelector("#main-page");
//
const loginForm = document.querySelector("#login-form");
const inputId = document.querySelector(".userid");
const btnLogin = document.querySelector(".btnLogin");

const paintUserName = document.querySelector(".user-name");
const savedUserName = localStorage.getItem("userName");

const btnLogout = document.querySelector(".btnLogout");

if (savedUserName === null) {
  mainPage.classList.toggle("hidden");
  loginForm.addEventListener("submit", login);
} else {
  loginPage.classList.toggle("hidden");
}

function login(event) {
  event.preventDefault();
  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
  const userName = inputId.value;
  inputId.value = "";
  localStorage.setItem("userName", userName);
  paintUserName.innerText = localStorage.getItem("userName");
}

btnLogout.addEventListener("click", logOut);

function logOut() {
  localStorage.removeItem("userName");
  loginPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
}
