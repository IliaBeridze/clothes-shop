import mockData from "./mockData.json";
import "./style.scss";
import "./filter";
import Card from "./card";

const cards = document.querySelector(".cards");

export function renderItems(data) {
  let result = "";
  data.forEach((item) => {
    // console.log(item.img);
    result += Card(item);
  });
  cards.innerHTML = result;

  document.querySelectorAll(".card-imgAdd").forEach((item) => {
    item.addEventListener("click", () => {
      countItems.innerHTML = `(${renderCount()})`;
      console.log("test");
    });
  });
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

const countItems = document.querySelector(".add-to-bag");

function renderCount() {
  return +countItems.textContent.slice(1, length - 1) + 1;
}
