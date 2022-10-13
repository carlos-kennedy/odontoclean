const effectsSlides = [
  (slideLeft = {
    duration: 700,
    delay: 400,
    distance: "3rem",
    origin: "left",
    opacity: 0,
  }),
  (slideBottom = {
    duration: 700,
    delay: 400,
    distance: "5rem",
    origin: "bottom",
    opacity: 0,
  }),
  (slideTop = {
    duration: 600,
    delay: 270,
    distance: "5rem",
    origin: "top",
    opacity: 0,
  }),
];

revealAllContents();
function revealAllContents() {
  const allSlidersAndCards = [
    document.querySelector("#professionals"),
    document.querySelector("#customer-reviews"),
    document.querySelector("ul.doubt-list"),
    document.querySelector("#differential, ul.cards"),
    document.querySelector("#treatments, ul.treatments-cards"),
  ];

  const allSections = [
    document.querySelector("#home"),
    document.querySelector("#differential"),
    document.querySelector("#professionals"),
    document.querySelector("#scheduling"),
    document.querySelector("#doubt"),
  ];

  const footer = [document.querySelector("footer")];

  ScrollReveal().reveal(allSections, effectsSlides[0]);
  ScrollReveal().reveal(allSlidersAndCards, effectsSlides[1]);
  ScrollReveal().reveal(footer, effectsSlides[2]);
}
