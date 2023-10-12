const createParallaxTitlEffect = ({ element, effect }) => {
  const container = element.querySelector(".cardWrapper");
  const size = [container.offsetWidth, container.offsetHeight];
  const [width, height] = size;

  init({ element, container, effect, width, height });
};

const handleMouseMove = ({ event, container, effect, width, height }) => {
  const { offsetX, offsetY } = event;
  console.log(offsetX);
  let X;
  let Y;

  if (effect == "reverse") {
    X = (offsetX - width / 2) / 3 / 3;
    Y = -(offsetY - height / 2) / 3 / 3;
  } else if (effect == "normal") {
    X = -(offsetX - width / 2) / 3 / 3;
    Y = (offsetY - height / 2) / 3 / 3;
  }

  container.style.setProperty("--rY", X.toFixed(2));
  container.style.setProperty("--rX", Y.toFixed(2));

  container.style.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
  container.style.setProperty("--bX", 80 - (Y / 4).toFixed(2) + "%");
};

const handleMouseEnter = ({ container }) => {
  container.classList.add("cardWrapperActivated");
};

const handleMouseLeave = ({ container }) => {
  container.classList.remove("cardWrapperActivated");
  container.style.setProperty("--rY", 0);
  container.style.setProperty("--rX", 0);
  container.style.setProperty("--bY", "80%");
  container.style.setProperty("--bX", "50%");
};

const init = ({ element, container, effect, width, height }) => {
  element.addEventListener("mousemove", (event) => {
    handleMouseMove({ event, container, effect, width, height });
  });
  element.addEventListener("mouseenter", () => {
    handleMouseEnter({ container });
  });
  element.addEventListener("mouseleave", () => {
    handleMouseLeave({ container });
  });
};

createParallaxTitlEffect({
  effect: "normal",
  element: document.querySelector(".cardOne"),
});

createParallaxTitlEffect({
  effect: "reverse",
  element: document.querySelector(".cardTwo"),
});

createParallaxTitlEffect({
  effect: "reverse",
  element: document.querySelector(".cardThree"),
});
