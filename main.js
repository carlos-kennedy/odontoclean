const navBtn = document.querySelector("button, .hamburguer");
const navUl = document.querySelector("ul, .active");
const logo = document.querySelector("svg, .active");
const btnShowMenu = () => {
  navUl.classList.toggle("active");
  navBtn.classList.toggle("is-active");
  logo.classList.toggle("active");
};

navBtn.addEventListener("click", btnShowMenu);
