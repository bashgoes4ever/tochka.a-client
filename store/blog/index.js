import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  state() {
    return {
      articles: [],
      homePageArticles: [],
      currentArticle: null,
      tags: []
    }
  },
  mutations,
  getters,
  actions
}
