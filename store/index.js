import env from "./env/index"
import blog from "./blog/index"
import products from './products/index'
import basket from './basket/index'
import notifications from './notifications/index'
import menu from './menu/index'
import popup from './popup/index'

export const modules = {
  basket,
  env,
  blog,
  products,
  notifications,
  menu,
  popup
}

export const actions = {
  async nuxtServerInit({commit, dispatch}, {req}) {
    if (process.server) {
      // const protocol = req.connection.encrypted ? 'https' : 'http'
      // commit("env/setDomain", `${protocol}://${req.headers.host}`)
      commit("env/setDomain", `https://tochka-a-sochi.ru`) // http://localhost:1234
    }
  }
}
