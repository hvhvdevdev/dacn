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
          'The Battle of Điện Biên Phủ was a climactic confrontation of the First Indochina War that took place between 13 March and 7 May 1954',
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
