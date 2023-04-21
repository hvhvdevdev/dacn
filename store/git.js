export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async writeArticles({ rootGetters }) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const getters = rootGetters
    const urlPrefix = `https://api.github.com/repos/${getters['auth/getRepository']}/`
    const sha = (
      await this.$axios.$get(
        urlPrefix + `branches/main?timestamp=${new Date().getTime()}`
      )
    ).commit.sha
    const tree = (
      await this.$axios.$get(
        urlPrefix +
          'git/trees/' +
          sha +
          `?recursive=1&timestamp=${new Date().getTime()}`
      )
    ).tree
    const articlesOnGit = tree.filter((a) => a.path.startsWith('articles/'))
    const articlesMustBeDeleted = articlesOnGit
      .filter(
        (a) =>
          !getters.getArticles
            .map((x) => `articles/${x.title}.md`)
            .includes(a.path)
      )
      .map((a) => a.path.replace(/(^articles\/)|(\.md$)/g, ''))
    const articlesToUpdate = articlesOnGit
      .map((a) => a.path.replace(/(^articles\/)|(\.md$)/g, ''))
      .filter((a) => !articlesMustBeDeleted.includes(a))
    const articlesToCreate = getters.getArticles
      .map((a) => a.title)
      .filter((a) => !articlesToUpdate.includes(a))

    for (const article of articlesMustBeDeleted) {
      await this.$axios.$delete(
        urlPrefix + 'contents/' + articlePath(article),
        {
          data: {
            message: `delete article ${article}`,
            sha: articlesOnGit.find((a) => a.path === articlePath(article)).sha,
          },
        }
      )
    }
    for (const article of articlesToUpdate) {
      await this.$axios.$put(urlPrefix + 'contents/' + articlePath(article), {
        message: `update article ${article}`,
        content: articleContent(
          getters.getArticles.find((a) => a.title === article)
        ),
        sha: articlesOnGit.find((a) => a.path === articlePath(article)).sha,
      })
    }
    for (const article of articlesToCreate) {
      await this.$axios.$put(urlPrefix + 'contents/' + articlePath(article), {
        message: `create article ${article}`,
        content: articleContent(
          getters.getArticles.find((a) => a.title === article)
        ),
      })
    }
  },
}

function articlePath(articleName) {
  return `articles/${articleName}.md`
}

function articleContent(article) {
  return btoa(
    `+++\ntitle = ${JSON.stringify(article.title)}\n+++\n\n` + article.content
  )
}
