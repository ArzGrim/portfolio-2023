// const burger = document.querySelector('.burger');
// var menuHeader = document.querySelector('.menu')
// var menuFooter = document.querySelector('.m-footer')
// var nav = document.querySelector('.nav-container')
// var menuStyles = document.querySelector('.menu-styles')

// burger.addEventListener('click', () => {
//   burger.classList.toggle('active');
//   menuHeader.classList.toggle('is-visible-header');
//   menuFooter.classList.toggle('is-visible-footer');
//   nav.classList.toggle('is-active');
//   menuStyles.classList.toggle('show');
// });

const b = document.querySelector(".burger");
const m = document.querySelector("main");
const g = document.querySelector("body");
const f = document.querySelector("footer");
const a = document.querySelector("aside");
const n = document.querySelector(".menu");
const toggle = (e) => e.classList.toggle("active");
b.addEventListener("click", () => [b, m, g, f, a, n].forEach((e) => toggle(e)));
