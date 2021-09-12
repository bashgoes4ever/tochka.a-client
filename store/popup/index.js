import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state() {
    return {
      popup: false,
      thank: false,
      type: 'Заявка',
      loading: false
    }
  },
  mutations,
  getters,
  actions
}
