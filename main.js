const html = document.querySelector("html");
const navUl = document.querySelector("ul, .active");
const logo = document.querySelector("svg, .active");
const navBtn = document.querySelector("button, .hamburguer");
const showLi = document.querySelector(".show-more-list");

const btnShowList = document.querySelector(".btn-show-more");

const btnShowMenu = () => {
  navUl.classList.toggle("active");
  navBtn.classList.toggle("is-active");
  logo.classList.toggle("active");
  if (html.style.overflow == "hidden") {
    html.style.overflow = "auto";
  } else {
    html.style.overflow = "hidden";
  }
};

const showItems = () => {
  showLi.classList.toggle("active");
};

navBtn.addEventListener("click", btnShowMenu);
btnShowList.addEventListener("click", showItems);
