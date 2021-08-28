export default {
  showPopup({commit}) {
    setTimeout(() => commit("showPopup"), 0)
  },
  showThank({commit}) {
    setTimeout(() => commit("showThank"), 0)
  },
  hide({commit}) {
    commit("hide")
  },
  setType({commit}, payload) {
    commit('setType', payload)
  },
  async apply({commit}, data) {
    await this.$axios({
      url: '/api/v1/application/',
      method: 'POST',
      data: {
        name: data.name,
        phone: data.phone,
        description: data.description,
        form: data.form
      }
    })
    commit('showThank')
  }
}
