import { robots } from "/src/images.js";
import { state } from "/src/index.js";
const image = document.getElementById("image");
const attribution = document.getElementById("attribution");
const links = attribution.getElementsByTagName("a");

image.src = robots[0].src;
image.alt = robots[0].alt;
links[0].href = robots[0].href1;
links[0].title = robots[0].title1;
links[0].textContent = robots[0].title1;
links[1].href = robots[0].href2;
links[1].title = robots[0].title2;
links[1].textContent = robots[0].title2;

const slideShow = function () {};

export { slideShow };
