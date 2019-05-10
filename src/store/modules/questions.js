import henry from '@/api/henry'

// Initial state
const state = {
  all: [],
  question: null
}

// Getters
const getters = {
  questionById: (state) => (id) => {
    let found = state.all.find(x => {
      console.log('x ', x)
      return Number.parseInt(x.id) === Number.parseInt(id)
    })
    return found
  }
}

// Actions
const actions = {
  async getAllQuestions ({ commit }) {
    commit('setQuestions', await henry.getQuestions())
  },

  async actionQuestionById ({ commit }, questionId) {
    commit('setQuestion', await henry.getQuestionById(questionId))
  }
}

// Mutations
const mutations = {
  setQuestions (state, questions) {
    state.all = questions
  },

  setQuestion (state, question) {
    state.question = question
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
