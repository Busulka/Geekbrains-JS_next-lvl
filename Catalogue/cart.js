'use strict';
const openBasketBtn = document.querySelector('.cart__iconWrap');
const basketCounterEl = document.querySelector('.cart__iconWrap span');
const basketEl = document.querySelector('.basket');
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

let basket = {};

function addProductToObject(id) {
    if (!(id in basket)) {
        basket[id] = 1;
    } else {
        basket[id]++;
    }
}

function renderProductInBasket(id) {
    let productExist = document.querySelector(`.productCount[data-productId="${id}"]`);
    if (productExist) {
        increaseProductCount(id);
        recalculateSumForProduct(id);
    } else {
        renderNewProductInBasket(id);
    }
}

function renderNewProductInBasket(id) {
    let productRow = `
        <div class="basketRow">
            <div>${goods[id].title}</div>
            <div>
                <span class="productCount" data-productId="${id}">1</span> шт.
            </div>
            <div>$${goods[id].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${id}">${goods[id].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function increaseProductCount(id) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${id}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(id) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${id}"]`);
    let totalPriceForRow = (basket[id] * goods[id].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function calculateTotal() {
    let totalSum = 0;
    for (let id in basket) {
        totalSum += basket[id] * goods[id].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

function increaseProductsCount() {
    basketCounterEl.textContent++;
}


function newBasketItem(id) {
    increaseProductsCount();
    addProductToObject(id);
    renderProductInBasket(id);
    calculateTotal();
}