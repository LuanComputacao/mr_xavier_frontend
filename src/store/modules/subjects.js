import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  actionAllSubjects ({ commit }) {
    henry.getSubjects(subjects => {
      commit('setSubjects', subjects)
    })
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
