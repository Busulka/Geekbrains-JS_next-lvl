Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalog.json',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter() {
            let regexp = new RegExp(this.search, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.title));
        }
    },
    mounted() {
        this.$parent.getJson(this.catalogUrl)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="items-list container">
            <product ref="refref" v-for="item of filtered" :key="item.id" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },

    template: `
    <div class="item">
                <div class="desc">
                    <h3>{{product.title}}</h3>
                    <p>{{product.price}} $</p>
                    <button class="add-btn" @click="cartAPI.addProduct(product)">Купить</button>
<!-- 1                    <button class="add-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="add-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                </div>
            </div>
    `
});
