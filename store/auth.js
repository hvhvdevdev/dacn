export const state = () => ({
  user: '',
})

export const getters = {
  getUser(state) {
    return state.user
  },
}

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  async doLogin({ commit }, payload) {
    this.$axios.setToken(payload, 'Bearer')
    try {
      const data = await this.$axios.$get('https://api.github.com/user')
      commit('setUser', data.login)
    } catch (e) {
      throw new Error('Login failed')
    }
  },
}
