

class Good {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}

class GoodList {
    constructor(goods, container) {
        this._goods = goods;
        this._$goodsListContainer = container
    }

    renderGoodsList() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join(' ');

        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }
}

const list = new GoodList([
    new Good('Shirt', 150),
    new Good('Socks', 50),
    new Good('Jacket', 350),
    new Good('Shoes', 250),
], document.querySelector('.goods-list'))

class GoodInCart extends Good {
    constructor(title, price, quantity = 1) {
        super(title, price);

        this._quantity = quantity;
    }

    getPrice() {
        return this._price * this.quantity;
    }

    render() {
        return `<div class="goods-item"><h3>${this._title}</h3><p>${this._price}</p></div>`;
    }
}

const cart = new GoodList([], document.querySelector('.cart'))

list.renderGoodsList();
