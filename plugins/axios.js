export default function ({$axios, store, req, $cookies}) {
  // let protocol = 'http'
  // if (process.server) {
  //   protocol = req.connection.encrypted ? 'https' : 'http'
  // }
  // `${protocol}://${req.headers.host}`
  $axios.defaults.xsrfCookieName = 'csrftoken'
  $axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
  $axios.defaults.baseURL = `https://tochka-a-sochi.ru` // https://tochka-a-sochi.ru
  $axios.defaults.withCredentials = true

  if (process.client) {
    store.dispatch("basket/getBasket")
  }
}
