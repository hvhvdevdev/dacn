export const getters = {
  getToken() {
    return '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'
  },
  getRepository() {
    return 'hvhvdevdev/demo-write'
  },
}

export const actions = {
  async doLogin({ commit }, payload) {
    this.$axios.setToken(payload, 'Bearer')
    try {
      await this.$axios.$get('https://api.github.com/user')
    } catch (e) {
      throw new Error('Login failed')
    }
  },
}
