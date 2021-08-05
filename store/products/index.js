import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state() {
    return {
      categories: [],
      products: [],
      currentPage: 1,
      totalPages: null,
      filters: []
    }
  },
  mutations,
  getters,
  actions
}
