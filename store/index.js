export const state = () => ({
  about: undefined,
  currentRoute: '/',
  home: undefined,
  projects: undefined,
  resources: undefined,
  theme: {
    current: 'light',
  },
  tags: undefined,
})

export const getters = {
  resourcesByTag: (state) => (tag) => {
    if (state.resources === undefined) {
      return
    }

    return state.resources.filter(({ tags }) => {
      return tags.includes(tag)
    })
  },
  resourcesByTags: (state) => (selectedTags) => {
    if (state.resources === undefined) {
      return
    }

    return state.resources.filter(({ tags }) => {
      let hasTag = false

      tags.forEach((tag) => {
        if (!hasTag) {
          hasTag = selectedTags.includes(tag)
        }
      })

      return hasTag
    })
  },
  tags: (state) => {
    return state.tags
  },
}

export const actions = {
  async getAbout(context) {
    const response = await this.$axios.$get(`${process.env.apiUrl}/items/about`)

    context.commit('addAbout', response.data[0])
  },
  async getHome(context) {
    const response = await this.$axios.$get(`${process.env.apiUrl}/items/home`)

    context.commit('addHome', response.data[0])
  },
  async getProjects(context) {
    const response = await this.$axios.$get(
      `${process.env.apiUrl}/items/projects?fields=*,tags.*`
    )

    context.commit('addProjects', response.data)
  },
  async getResources(context) {
    const response = await this.$axios.$get(
      `${process.env.apiUrl}/items/resources`
    )

    const tags = []

    response.data.forEach((element) => {
      element.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    })

    context.commit('addResources', response.data)
    context.commit('addTags', tags)
  },
  setCurrentRoute(context, payload) {
    context.commit('setCurrentRoute', payload)
  },
  setCurrentTheme(context, payload) {
    const elBody = document.querySelector('body')
    const { current } = context.state.theme

    // remove existing theme
    if (current) {
      elBody.classList.remove(`${current}-theme`)
    }

    // add next theme
    elBody.classList.add(`${payload}-theme`)
    context.commit('setCurrentTheme', payload)
  },
}

export const mutations = {
  addAbout(state, about) {
    state.about = about
  },
  addHome(state, home) {
    state.home = home
  },
  addProjects(state, projects) {
    state.projects = projects
  },
  addResources(state, resources) {
    state.resources = resources
  },
  addTags(state, tags) {
    state.tags = tags
  },
  setCurrentRoute(state, route) {
    state.currentRoute = route
  },
  setCurrentTheme(state, theme) {
    state.theme.current = theme
  },
}
