import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  getAllTests ({ commit }) {
    henry.getTests(subjects => {
      commit('setTests', subjects)
    })
  }
}

// Mutations
const mutations = {
  setTests (state, tests) {
    state.all = tests
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
