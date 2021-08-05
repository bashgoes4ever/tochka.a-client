import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state() {
    return {
      active: false
    }
  },
  mutations,
  getters,
  actions
}
