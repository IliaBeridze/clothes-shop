export default function ShopItem(props) {
  return `<div class="card">
  <img
    class="card-img"
    src="${props.img}"
  />

  <div class="card-info">
    <div class="card-category">${props.category}</div>

    <div class="card-title">${props.title}</div>
    <div class="card-description">
      ${props.description}
    </div>
    <div class="card-price">${props.price}$</div>
  </div>
</div>`;
}
 