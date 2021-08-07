const vue = new Vue({
    el: "#app",
    data() {
        return {
            goods: [],
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

        delHandler(id_product) {
            const good = this.goods.find(good => good.id_product === id_product)

            const removeIndex = this.cart.map(function (item) {
                return item.id;
            }).indexOf(id_product);
            this.cart.splice(removeIndex, 1);
            fetch('/cart', {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(good)
            })
            fetch('/cart')
                .then((response) => response.json())
                .then((response) => this.cart = response)


            console.log(this.cart)

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