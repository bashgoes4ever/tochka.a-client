export default function ({$axios, store, req, $cookies}) {
  let protocol = 'http'
  if (process.server) {
    protocol = req.connection.encrypted ? 'https' : 'http'
  }
  // `${protocol}://${req.headers.host}`
  $axios.defaults.xsrfCookieName = 'csrftoken'
  $axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
  $axios.defaults.baseURL = `${protocol}://92.53.105.241` //92.53.105.241
  $axios.defaults.withCredentials = true

  if (process.client) {
    store.dispatch("basket/getBasket")
  }
}
