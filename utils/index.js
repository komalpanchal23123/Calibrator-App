import "@babel/polyfill";
import { login, logout } from "./login";
import { showAlert } from "./alerts";

const loginForm = document.getElementById("form-body");
const logOutBtn = document.querySelector("navbar-logout");

import axios from "axios";
import { showAlert } from "../utils/alert";

export const login = async (email, password) => {
  //console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/v1/user/login",
      data: {
        email,
        password,
      },
    });
    //console.log(res);

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    // showAlert("error", err.response.data.message);
    // alert("ERRORORRR");
    console.log(err.message.data);
  }
};

if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);
