class Data {
    constructor(element) {
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, stuffing, topping) {
        this.size = new Data(this.select(size));
        this.stuffing = new Data(this.select(stuffing));
        this.topping = this.getTopping(topping);
    }
    select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }
    selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }
    getTopping(name) {
        let result = [];
        this.selectAll(name).forEach(element => result.push(new Data(element)));
        return result;
    }
    calculatePrice() {
        let result = this.size.price + this.stuffing.price;
        this.topping.forEach(topping => result += topping.price);
        return result;
    }
    calculateCalories() {
        let result = this.size.calories + this.stuffing.calories;
        this.topping.forEach(topping => result += topping.calories);
        return result;
    }
    summarise(price, calories) {
        document.querySelector(price).textContent = this.calculatePrice();
        document.querySelector(calories).textContent = this.calculateCalories();
    }
}

document.getElementById('check').addEventListener('click', () => {
    let burger = new Burger('size', 'stuffing', 'topping');
    burger.summarise('#price', '#calories');
});
