import "./style.scss";

import Card from "./card";


const cards = document.querySelector(".cards");

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
    price: 169,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWesXONYQaVCjyPORaGhdIgTYfuPM2_DkHQ&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 179,
  },
  {
    img: "https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-black-blouse-pants-suit-180508191.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 119,
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/41/03/46/360_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 139,
  },
  {
    img: "https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-white-blouse-pants-suit-180511785.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 159,
  },
];



function renderItems() {
  mockData.forEach((item) => {
    // console.log(item.img);
    cards.innerHTML += Card(item);
    
  });
}
renderItems();
