export const state = () => ({
  repository: 'hvhvdevdev/minimal-mistakes',
  postLayout: 'posts'
})

export const getters = {
  getRepository(state) {
    return state.repository
  },
  getPostLayout(state) {
    return state.postLayout
  }
}
