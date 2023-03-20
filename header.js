import mockData from "./mockData.json";
// import Card from "./card";
const countItems = document.querySelector(".add-to-bag");
let counter = 0;

const cards = document.querySelector(".cards");
cards.addEventListener('click',renderCount);

function renderCount() {
  counter++
  countItems.innerHTML =`(${counter})` 
}

mockData.forEach((product) => {
  console.log(product.imgAdd);
});
