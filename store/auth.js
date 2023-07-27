export const getters = {
  getToken() {
    return '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'
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
