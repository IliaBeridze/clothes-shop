import mockData from "./mockData.json";
import "./style.scss";
import "./filter";
import "./header";
import Card from "./card";

const cards = document.querySelector(".cards");

export function renderItems(data) {
  let result = "";
  data.forEach((item) => {
    // console.log(item.img);
    result += Card(item);
  });
  cards.innerHTML = result;
}
renderItems(mockData);

const minPriceElement = document.querySelector(".min-price");

const maxPriceElement = document.querySelector(".max-price");

let minPrice = 0;

let maxPrice = 0;

const mapList = mockData.map((item) => {
  return item.price;
});
minPrice = Math.min(...mapList);

maxPrice = Math.max(...mapList);

minPriceElement.textContent = minPrice + "$";

maxPriceElement.textContent = maxPrice + "$";

var inputRangeMinValue = (document.querySelector(".input-range").min =
  minPrice);
var inputRangeMaxValue = (document.querySelector(".input-range").max =
  maxPrice);

const mapBag = mockData.map((item) => {
  return item.imgAdd;
});

mapBag.forEach((product) => {
  console.log(product.imgAdd);
  product.imgAdd.addEventListener("click", () => {
    console.log("bla");
  });
});

const countItems = document.querySelector(".add-to-bag");
let counter = 0;

cards.addEventListener("click", renderCount);

function renderCount() {
  counter++;
  countItems.innerHTML = `(${counter})`;
}
