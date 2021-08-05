export default function ({ store }) {
  if (store.getters["menu/isActive"]) {
    store.dispatch("menu/setMenu", false)
  }
}
