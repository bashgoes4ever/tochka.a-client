export default {
  async getArticles(context, filters={}) {
    let url = `/api/v1/blog/articles/?`
    if (filters.tag) url += `tag=${filters.tag}`
    if (filters.count) url += `count=${filters.count}`

    const {data} = await this.$axios({
      url,
      method: 'GET'
    })
    return data
  },
  async getHomePageArticles(context) {
    const data = await context.dispatch("getArticles", {count: 3})
    context.commit("addHomePageArticles", data)
  },
  async getBlogArticles(context, tag) {
    const data = await context.dispatch("getArticles", {tag})
    context.commit("addArticles", data)
  },
  async getTags(context) {
    const {data} = await this.$axios({
      url: '/api/v1/blog/tags/',
      method: 'GET'
    })
    context.commit("addTags", data)
  },
  async getArticle(context, id) {
    const {data} = await this.$axios({
      url: `/api/v1/blog/articles/${id}`,
      method: 'GET'
    })
    context.commit("setCurrentArticle", data)
  }
}
