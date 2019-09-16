import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  async actionAllSubjects ({ commit }) {
    commit('setSubjects', await henry.getSubjects())
  }
}

// Mutations
const mutations = {
  setSubjects (state, subjects) {
    state.all = subjects
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
