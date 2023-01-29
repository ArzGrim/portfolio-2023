const burger = document.querySelector('.burger');
var menu = document.querySelector('.menu')
var menuStyles = document.querySelector('.menu-styles')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('is-visible');
  menuStyles.classList.toggle('show');
});

