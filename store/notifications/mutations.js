export default {
  createNotification(state, notification) {
    state.notifications.unshift(notification)
  },
  removeNotification(state, notificationId) {
    state.notifications.splice(state.notifications.findIndex(i => i.id === notificationId), 1)
  }
}
