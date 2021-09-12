export default {
  setCategories(state, payload) {
    state.categories = payload
  },
  setProducts(state, payload) {
    state.products = payload
  },
  setTotalPages(state, payload) {
    state.totalPages = payload
  },
  setFilters(state, payload) {
    state.filters = payload
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setFilterCheckbox(state, id) {
    const index = state.filters.findIndex(i => i.id == id)
    state.filters[index].value = !state.filters[index].value
  }
}
