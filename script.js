"use strict";
//create container
function renderSnowContainer() {
  const snowContainer = document.createElement("div");
  snowContainer.id = "snow-container";
  //placing container in chosen container
  const containerWindow = document.querySelector(".container-window");
  containerWindow.appendChild(snowContainer);

  return snowContainer;
}
const flakeImg = ["images/flake.png", "images/flake2.png", "images/flake3.png"];
function renderFlakes(snowContainer) {
  const flakeContainer = document.createElement("div");
  flakeContainer.classList.add("flake-container");

  flakeContainer.style.left = `${Math.random() * 85}%`;
  flakeContainer.style.transform = `scale(${Math.random()})`;

  const img = document.createElement("img");
  img.src = flakeImg[Math.floor(Math.random() * flakeImg.length)];
  img.style.height = "0.7vh";

  flakeContainer.appendChild(img);

  snowContainer.appendChild(flakeContainer);

  setTimeout(renderFlakes, 1000, snowContainer);
}

const snowContainer = renderSnowContainer();
renderFlakes(snowContainer);
