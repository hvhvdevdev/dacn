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
    state.generator = payload.generator
  },
  setRepository(state, payload) {
    state.repository = payload
  },
}

export const actions = {
  async setJekyllSettings({ commit, dispatch, state }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('setJekyllSettings', payload)
    await dispatch(
      'git/writeConfig',
      { file: 'generator.json', data: JSON.stringify(state) },
      { root: true }
    )
    await dispatch(
      'git/writeWorkflow',
      { file: payload.generator, data: payload.generator === 'jekyll.yml' ? JEKYLL : payload.generator === 'zola.yml' ? ZOLA : HUGO },
      { root: true }
    )
    await dispatch('git/triggerWorkflow', {}, { root: true })
  },

  async setRepository({ commit }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('setRepository', payload)
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

const ZOLA = `\
# On every push this script is executed
on: workflow_dispatch
name: Build and deploy GH Pages
jobs:
  build:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: checkout
        uses: actions/checkout@v3.0.0
      - name: build_and_deploy
        uses: shalzz/zola-deploy-action@v0.17.2
        env:
          # Target branch
          PAGES_BRANCH: gh-pages
          # Or if publishing to the same repo, use the automatic token
          TOKEN: \${{ secrets.GITHUB_TOKEN }}
`

const HUGO = `
# Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

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

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.115.4
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O \${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v\${HUGO_VERSION}/hugo_extended_\${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i \${{ runner.temp }}/hugo.deb          
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v3
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v3
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "\${{ steps.pages.outputs.base_url }}/"          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./public

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