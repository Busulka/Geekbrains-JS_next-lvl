const vue = new Vue({
    el: "#app",
    data() {
        return {
            catalog: [],
            cart: []
        }
    },
    methods: {
        addHandler(good) {
            this.cart.push(good);
            fetch('/cart', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(good)
            })
        },
        delHandler(good) {
            this.cart.splice(this.cart.indexOf(good), 1);
            fetch('cart', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "text/html charset=utf-8"
                },
                body: JSON.stringify(good)
            })

        }
    },
    mounted() {
        fetch('/catalog')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.catalog = data;
            })

        fetch('/cart')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.cart = data;
            })
    }
})