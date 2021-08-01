class itemList {
    constructor(container = '.items-list') {
        this.container = container
        this.items = [];
        this.allItems = [];
        this._fetchItems();
        this._render();
    }
    _fetchItems() {
        this.items = [
            { id: 1, title: 'Shirt', price: '150' },
            { id: 2, title: 'Socks', price: '50' },
            { id: 3, title: 'Jacket', price: '350' },
            { id: 4, title: 'Shoes', price: '250' },
        ]
    }
    _render() {
        const block = document.querySelector(this.container);
        for (let item of this.items) {
            const productObject = new ProductItem(item);
            this.allItems.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }
}

class ProductItem {
    constructor(item) {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
    }
    render() {
        return `
        <div class = "item">
            <h3>${this.title}</h3>
            <p>$${this.price}</p>
            <button class = "add-btn">Добавить</button>
        </div>`;
    }
}

const list = new itemList();