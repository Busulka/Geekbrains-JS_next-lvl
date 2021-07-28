'use strict';
const products = [
    { id: 1, title: 'Shirt', price: '150' },
    { id: 2, title: 'Socks', price: '50' },
    { id: 3, title: 'Jacket', price: '350' },
    { id: 4, title: 'Shoes', price: '250' },
];

const renderProduct = (item) => `
    <div class = "item">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
        <button class = "add-btn">Добавить</button>
    </div>`;

const renderProducts = list => {
    document.querySelector('.items-list').innerHTML = list.map(item => renderProduct(item)).join('')
};

renderProducts(products);