export default {
  createNotification({commit}, message) {
    const id = +new Date()
    commit('createNotification', {message, id})
    setTimeout(() => {
      commit('removeNotification', id)
    }, 7000)
  },
  closeNotification({commit}, notificationId) {
    commit('removeNotification', notificationId)
  }
}
