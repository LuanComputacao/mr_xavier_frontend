import henry from '@/api/henry'

// Initial state
const state = {
  all: [],
  question: {
    'authorId': 0,
    'authorName': '',
    'gradeId': 0,
    'gradeName': '',
    'id': 0,
    'knowledges': [],
    'knowledgesIds': [],
    'level': 0,
    'spaces': 0,
    'subjectId': 0,
    'subjectName': '',
    'type': 'DISCURSIVA',
    'wording': '',
    'published': false
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
  },

  questionData: state => {
    return {
      id: state.question.id,
      authorId: 1,
      gradeId: state.question.gradeId,
      knowledges: state.question.knowledges,
      level: state.question.level,
      published: state.question.published,
      spaces: state.question.spaces,
      subjectId: state.question.subjectId,
      type: state.question.type,
      wording: state.question.wording
    }
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
  },

  async actionUpdateQuestion ({ commit }, questionData) {
    commit('setQuestion', await henry.putQuestion(questionData))
  },

  actionSetQuestion ({ commit }, question) {
    commit('setQuestion', question)
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
