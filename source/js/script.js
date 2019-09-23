'use strict';

var buttLogin = document.querySelector('.contacts-reg-buttons__login');
var popup = document.querySelector('.login-popup');
var entireForm = document.querySelector('.login-popup__hide');
var inputEmail = popup.querySelector('[name=popup-mail]');
var buttClose = popup.querySelector('.login-popup__close');
//table button
/*var buttTable = document.querySelector('.smart-targeting__table-button');
var smartTableWrapper = document.querySelector('.smart-targeting__wrapper-table');
var smartTable = document.querySelector('.smart-targeting__table');*/

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

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('login-popup--show') && entireForm.classList.contains('login-popup__open')) {
      popup.classList.remove('login-popup--show');
      entireForm.classList.remove('login-popup__open');
      entireForm.classList.add('login-popup__hide');
      popup.classList.add('login-popup');
    }
  }
});

buttClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('login-popup--show');
  popup.classList.add('login-popup');
  entireForm.classList.add('login-popup__hide');
});

/*buttTable.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (smartTableWrapper.classList.contains('smart-targeting__table')) {
    smartTable.classList.remove('smart-targeting__extratable-description');
    smartTable.classList.add('smart-targeting__extratable-description--open');
  } else {
    smartTable.classList.remove('smart-targeting__extratable-description--open');
    smartTable.classList.add('smart-targeting__extratable-description');
  }
});*/
