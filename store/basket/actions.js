export default {
  async getBasket(context) {
    const {data} = await this.$axios({
      url: `/api/v1/basket/`,
      method: 'GET'
    })
    context.commit('setBasketData', data.products)
  },
  async addProductToBasket({commit}, product) {
    const {data} = await this.$axios({
      url: `/api/v1/basket/product/${product.id}`,
      method: 'POST'
    })
    commit('addProductToBasket', {
      product,
      quantity: data.quantity,
      id: data.id
    })
  },
  async removeProductFromBasket({commit}, productId) {
    await this.$axios({
      url: `/api/v1/basket/product/${productId}`,
      method: 'DELETE'
    })
    commit('removeProductFromBasket', productId)
  },
  changeProductQuantityClient({commit}, {productId, quantity}) {
    commit('changeProductQuantity', {productId, quantity})
  },
  async changeProductQuantity({commit}, {productId, quantity}) {
    await this.$axios({
      url: `/api/v1/basket/product/${productId}`,
      method: 'PUT',
      data: {quantity}
    })
    commit('changeProductQuantity', {productId, quantity})
  },
  async checkAvailability({commit, dispatch}, {from, to}) {
    const {data} = await this.$axios({
        url: '/api/v1/basket/check/',
        method: 'POST',
        data: {
          from,
          to
        }
      })
    commit('setMaxValuesAndShowErrors', data.data)
    if (data.data.some(i => i.error === true)) {
      dispatch('notifications/createNotification', 'Часть товаров недоступна на выбранные даты.', { root: true })
    }
  },
  async createOrder({commit, dispatch}, data) {
    const from = new Date(data.form.date[0])
    const to = new Date(data.form.date[1])

    await this.$axios({
      url: '/api/v1/order/',
      method: 'POST',
      data: {
        name: data.form.name,
        phone: data.form.phone,
        email: data.form.email,
        city: data.form.city,
        address: data.form.address,
        comment: data.form.comment,
        date_from: formatDate(from),
        date_to: formatDate(to),
        payment_type: data.payment
      }
    })

    commit('clearBasket')
    dispatch('getBasket')
  }
}

function formatDate(date) {
  const str = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString()
  return str.slice(0, 10)
}
