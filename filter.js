import { renderItems } from "./main";
import mockData from "./mockData.json";

const btn = document.querySelectorAll(".size-btn");

const btnFit = document.querySelectorAll(".style-btn");

const colors = document.querySelectorAll(".color-specter");

const maxPrice = document.querySelector(".max-price");

const priceRange = document.querySelector(".input-range");

const searchInput = document.querySelector(".search-input");

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  // const result = mockData.filter((product) => {
  //   if (product.type == searchInput.value) {
  //     return product;
  //   }
  // });
  // renderItems(result);
  activeFilters["type"] = searchInput.value;
  filter();
});

priceRange.addEventListener("input", () => {
  activeFilters["price"] = priceRange.value;
  // const result = mockData.filter((product) => {
  //   if (product.price <= priceRange.value) {
  //     return product;
  //   }
  // });
  // renderItems(result);
  maxPrice.innerHTML = priceRange.value + "$";

  filter();
});

colors.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilters["color"] = btn.dataset.color;
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
      activeFilters.hasOwnProperty("color") &&
      activeFilters.type != searchInput.value
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

const resetFilter = document.querySelector(".reset-filter");
resetFilter.addEventListener("click", () => {
  renderItems(mockData);
  btnFit.forEach((btn) => {
    btn.classList.remove("active");
  });
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
});
