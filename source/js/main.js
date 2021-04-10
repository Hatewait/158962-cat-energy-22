'use strict'

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.nav-toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  navMain.classList.toggle('main-nav--open');
  // navToggle.classList.toggle('nav-toggle--close');
  // navToggle.classList.toggle('nav-toggle--open');
})
