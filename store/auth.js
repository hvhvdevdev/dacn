export const state = () => ({
  token: ""
})

export const getters = {
  getToken({ state }) {
    return state.token
  },
}

export const actions = {
  async doLogin(_, payload) {
    this.$axios.setToken(payload, 'Bearer')
    try {
      await this.$axios.$get('https://api.github.com/user')
    } catch (e) {
      throw new Error('Login failed')
    }
  },
}
