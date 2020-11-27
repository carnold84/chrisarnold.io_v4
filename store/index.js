export const state = () => ({
  currentRoute: '/',
  currentTheme: 'light',
  home: {
    body:
      "I'm Chris, a front-end developer and designer from New Zealand. I like to write clean, elegant, functional code and partner it with clean, beautiful design and well thought out, user-friendly interfaces.",
    description: 'Test description',
    title: 'Hello',
  },
  projects: undefined,
})

export const actions = {
  async getProjects(context) {
    console.log(process.env.apiUrl)
    const response = await this.$axios.$get(process.env.apiUrl)

    context.commit('addProjects', response.data)
  },
  setCurrentRoute(context, payload) {
    context.commit('setCurrentRoute', payload)
  },
  setCurrentTheme(context, payload) {
    context.commit('setCurrentTheme', payload)
  },
}

export const mutations = {
  addProjects(state, projects) {
    state.projects = projects
  },
  setCurrentRoute(state, route) {
    state.currentRoute = route
  },
  setCurrentTheme(state, theme) {
    state.currentTheme = theme
  },
}
