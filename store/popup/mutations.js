export default {
  showPopup(state) {
    state.popup = true
  },
  showThank(state) {
    state.popup = false
    state.thank = true
  },
  hide(state) {
    state.popup = false
    state.thank = false
  },
  setType(state, type) {
    state.type = type
  }
}
