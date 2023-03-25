let newColors = () => {
  return `rgb(
    ${Math.floor(Math.random() * 250)},
    ${Math.floor(Math.random() * 250)},
    ${Math.floor(Math.random() * 250)})`;
};

let handlePalette = () => {
  console.log("woof woof I'm dog");
  let root = document.querySelector(":root");
  root.setAttribute(
    "style",
    `
  --pri-500: ${newColors()};
  --sec-500: ${newColors()};
  `
  );
};

window.onload = () => {
  console.log("woof woof I'm dog");
  let title = document.querySelector(".title");
  title.addEventListener("click", handlePalette);

  let kids = document.querySelectorAll(".bg>*");
  kids.forEach((e, i) => {
    if (i == 0) return;
    e.setAttribute("style", `transform: scale(1);`);
  });
};
