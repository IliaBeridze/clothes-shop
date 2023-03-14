import { mockData, renderItems } from "./main";

const btn = document.querySelectorAll(".size-btn");
const btnFit = document.querySelectorAll(".style-btn");

const activeFilters = {};

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilters["size"] = btn.textContent;
    filter();
  });
});

btnFit.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilters["fit"] = btn.textContent;
    filter();
  });
});

function filter() {
  const result = mockData.filter((product) => {
    console.log(activeFilters.size);
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

    return true;
  });

  renderItems(result);
}
