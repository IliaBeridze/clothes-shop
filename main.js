import "./style.scss";
import "./size";
import Card from "./card";

const cards = document.querySelector(".cards");

export const mockData = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA_djpm0QdOAgvKxQhB3EZuT6JPHn1FcSDaw&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 199,
    size: 36,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFw53-E6Th5jalJduzZbeKpmNYdU2F7_6vA&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 169,
    size: 38,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyWesXONYQaVCjyPORaGhdIgTYfuPM2_DkHQ&usqp=CAU",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 179,
    size: 40,
  },
  {
    img: "https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-black-blouse-pants-suit-180508191.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 119,
    size: 36,
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/41/03/46/360_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 139,
    size: 42,
  },
  {
    img: "https://thumbs.dreamstime.com/b/beautiful-brunette-woman-natural-makeup-wear-fashion-clothes-casual-dress-code-office-style-total-white-blouse-pants-suit-180511785.jpg",
    category: "Trousers",
    title: "Stretch Wool Chino Trousers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor nunc nibh, in posuere arcu malesuada.",
    price: 159,
    size: 46,
  },
];

export function renderItems(data) {
  let result = "";
  data.forEach((item) => {
    // console.log(item.img);
    result += Card(item);
  });
  cards.innerHTML = result;
}
renderItems(mockData);
