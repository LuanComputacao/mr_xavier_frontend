import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  async actionAllKnkowledges ({ commit }) {
    commit('setKnowledges', await henry.getKnkowledges())
  }
}

// Mutations
const mutations = {
  setKnowledges (state, knowledges) {
    state.all = knowledges
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
