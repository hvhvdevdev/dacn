export const state = () => ({
  articles: [],
  snackbarContent: '',
})

export const getters = {
  getArticles(state) {
    return state.articles
  },
  getTags(state) {
    return [...new Set(state.articles.map((a) => a.tags).flat())].map((t) => ({
      name: t,
      articles: state.articles.filter((a) => a.tags.includes(t)),
    }))
  },
  countArticles(state) {
    return state.articles.length
  },
  countPublished(state) {
    return state.articles.filter((a) => a.published).length
  },
  countTags(_state, getters) {
    return getters.getTags.length
  },
  getAuthors(state) {
    return [...new Set(state.articles.map((a) => a.authors).flat())].map(
      (au) => ({
        name: au,
        articles: state.articles.filter((a) => a.authors.includes(au)),
      })
    )
  },
  countAuthors(_state, getters) {
    return getters.getAuthors.length
  },
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  removeArticles(state, title) {
    state.articles = this.state.articles.filter((a) => a.title !== title)
  },
  setArticlePublished(state, title) {
    state.articles.find((a) => a.title === title).published = true
  },
  updateArticle(state, payload) {
    const index = state.articles.findIndex((a) => a.title === payload.title)
    if (index < 0) {
      throw new Error('Unknown Article: ' + payload.title)
    }
    state.articles[index] = payload.article
  },
  createArticle(state, article) {
    state.articles.push(article)
  },
  setSnackbarContent(state, content) {
    state.snackbarContent = content
  },
}

export const actions = {
  async loadArticles({ commit, state, dispatch }) {
    let articles = state.articles
    commit('setArticles', [])
    await new Promise((resolve) => setTimeout(resolve, 1000))
    try {
      articles = JSON.parse(
        atob((await dispatch('git/loadConfig', 'articles.json')).content)
      )
    } catch (e) {}
    commit('setArticles', articles)
  },
  async deleteArticle({ commit, dispatch, state }, title) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('removeArticles', title)
    await dispatch('git/writeArticles', {})
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch('git/writeConfig', {
      file: 'articles.json',
      data: JSON.stringify(state.articles),
    })
  },
  async publishArticle({ commit, dispatch, state }, title) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('setArticlePublished', title)
    await dispatch('git/writeArticles', {})
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch('git/writeConfig', {
      file: 'articles.json',
      data: JSON.stringify(state.articles),
    })
  },
  async updateArticle({ commit, dispatch, state }, payload) {
    commit('updateArticle', payload)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await dispatch('git/writeArticles', {})
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch('git/writeConfig', {
      file: 'articles.json',
      data: JSON.stringify(state.articles),
    })
  },
  async createArticle({ commit, dispatch, state }, article) {
    commit('createArticle', article)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await dispatch('git/writeArticles', {})
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch('git/writeConfig', {
      file: 'articles.json',
      data: JSON.stringify(state.articles),
    })
  },
}
