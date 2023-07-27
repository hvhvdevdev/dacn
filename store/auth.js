export const state = () => ({})

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
