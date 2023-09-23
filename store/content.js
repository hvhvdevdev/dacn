export const state = () => ({
  entries: {},
})

export const getters = {
  getEntries(state) {
    return state.entries
  },
}

export const mutations = {
  deleteEntry(state, payload) {
    state.entries[payload.model] = state.entries[payload.model].filter(
      (e) => e[payload.idField] !== payload.id
    )
  },
  updateEntry(state, payload) {
    const index = state.entries[payload.model].findIndex(
      (e) => e[payload.idField] === payload.id
    )
    state.entries[payload.model][index] = payload.data
  },
  createEntry(state, payload) {
    state.entries[payload.model].push(payload.data)
  },
  addModel(state, modelName) {
    state.entries[modelName] = []
  },
  setEntries(state, entries) {
    state.entries = entries
  },
}

export const actions = {
  async deleteEntry({ commit, dispatch, state }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('deleteEntry', payload)
    await dispatch('git/writeData', {}, { root: true })
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch(
      'git/writeConfig',
      { file: 'content.json', data: JSON.stringify(state.entries) },
      { root: true }
    )
  },
  async editEntry({ commit, dispatch, state }, payload) {
    commit('updateEntry', payload)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await dispatch('git/writeData', {}, { root: true })
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch(
      'git/writeConfig',
      { file: 'content.json', data: JSON.stringify(state.entries) },
      { root: true }
    )
  },
  async createEntry({ commit, dispatch, state }, payload) {
    commit('createEntry', payload)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await dispatch('git/writeData', {}, { root: true })
    await dispatch('git/triggerWorkflow', {}, { root: true })
    await dispatch(
      'git/writeConfig',
      { file: 'content.json', data: JSON.stringify(state.entries) },
      { root: true }
    )
  },
  async loadEntries({ commit, state, dispatch }) {
    let entries = state.entries
    commit('setEntries', [])
    await new Promise((resolve) => setTimeout(resolve, 1000))
    try {
      entries = JSON.parse(
        atob((await dispatch('git/loadConfig', 'content.json', { root: true })).content)
      )
    } catch (e) {}
    commit('setEntries', entries)
  },
}
