const html = document.querySelector("html");
const navUl = document.querySelector("ul, .active");
const logo = document.querySelector("svg, .active");
const navBtn = document.querySelector("button, .hamburguer");
const showLi = document.querySelector(".show-more-list");
const doubtList = document.querySelector(".doubt-list");
const doubtItems = doubtList.getElementsByTagName("li");
const divShowMore = document.querySelector(".show-more");
const btnShowList = document.querySelector(".btn-show-more");

const btnShowMenu = () => {
  navUl.classList.toggle("active");
  navBtn.classList.toggle("is-active");
  logo.classList.toggle("active");

  if (html.style.overflow === "hidden") {
    html.style.overflow = "auto";
    navBtn.setAttribute("aria-expanded", "false");
  } else {
    html.style.overflow = "hidden";
    navBtn.setAttribute("aria-expanded", "true");
  }

  const closeMenu = document
    .querySelector(".menu, li")
    .addEventListener("click", function () {
      navUl.classList.remove("active");
      navBtn.classList.remove("is-active");
      logo.classList.remove("active");

      if (html.style.overflow === "hidden") {
        html.style.overflow = "auto";
        navBtn.setAttribute("aria-expanded", "false");
      }
    });
  return closeMenu;
};

const showRestOfItems = () => {
  showLi.classList.toggle("active");

  if (divShowMore.style.position == "initial") {
    divShowMore.style.position = "relative";
  } else {
    divShowMore.style.position = "initial";
  }

  if (btnShowList.innerText == "Mostrar mais") {
    btnShowList.innerHTML = `<i class="fa-solid fa-angle-up"></i>
                         Mostrar menos`;
  } else {
    btnShowList.innerHTML = `<i class="fa-solid fa-angle-down"></i>
                         Mostrar mais`;
  }
};

// A loop to find and select one of each li that has the .list-active class
for (const item of doubtItems) {
  item.addEventListener("click", () => {
    item.classList.toggle("list-active");
  });
}

navBtn.addEventListener("click", btnShowMenu);
btnShowList.addEventListener("click", showRestOfItems);
