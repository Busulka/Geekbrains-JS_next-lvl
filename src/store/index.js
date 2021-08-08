import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: [],
    search: ''
  },
  getters: {
    getCatalog(state) {
      return state.catalog
    },
    getCart(state) {
      return state.cart
    },
    getSearch(state) {
      return state.search
    }
  },
  mutations: {
    setSearch(state, search) {
      state.search = search
    },
    setCatalog(state, payload) { state.catalog = [...state.catalog, ...payload] },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId)
      if (goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.catalog.find((good) => good.id === goodId)
        state.cart.push({ ...good, quantity: 1 })
      }
    },
    deleteItem(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId)
      if (goodInCart.quantity >= 1) {
        goodInCart.quantity--
      }
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch('api/good')
        .then((response) => {
          return response.json()
        })
        .then((goodList) => {
          commit('setCatalog', goodList)
        })
    },

    loadToCart({ commit, dispatch }, good) {
      return fetch('api/cart', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(good) })
        .then((response) => {
          commit('addToCart', good.id)
          dispatch('setStat', { type: 'add', id: good.id })
          console.log(good)
        })

    },

    deleteItem({ commit, dispatch }, good) {
      return fetch('api/cart', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(good) })
        .then((response) => {
          commit('deleteHandler', good.id)
          dispatch('setStat', { type: 'delete', id: good.id })
          console.log(good)
        })
    },


    setStat({ commit }, stat) {
      return fetch('api/stat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(stat) })
        .then((response) => {
          console.log(stat)
        })

    }
  }
})




