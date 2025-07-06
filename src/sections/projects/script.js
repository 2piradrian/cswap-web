const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let scrollAmount = 0;
const scrollPerClick = 300;

next.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollPerClick, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollPerClick, behavior: "smooth" });
});