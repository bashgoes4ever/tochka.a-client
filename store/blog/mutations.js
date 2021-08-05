export default {
  addArticles(state, payload) {
    state.articles = payload
  },
  addHomePageArticles(state, payload) {
    state.homePageArticles = payload
  },
  addTags(state, payload) {
    state.tags = payload
  },
  setCurrentArticle(state, payload) {
    state.currentArticle = payload
  }
}
