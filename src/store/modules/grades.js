import henry from '@/api/henry'

// State
const state = {
  all: [],
  grade: null
}

// Getters
const getters = {
  gradeByCode: (state) => (code) => {
    return state.all.find(grade => grade.code === Number.parseInt(code))
  }
}

// Actions
const actions = {
  async getAllGrades ({ commit }) {
    commit('setGrades', await henry.getGrades())
  },

  async actionGradeByCode ({ commit }, code) {
    commit('setGrade', await henry.getGradeByCode(code))
  }
}

// Mutations
const mutations = {
  setGrades (state, grades) {
    state.all = grades
  },

  setGrade (state, grade) {
    state.grade = grade
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
