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
            fetch('./cart', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(good)
            })
        },
        delHandler(good) {
            let index = this.cart.indexOf(good);
            if (index !== -1) {
                this.cart.splice(index, 1);
                fetch('./cart', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(good)
                })

            }
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