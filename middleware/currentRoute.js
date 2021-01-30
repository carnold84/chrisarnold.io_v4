export default function ({ route, store }) {
  store.dispatch('setCurrentRoute', route.path)
  store.dispatch('setCurrentTheme', route.meta[0].theme)
}
