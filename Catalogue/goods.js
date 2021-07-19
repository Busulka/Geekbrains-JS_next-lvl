
'use strict';
const goods = [
    { id: 0, title: 'Product 1', image: 'item_1.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 52.00 },
    { id: 1, title: 'Product 2', image: 'product_2.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 72.00 },
    { id: 2, title: 'Product 3', image: 'product_3.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 82.00 },
    { id: 3, title: 'Product 4', image: 'product_4.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 59.00 },
    { id: 4, title: 'Product 5', image: 'product_5.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 67.00 },
    { id: 5, title: 'Product 6', image: 'product_6.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 102.00 },
    { id: 6, title: 'Product 7', image: 'product_7.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 94.00 },
    { id: 7, title: 'Product 8', image: 'product_8.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 69.00 },
    { id: 8, title: 'Product 9', image: 'product_9.png', description: 'Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: 92.00 },
];
const renderGoodsItem = (id, title, image, description, price) => {
    return `<div class="featured__item">
<img class="item__image" src="img/${image}" alt="${title}">
<div class="featured__item-hover">
<button data-productId="${id}" class="add-to-cart">
    <img src="img/add-to-cart.svg" alt="Cart">
    <p class="add-to-cart__img">Add To Cart</p>
</button>
</div>
<h4 class="item__name item__text">${title}</h4>
<p class="item__description item__text">${description}</p>
<p class="item__price item__text">$${price}</p>
</div>`;
}
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.id, item.title, item.image, item.description, item.price));
    document.querySelector('.catalog__products').innerHTML = goodsList;
}

renderGoodsList(goods);
function clickAddToCart() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    newBasketItem(productId);
}

clickAddToCart();

