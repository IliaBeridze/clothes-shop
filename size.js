import { mockData, renderItems } from "./main";

import Card from "./card";

const cards = document.querySelector(".cards");

const btn = document.querySelectorAll(".size-btn");

btn.forEach((e) => {
  e.addEventListener("click", () => {
    const result = mockData.filter((product) => {
      return e.textContent == product.size;
    });
    renderItems(result);
  });
});


