export const state = () => ({})

export const getters = {}

export const mutations = {}

async function getTree(urlPrefix) {
  const sha = (
    await this.$axios.$get(
      urlPrefix + `branches/main?timestamp=${new Date().getTime()}`
    )
  ).commit.sha
  return (
    await this.$axios.$get(
      urlPrefix +
      'git/trees/' +
      sha +
      `?recursive=1&timestamp=${new Date().getTime()}`
    )
  ).tree
}

export const actions = {
  async writeData({ rootGetters }) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const getters = rootGetters
    const urlPrefix = `https://api.github.com/repos/${getters['generator/getRepository']}/`
    const tree = await getTree.call(this, urlPrefix)
    const modelsOnGit = tree
      .filter((m) => m.path.startsWith('_data/data_'))
      .map((m) => m.path.replace(/(^_data\/data_)|(\.json)/g, ''))
    const models = getters['models/getModels'].map((m) => m.name)
    const modelsToDelete = modelsOnGit.filter((m) => !models.includes(m))
    const modelsToUpdate = modelsOnGit.filter(
      (m) => !modelsToDelete.includes(m)
    )
    const modelsToCreate = models.filter((m) => !modelsToUpdate.includes(m))
    for (const model of modelsToUpdate) {
      await this.$axios.$put(urlPrefix + 'contents/' + modelPath(model), {
        message: `update data for model ${model}`,
        sha: modelSha(tree, model),
        content: btoa(
          JSON.stringify(getters['content/getEntries'][model] ?? [], null, 2)
        ),
      })
    }
    for (const model of modelsToDelete) {
      await this.$axios.$delete(urlPrefix + 'contents/' + modelPath(model), {
        data: {
          message: `delete model ${model}`,
          sha: modelSha(tree, model),
        },
      })
    }
    for (const model of modelsToCreate) {
      await this.$axios.$put(urlPrefix + 'contents/' + modelPath(model), {
        message: `create model ${model}`,
        content: btoa(
          JSON.stringify(getters['content/getEntries'][model] ?? [], null, 2)
        ),
      })
    }
  },

  async writeArticles({ rootGetters }) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const getters = rootGetters
    const urlPrefix = `https://api.github.com/repos/${getters['generator/getRepository']}/`
    const tree = await getTree.call(this, urlPrefix)
    const articlesOnGit = tree.filter((a) => a.path.startsWith('_posts/'))
    const articlesMustBeDeleted = articlesOnGit
      .filter(
        (a) =>
          !getters.getArticles
            .map((x) => `_posts/${x.title}.md`)
            .includes(a.path)
      )
      .map((a) => a.path)
    const articlesToUpdate = articlesOnGit
      .map((a) => a.path.replace(/(^_posts\/..........)|(\.md$)/g, ''))
      .filter(
        (a) =>
          !articlesMustBeDeleted
            .map((x) => x.replace(/(^_posts\/..........)|(\.md$)/g, ''))
            .includes(a)
      )
    const articlesToCreate = getters.getArticles
      .map((a) => a.title)
      .filter((a) => !articlesToUpdate.includes(a))

    for (const article of articlesMustBeDeleted) {
      await this.$axios.$delete(urlPrefix + 'contents/' + article, {
        data: {
          message: `delete article ${article}`,
          sha: articlesOnGit.find((a) => a.path === article).sha,
        },
      })
    }
    for (const article of articlesToUpdate) {
      await this.$axios.$put(
        urlPrefix +
          'contents/' +
          articlePath(getters.getArticles.find((a) => a.title === article)),
        {
          message: `update article ${article}`,
          content: articleContent(
            getters.getArticles.find((a) => a.title === article)
          ),
          sha: articlesOnGit.find(
            (a) =>
              a.path ===
              articlePath(getters.getArticles.find((a) => a.title === article))
          ).sha,
        }
      )
    }
    for (const article of articlesToCreate) {
      await this.$axios.$put(
        urlPrefix +
          'contents/' +
          articlePath(getters.getArticles.find((a) => a.title === article)),
        {
          message: `create article ${article}`,
          content: articleContent(
            getters.getArticles.find((a) => a.title === article)
          ),
        }
      )
    }
  },
}

function articlePath(article) {
  return `_posts/${article.date}-${article.title}.md`
}

function articleContent(article) {
  return btoa(
    `---\ntitle: ${JSON.stringify(
      article.title
    )}\nlayout: posts\ntags: ${article.tags.join()}\n---\n\n` + article.content
  )
}

function modelPath(modelName) {
  return `_data/data_${modelName}.json`
}

function modelSha(tree, modelName) {
  return tree
    .filter((m) => m.path.startsWith('_data/data_'))
    .find((m) => m.path.replace(/(^_data\/data_)|(\.json)/g, '') === modelName)
    .sha
}
