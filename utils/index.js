import "@babel/polyfill";
import { login, logout } from "./login";
//import { showAlert } from "./alerts";

const loginForm = document.getElementById("form-login");
const logOutBtn = document.querySelector("navbar-logout");

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);
