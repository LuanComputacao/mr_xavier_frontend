import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  getAllSubjects ({ commit }) {
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
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
