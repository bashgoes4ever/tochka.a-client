export default {
  popup: (state) => state.popup,
  thank: (state) => state.thank,
  showLayer: (state) => state.popup || state.thank,
  type: (state) => state.type
}
