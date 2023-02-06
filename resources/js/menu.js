const burger = document.querySelector('.burger');
var menuHeader = document.querySelector('.menu')
var menuFooter = document.querySelector('.m-footer')
var nav = document.querySelector('.nav-container')
var menuStyles = document.querySelector('.menu-styles')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuHeader.classList.toggle('is-visible-header');
  menuFooter.classList.toggle('is-visible-footer');
  nav.classList.toggle('is-active');
  menuStyles.classList.toggle('show');
});

