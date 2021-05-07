const setTheme = function (theme) {
  const themed = [...document.querySelectorAll(".themed")];
  themed.forEach((elem) => {
    let shortList = [...elem.classList].splice(0, 2);
    elem.className = shortList[0];
    elem.classList.add(shortList[1]);
    elem.classList.add(theme);
  });
};

export { setTheme };