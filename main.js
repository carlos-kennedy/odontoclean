const html = document.querySelector("html");
const navUl = document.querySelector("ul, .active");
const logo = document.querySelector("svg, .active");
const navBtn = document.querySelector("button, .hamburguer");
const showLi = document.querySelector(".show-more-list");
const doubtList = document.querySelector(".doubt-list");
const doubtItems = doubtList.getElementsByTagName("li");
const divShowMore = document.querySelector(".show-more");
const btnShowList = document.querySelector(".btn-show-more");

// const btnShowTextsInDoubt = document.querySelector(".btn-show-text");

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

// Show items
for (var i = 0; i < doubtItems.length; i++) {
  doubtItems[i].addEventListener("click", function () {
    document.querySelector(".list-active")
      ? document.querySelector(".list-active").classList.remove("list-active")
      : "";
    this.classList.add("list-active");
  });
}

navBtn.addEventListener("click", btnShowMenu);
btnShowList.addEventListener("click", showItems);
