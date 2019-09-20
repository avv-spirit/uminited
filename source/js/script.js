'use strict';

var buttLogin = document.querySelector('.contacts-reg-buttons__login');
var popup = document.querySelector('.login-popup');
var entireForm = document.querySelector('.login-popup__hide');
var inputEmail = popup.querySelector('[name=popup-mail]');
//table button
var buttTable = document.querySelector('.smart-targeting__table-button');
var tableClass = document.querySelector('.smart-targeting__table');
var tableSmartDefault = document.querySelector('.smart-targeting__table-description');
var tableExtraClass = document.querySelector('.smart-targeting__extratable-description');

buttLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('login-popup') && entireForm.classList.contains('login-popup__hide')) {
    popup.classList.remove('login-popup');
    popup.classList.add('login-popup--show');
    entireForm.classList.remove('login-popup__hide');
    entireForm.classList.add('login-popup__open');
  } else {
    popup.classList.add('login-popup');
    popup.classList.remove('login-popup--show');
    entireForm.classList.add('login-popup__hide');
    entireForm.classList.remove('login-popup__open');
  }
  inputEmail.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("login-popup--show") && entireForm.classList.contains('login-popup__open')) {
      popup.classList.remove("login-popup--show");
      entireForm.classList.remove('login-popup__open');
      entireForm.classList.add('login-popup__hide');
      popup.classList.add('login-popup');
    }
  }
});

buttTable.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (tableClass.classList.contains('smart-targeting__table-title')) {
    tableSmartDefault.classList.remove('smart-targeting__table-description');
    tableClass.classList.add('smart-targeting__extratable-description');
  }
});
