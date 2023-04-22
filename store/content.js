export const state = () => ({
  entries: {
    Nation: [
      {
        code: 'NVN',
        name: 'North Vietnam',
        description:
          "North Vietnam, officially the Democratic Republic of Vietnam was a socialist country supported by the Soviet Union (USSR) and the People's Republic of China.",
      },
      {
        code: 'SVN',
        name: 'South Vietnam',
        description:
          'South Vietnam, officially the Republic of Vietnam, was a country in Southeast Asia that existed from 1955 to 1975, the period when the southern portion of Vietnam was a member of the Western Bloc during part of the Cold War after the 1954 division of Vietnam',
      },
      {
        code: 'FRU',
        name: 'French Union',
        description:
          'The French Union was a political entity created by the French Fourth Republic to replace the old French colonial empire system, colloquially known as the "French Empire".',
      },
    ],
    Battle: [
      {
        code: 'DBP',
        name: 'Battle of Dien Bien Phu',
        description:
          'The Battle of Dien Bien Phu was a climactic confrontation of the First Indochina War that took place between 13 March and 7 May 1954',
        defender: 'NVN',
        attacker: 'FRU',
        'defender-loss': 123,
        'attacker-loss': 456,
      },
    ],
  },
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
}

export const actions = {
  async deleteEntry({ commit, dispatch }, payload) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    commit('deleteEntry', payload)
    await dispatch('git/writeData', {}, { root: true })
  },
  async editEntry({ commit, dispatch }, payload) {
    commit('updateEntry', payload)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await dispatch('git/writeData', {}, { root: true })
  },
  async createEntry({ commit, dispatch }, payload) {
    commit('createEntry', payload)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await dispatch('git/writeData', {}, { root: true })
  },
}
