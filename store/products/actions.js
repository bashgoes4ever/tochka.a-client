export default {
  async getCategories(context, baseCategory) {
    const {data} = await this.$axios({
      url: `/api/v1/shop/categories/${baseCategory}`,
      method: 'GET'
    })
    context.commit("setCategories", data)
  },
  async getFilters(context, categories) {
    let url = `/api/v1/shop/filters/${categories.baseCategory}`
    if (categories.subCategory) url += `/${categories.subCategory}`
    const {data} = await this.$axios({
      url,
      method: 'GET'
    })
    context.commit("setFilters", data.map(f => {
      return {
        ...f,
        value: false
      }
    }))
  },
  async getProducts(context, filters) {
    let url = `/api/v1/shop/products/${filters.baseCategory}`
    if (filters.subCategory) url += `/${filters.subCategory}`
    if (filters.page || filters.filters) url += '?'
    if (filters.page) url += `&page=${filters.page}`
    if (filters.filters && filters.filters.length > 0) {
      for(let filter of filters.filters) {
        url += `&filters=${filter.id}`
      }
    }
    const {data} = await this.$axios({
      url,
      method: 'GET'
    })
    context.commit("setProducts", data.data)
    context.commit("setTotalPages", data.total_pages)
    context.commit("setCurrentPage", filters.page || 1)
  },
  setFilterCheckbox(context, id) {
    context.commit("setFilterCheckbox", id)
  }
}
