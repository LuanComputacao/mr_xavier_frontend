import henry from '@/api/henry'

const state = {
  all: []
}

// Getters
const getters = {
  questionOptionById: (state) => (id) => {
    return state.all.find(x => Number.parseInt(x.id) === Number.parseInt(id))
  }

}

// Actions
const actions = {
  async actionAllQuestionOptions ({ commit }, questionId) {
    commit('setQuestionOptions', await henry.getQuestionOptionsByQuestionId(questionId))
  },

  async actionCreateQuestionOptions ({ commit }, data) {
    commit('setQuestionOptions', await henry.createQuestionOptionsByQuestionId(
      data.questionId,
      data.options
    ))
  }
}

// Mutations
const mutations = {
  setQuestionOptions (state, questionOptions) {
    state.all = questionOptions
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
