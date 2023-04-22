export const state = () => ({
  repository: 'hvhvdevdev/minimal-mistakes',
  postLayout: 'posts',
})

export const getters = {
  getRepository(state) {
    return state.repository
  },
  getPostLayout(state) {
    return state.postLayout
  },
}

export const mutations = {
  setJekyllSettings(state, payload) {
    state.postLayout = payload.postLayout
    state.repository = payload.repository
  },
}

export const actions = {
  async setJekyllSettings({ commit }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('setJekyllSettings', payload)
  },
}
