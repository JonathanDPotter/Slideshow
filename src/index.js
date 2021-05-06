import "./style.scss";

const setTheme = function (theme) {
  const themed = [...document.querySelectorAll(".themed")];
  themed.forEach((elem) => {
    let shortList = [...elem.classList].splice(0, 2);
    console.log(shortList);
    elem.className = shortList[0];
    elem.classList.add(shortList[1]);
    elem.classList.add(theme);
  });
};

const setup = function () {
  // themes is an array of DOM elements with the theme class
  const themes = [...document.querySelectorAll(".theme")];
  
  themes.forEach((theme) => {
    theme.addEventListener("click", (event) => {
      console.log(event.target)
      event.preventDefault();
      setTheme(event.target.classList[1]);
    })
  })
};

setup();
