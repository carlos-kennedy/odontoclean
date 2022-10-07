const navBtn = document.querySelector("button, .hamburguer");
const btnShowMenu = () => {
  navBtn.classList.toggle("is-active");
};

navBtn.addEventListener("click", btnShowMenu);
