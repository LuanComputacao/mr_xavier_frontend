import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import subjects from './modules/subjects'
import tests from './modules/tests'
import grades from './modules/grades'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    grades,
    questions,
    subjects,
    tests
  }
})
