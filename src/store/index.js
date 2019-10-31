import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import subjects from './modules/subjects'
import tests from './modules/tests'
import grades from './modules/grades'
import authentication from './modules/authentication'
import users from './modules/users.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    grades,
    questions,
    subjects,
    tests,
    authentication,
    users
  }
})
