import henry from '@/api/henry'

// State
const state = {
  all: []
}

// Getters
const getters = {}

// Actions
const actions = {
  getAllGrades ({ commit }) {
    henry.getGrades(grades => {
      commit('setGrades', grades)
    })
  }
}

// Mutations
const mutations = {
  setGrades (state, grades) {
    state.all = grades
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
