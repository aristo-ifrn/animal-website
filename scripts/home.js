const body = document.body,
  slideWrapper = document.getElementById("slider-container"),
  nextButton = document.getElementById("next"),
  prevButton = document.getElementById("prev");

const nextSlide = () => {
  const slides = document.querySelectorAll(".slide");
  slideWrapper.appendChild(slides[0]);
};

const prevSlide = () => {
  const slides = document.querySelectorAll(".slide");
  slideWrapper.prepend(slides[slides.length - 1]);
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

body.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight" || event.key == "ArrowDown") nextSlide();
  if (event.key == "ArrowLeft" || event.key == "ArrowUp") prevSlide();
});

body.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) prevSlide();
  if (event.deltaY > 0) nextSlide();
});

const popupActiveButton = Array.from(
    document.querySelectorAll(".content button")
  ),
  popupWrapper = document.getElementById("popup");
const closePopupElements = [
  popupWrapper.querySelector(".background"),
  popupWrapper.querySelector("button"),
];

popupActiveButton.forEach((element) => {
  element.addEventListener("click", () => {
    popupWrapper.setAttribute("data-state", "opened");
  });
});

closePopupElements.forEach((element) => {
  element.addEventListener("click", () => {
    popupWrapper.setAttribute("data-state", "closed");
  });
});
