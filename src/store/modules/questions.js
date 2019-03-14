import henry from '@/api/henry'

// Initial state
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  getAllQuestions ({ commit }) {
    henry.getQuestions(questions => {
      commit('setQuestions', questions)
    })
  }
}

// Mutations
const mutations = {
  setQuestions (state, questions) {
    state.all = questions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
