import Vue from 'vue'

export default {
  setBasketData(state, products) {
    state.basket = products
  },
  addProductToBasket(state, product) {
    state.basket.push(product)
  },
  removeProductFromBasket(state, productId) {
    const index = state.basket.findIndex(i => i.id === productId)
    state.basket.splice(index, 1)
  },
  changeProductQuantity(state, {productId, quantity}) {
    const index = state.basket.findIndex(i => i.id === productId)
    state.basket[index].quantity = quantity
  },
  setMaxValuesAndShowErrors({basket}, products) {
    for (let product of products) {
      const index = basket.findIndex(i => i.id === product.id)

      Vue.set(basket[index], 'max_value', product.max_value)
      Vue.set(basket[index], 'error', product.error)
      if (basket[index].quantity > product.max_value) {
        Vue.set(basket[index], 'quantity', product.max_value)
      }
    }
  },
  clearBasket(state) {
    state.basket.length = 0
  }
}
