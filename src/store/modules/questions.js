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
  },

  filters: {
    subjectId: 0,
    knowledgeIds: []
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
  },

  newQuestionData: state => {
    return {
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
  },

  filteredQuestions: state => {
    let subjectId = state.filters.subjectId
    let bySubject = subjectId > 0
      ? state.all.filter(x => x.subjectId === Number.parseInt(subjectId))
      : state.all

    if (typeof state.filters.knowledgeIds[0] === 'undefined') {
      return bySubject
    }

    return bySubject.filter(x => {
      return x.knowledges
        .map(x => x.id)
        .filter(kid =>
          state.filters.knowledgeIds.indexOf(kid) >= 0
        ).length === state.filters.knowledgeIds.length
    })
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
  },

  setFilterSubject (state, subjectId) {
    state.filters.subjectId = subjectId
  },

  setFilterKnowledges (state, knowledgeIds) {
    state.filters.knowledgeIds = knowledgeIds
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
