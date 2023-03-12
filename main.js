import "./style.scss";
import "./card.scss";
import Card from "./card";
//create card component 1
//img, category, title, description, price

const app = document.querySelector("#app");

const mockData = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 199,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFw53-E6Th5jalJduzZbeKpmNYdU2F7_6vA&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 199,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWesXONYQaVCjyPORaGhdIgTYfuPM2_DkHQ&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 199,
  },
];

console.log(mockData);

function renderItems() {
  mockData.forEach((item) => {
    // console.log(item.img);
    app.innerHTML += Card(item);
    
  });
}
renderItems();
