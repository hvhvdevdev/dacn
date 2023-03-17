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
          model: 'Nation',
        },
        {
          field: 'attacker',
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
  }
}
