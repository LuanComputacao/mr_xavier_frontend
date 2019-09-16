import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  async getAllTests ({ commit }) {
    commit('setTests', await henry.getTests())
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
