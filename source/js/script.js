'use strict';

var butt_login = document.querySelector(".contacts-reg-buttons__login");
var popup = document.querySelector(".login-popup");
var close = popup.querySelector(".login-popup--modal-close");

butt_login.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("login-popup--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("login-popup--show");
});
