export const state = () => ({
  breadcrumb: [],
  currentRoute: '/',
  theme: {
    current: 'light',
  },
  home: {
    body:
      "I'm Chris, a front-end developer and designer from New Zealand. I like to write clean, elegant, functional code and partner it with clean, beautiful design and well thought out, user-friendly interfaces.",
    description: 'Test description',
    title: 'Hello',
  },
  projects: undefined,
  resources: undefined,
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

    console.log(selectedTags)

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
  async getProjects(context) {
    const response = await this.$axios.$get(
      `${process.env.apiUrl}/items/projects`
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
  setCurrentBreadcrumb(context, payload) {
    context.commit('setCurrentBreadcrumb', payload)
  },
}

export const mutations = {
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
  setCurrentBreadcrumb(state, breadcrumb) {
    state.breadcrumb = breadcrumb
  },
}
