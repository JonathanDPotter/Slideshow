import { robots, animals, rockets, buildings, vehicles } from "/src/images.js";
import { state } from "/src/index.js";

const image = document.getElementById("image");
const attribution = document.getElementById("attribution");
const links = attribution.getElementsByTagName("a")[0];

let type = "";

const setType = function () {
    if (state.type === "robots") {
      type = robots;
    } else if (state.type === "animals") {
      type = animals;
    } else if (state.type === "rockets") {
      type = rockets;
    } else if (state.type === "buildings") {
      type = buildings;
    } else if (state.type === "vehicles") {
      type = vehicles;
    }
}

const slideShow = function (index) {
  
  setType();
  
  const imgSource = type[index].src;
  const imgAlt = type[index].alt;
  const linkHref = type[index].href;
  const linkTitle = type[index].title;

  image.src = imgSource;
  image.alt = imgAlt;
  links.href = linkHref;
  links.title = linkTitle;
  links.textContent = linkTitle;
}

export { slideShow };
