import { renderItems } from "./main";
import mockData from "./mockData.json";
const btn = document.querySelectorAll(".size-btn");
const btnFit = document.querySelectorAll(".style-btn");
const colors = document.querySelectorAll(".color-specter");

const maxPrice = document.querySelector(".max-price");
const priceRange = document.querySelector(".input-range");

priceRange.addEventListener("input", () => {
  activeFilters["price"] = priceRange.value;
  // const result = mockData.filter((product) => {
  //   if (product.price <= priceRange.value) {
  //     return product;
  //   }
  // });

  maxPrice.innerHTML = priceRange.value + "$";

  // renderItems(result);
  filter();
});

colors.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilters["color"] = btn.dataset.color;
    // const result = mockData.filter((product) => {
    //   if (btn.dataset.color == product.color) {
    //     return product;
    //   }
    // });
    // renderItems(result);
    filter();
  });
});

const activeFilters = {};

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".size-btn.active")?.classList.remove("active");

    btn.classList.add("active");

    activeFilters["size"] = btn.textContent;
    filter();
  });
});

btnFit.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".style-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    activeFilters["fit"] = btn.textContent;
    filter();
  });
});

function filter() {
  const result = mockData.filter((product) => {
    if (
      activeFilters.hasOwnProperty("size") &&
      activeFilters.size != product.size
    ) {
      return false;
    }
    if (
      activeFilters.hasOwnProperty("fit") &&
      activeFilters.fit != product.fit
    ) {
      return false;
    }
    if (
      activeFilters.hasOwnProperty("color") &&
      activeFilters.color != product.color
    ) {
      return false;
    }
    if (
      activeFilters.hasOwnProperty("price") &&
      activeFilters.price < product.price
    ) {
      return false;
    }

    return true;
  });

  renderItems(result);
}

// const element = document.getElementById("myDiv");
// const style = window.getComputedStyle(element);
// const backgroundColor = style.getPropertyValue("background-color");
// console.log(backgroundColor);
