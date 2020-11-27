export default function ({ route, store }) {
  console.log(route)
  store.dispatch('setCurrentRoute', route.path)
  store.dispatch('setCurrentTheme', route.meta[0].theme)
}
