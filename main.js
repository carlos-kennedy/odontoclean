const navBtn = document.querySelector("button, .hamburguer");
const navUl = document.querySelector("ul, .active");
const body = document.querySelector("body");
const btnShowMenu = () => {
  navUl.classList.toggle("active");
  body.style.overflow = "hidden";
  navBtn.classList.toggle("is-active");
};

navBtn.addEventListener("click", btnShowMenu);
