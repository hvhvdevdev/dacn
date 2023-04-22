export const state = () => ({
  models: [
    {
      name: 'Nation',
      identifier: 'code',
      fields: [
        {
          field: 'code',
          widget: 'text',
        },
        {
          field: 'name',
          widget: 'text',
        },
        {
          field: 'description',
          widget: 'rich-text',
        },
      ],
    },
    {
      name: 'Battle',
      identifier: 'code',
      fields: [
        {
          field: 'code',
          widget: 'text',
        },
        {
          field: 'name',
          widget: 'text',
        },
        {
          field: 'defender',
          widget: 'select',
          model: 'Nation',
        },
        {
          field: 'attacker',
          widget: 'select',
          model: 'Nation',
        },
        {
          field: 'defender-loss',
          widget: 'number',
        },
        {
          field: 'attacker-loss',
          widget: 'number',
        },
        {
          field: 'description',
          widget: 'rich-text',
        },
      ],
    },
  ],
})

export const getters = {
  getModels(state) {
    return state.models
  },
}

export const mutations = {
  addModel(state, model) {
    state.models.push(model)
  },
  deleteModel(state, name) {
    state.models = state.models.filter((m) => m.name !== name)
  },
  updateModel(state, payload) {
    const index = state.models.findIndex((m) => m.name === payload.modelName)
    state.models[index] = payload.newModel
  },
}

export const actions = {
  async addModel({ commit }, model) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('addModel', model)
    commit('content/addModel', model.name, { root: true })
  },
  async deleteModel({ commit }, name) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('deleteModel', name)
  },
  async updateModel({ commit }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('updateModel', payload)
  },
}
