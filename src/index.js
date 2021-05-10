import "./style.scss";
import { setTheme } from "/src/setTheme.js";
import { slideShow } from "/src/slideShow.js";

const state = {
  speed: 0,
  type: "robots",
};

let interval = "";
let index = 0;

const counter = function (upDown = "up") {

  if (upDown === "up") {
    index++;
  } else if (upDown === "down") {
    index--;
  }

  if (index > 4) {
    index = 0;
  }
  if (index < 0) {
    index = 4;
  }
  slideShow(index);
};

const setup = function () {
  const themeIcon = document.getElementById("theme-icon");
  themeIcon.addEventListener("click", () => {
    themeIcon.classList.toggle("open");
  });
  // themes is an array of DOM elements with the theme class
  const themes = [...document.querySelectorAll(".theme")];

  themes.forEach((theme) => {
    theme.addEventListener("click", (event) => {
      event.preventDefault();
      setTheme(event.target.classList[1]);
    });
  });

  const types = [...document.querySelectorAll(".type")];

  types.forEach((type) => {
    type.addEventListener("click", (event) => {
      event.preventDefault();
      types.forEach((elem) => (elem.className = "type"));
      type.classList.add("underlined");
      state.type = event.target.dataset.type;
    });
  });

  const speeds = [...document.querySelectorAll(".speed")];

  speeds.forEach((speed) => {
    speed.addEventListener("click", (event) => {
      event.preventDefault();
      state.speed = event.target.dataset.speed;
      speeds.forEach((elem) => (elem.style.color = "inherit"));
      event.target.style.color = "red";
      clearInterval(interval);
      interval = setInterval(counter, state.speed);
    });
  });

  const prev = document.getElementById("previous");
  console.log(prev);
  prev.addEventListener("click", (event) => {
    event.target.preventDefault;
    console.log("down")
    counter("down")
  });

  const next = document.getElementById("next");
  next.addEventListener("click", (event) => {
    event.target.preventDefault;
    console.log("up")
    counter("up")
  });

  themes[0].click();
  speeds[0].click();
  types[0].click();
};

setup();
slideShow(0);
export { state };
