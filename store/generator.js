export const state = () => ({
  repository: 'hvhvdevdev/minimal-mistakes',
  postLayout: 'posts',
  generator: 'jekyll.yml',
})

export const getters = {
  getRepository(state) {
    return state.repository
  },
  getPostLayout(state) {
    return state.postLayout
  },
  getGenerator(state) {
    return state.generator
  },
}

export const mutations = {
  setJekyllSettings(state, payload) {
    state.postLayout = payload.postLayout
    state.repository = payload.repository
    state.generator = 'jekyll.yml'
  },
}

export const actions = {
  async setJekyllSettings({ commit, dispatch }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('setJekyllSettings', payload)
    await dispatch(
      'git/writeWorkflow',
      { file: 'jekyll.yml', data: JEKYLL },
      { root: true }
    )
    await dispatch('git/triggerWorkflow', {}, { root: true })
  },
}

const JEKYLL = `\
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# Sample workflow for building and deploying a Jekyll site to GitHub Pages
name: Deploy Jekyll site to Pages

on:
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@55283cc23133118229fd3f97f9336ee23a179fcf # v1.146.0
        with:
          ruby-version: '3.1' # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically
          cache-version: 0 # Increment this number if you need to re-download cached gems
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Build with Jekyll
        # Outputs to the './_site' directory by default
        run: bundle exec jekyll build --baseurl "\${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        # Automatically uploads an artifact from the './_site' directory by default
        uses: actions/upload-pages-artifact@v1

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
`