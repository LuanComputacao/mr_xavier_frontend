import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import subjects from './modules/subjects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    questions,
    subjects
  }
})
