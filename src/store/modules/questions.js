import henry from '@/api/henry'

// Initial state
const state = {
  all: [],
  question: {
    'authorId': 0,
    'authorName': 'string',
    'gradeId': 0,
    'gradeName': 'string',
    'id': 0,
    'knowledges': [
      {
        'code': 'string',
        'id': 0,
        'name': 'string'
      }
    ],
    'level': 0,
    'spaces': 0,
    'subjectId': 0,
    'subjectName': 'string',
    'type': 'DISCURSIVA',
    'wording': 'string'
  },
  questionOptions: {},
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
  },

  async actionCreateQuestion ({ commit }, questionData) {
    commit('setQuestion', await henry.createQuestion(questionData))
  }
}

// Mutations
const mutations = {
  setQuestions (state, questions) {
    state.all = questions
  },

  setQuestion (state, response) {
    state.question = response.data
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
