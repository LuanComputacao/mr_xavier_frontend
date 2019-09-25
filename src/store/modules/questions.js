import henry from '@/api/henry'

// Initial state
const state = {
  all: [],
  question: {
    'id': 1,
    'criadoEm': '',
    'atualizadoEm': '',
    'wording': '',
    'espacos': 0,
    'invalidada': false,
    'level': 0,
    'publica': false,
    'autor': {},
    'subject': {
      'id': 1,
      'code': '',
      'name': '',
      'knowledges': []
    },
    'grade': {},
    'knowledges': [],
    'options': [],
    'type': 'OBJETIVA'
  },
  type: {
    objective: 'OBJETIVA',
    discursive: 'DISCURSIVA'
  }
}

// Getters
const getters = {
  questionById: (state) => (id) => {
    return state.all.find(x => Number.parseInt(x.id) === Number.parseInt(id))
  }
}

// Actions
const actions = {
  async actionAllQuestions ({ commit }) {
    commit('setQuestions', await henry.getQuestions())
  },

  async actionQuestionById ({ commit }, questionId) {
    commit('setQuestion', await henry.getQuestionById(questionId))
  },

  async actionPutQuestion ({ commit }, questionData) {
    commit('printQuestion', await henry.putQuestion(questionData))
  }
}

// Mutations
const mutations = {
  setQuestions (state, questions) {
    state.all = questions
  },

  setQuestion (state, question) {
    state.question = question
  },

  printQuestion (state, question) {
    console.log(question)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
