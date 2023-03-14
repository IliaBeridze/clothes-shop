import { mockData, renderItems } from "./main";

const btn = document.querySelectorAll(".size-btn");

btn.forEach((e) => {
  e.addEventListener("click", () => {
    const result = mockData.filter((product) => {
      return e.textContent == product.size;
    });
    renderItems(result);
  });
});
const btnFit = document.querySelectorAll(".style-btn");

btnFit.forEach((btn) => {
  btn.addEventListener("click", () => {
    const result = mockData.filter((product) => {
      return btn.textContent == product.fit;
    });
    renderItems(result);
  });
});
