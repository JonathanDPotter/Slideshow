import "./style.scss";
import {setTheme} from "/src/setTheme.js";
import {slideShow} from "/src/slideShow.js";
const state = {
  speed: 1000,
  type: "",
}


const setup = function () {
  // themes is an array of DOM elements with the theme class
  const themes = [...document.querySelectorAll(".theme")];
  
  themes.forEach((theme) => {
    theme.addEventListener("click", (event) => {
      event.preventDefault();
      setTheme(event.target.classList[1]);
    })
  })
 
  const types = [...document.querySelectorAll(".type")];

  types.forEach((type) => {
    type.addEventListener("click", (event) => {
      event.preventDefault();
      types.forEach(elem => elem.className = "type")
      type.classList.add("underlined");
      state.type = event.target.dataset.type;
    });
  });

  const speeds = [...document.querySelectorAll(".speed")];

  speeds.forEach((speed) => {
    speed.addEventListener("click", (event) => {
      event.preventDefault();
      state.speed = event.target.dataset.speed;
      speeds.forEach((elem) => elem.style.color = "inherit")
      event.target.style.color = "red";
    })
  })

  themes[0].click();
  speeds[0].click();
  types[0].click();
}

setup();
slideShow();
export { state };