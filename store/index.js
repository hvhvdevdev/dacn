export const state = () => ({
  articles: [
    {
      title: 'A dog and a cat',
      content: 'Dog cat dog cat dog cat...',
      tags: ['animal', 'dog', 'cat'],
      date: '2023-03-03',
      published: false,
      authors: ['hai', 'foo'],
    },
    {
      title: 'Lorem ipsum Tiger',
      content:
        ' Cras eget quam vestibulum, elementum nibh in, tempor justo. Aenean in ex in nunc tempor bibendum. Nulla ac ornare dui. Sed vehicula non purus a consequat. Nunc fermentum at odio eget venenatis. Proin eget nisl leo. Proin id felis imperdiet, sagittis dolor ac, pulvinar est. Phasellus id sem magna. Mauris nisi elit, venenatis vitae tempor eu, fringilla sed tellus. Curabitur at dictum lacus. Curabitur convallis vitae elit ut cursus. Nam gravida feugiat sem a dignissim. Cras sit amet dignissim libero. ',
      tags: ['tiger', 'animal', 'lorem', 'ipsum', 'a', 'b'],
      date: '2023-03-09',
      published: false,
      authors: ['bar', 'foo'],
    },
    {
      title: 'Doggy dog',
      content:
        ' Aenean sed mauris at nisi eleifend euismod sed sit amet odio. Aliquam nec lacinia neque. Duis sit amet leo molestie, rhoncus orci ac, molestie nisi. Aenean commodo turpis nec nisl pellentesque fermentum. Aliquam a libero pellentesque, semper metus ut, bibendum sem. In eget nulla nec lorem auctor posuere et id arcu. Pellentesque mollis erat tortor, ut vulputate tortor tempus viverra. In fermentum augue et turpis commodo, non maximus lectus faucibus. Duis ac lacus leo. Suspendisse rhoncus ullamcorper sagittis. Nullam aliquet quam ac consequat finibus. Morbi blandit aliquet mattis. Duis id venenatis elit. Cras varius lobortis luctus. Integer vehicula sem quis tristique blandit. ',
      tags: ['dog', 'animal'],
      date: '2023-03-05',
      published: true,
      authors: ['bar'],
    },
    {
      title: 'How I eat dog food',
      content: 'Hello world, this is how I eat',
      tags: ['dog', 'animal', 'eat'],
      date: '2023-03-12',
      published: true,
      authors: ['bar'],
    },
  ],
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
  async loadArticles({ commit, state }) {
    const articles = state.articles
    commit('setArticles', [])
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('setArticles', articles)
  },
  async deleteArticle({ commit }, title) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('removeArticles', title)
  },
  async publishArticle({ commit, getters }, title) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('setArticlePublished', title)

    const urlPrefix = `https://api.github.com/repos/${getters['auth/getRepository']}/`
    const sha = (await this.$axios.$get(urlPrefix + 'branches/main')).commit.sha
    const tree = (
      await this.$axios.$get(urlPrefix + 'git/trees/' + sha + '?recursive=1')
    ).tree
    const articlesOnGit = tree.filter((a) => a.path.startsWith('articles/'))
    const articlesMustBeDeleted = articlesOnGit.filter(
      (a) =>
        !getters.getArticles
          .map((x) => `articles/${x.title}.md`)
          .includes(a.path)
    )
    const articlesToUpdate = articlesOnGit.filter(
      (a) => !articlesMustBeDeleted.includes(a)
    )
    console.log(articlesMustBeDeleted, articlesToUpdate)
  },
  async updateArticle({ commit }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('updateArticle', payload)
  },
  async createArticle({ commit }, article) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    commit('createArticle', article)
  },
}
