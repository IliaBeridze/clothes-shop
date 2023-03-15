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

const colors = document.querySelectorAll(".color-specter");

colors.forEach((e) => {
  e.addEventListener("click", () => {
 
    const result = mockData.filter((product) => {
      // console.log(product.color);
      // console.log(e.classList[1]);
        
      if (e.classList[1]==product.color) {
     return product
      }
    });
    renderItems(result);
  });

  // console.log(e.style);
  // console.log(e.classList[1]);
  // console.log('%cThis text is read');
});


const element = document.getElementById('myDiv');
const style = window.getComputedStyle(element);
const backgroundColor = style.getPropertyValue('background-color')
console.log(backgroundColor)