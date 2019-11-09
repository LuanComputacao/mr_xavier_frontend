import Vue from 'vue'
import Vuex from 'vuex'
import questions from './modules/questions'
import questionOptions from './modules/questionOptions'
import subjects from './modules/subjects'
import tests from './modules/tests'
import grades from './modules/grades'
import authentication from './modules/authentication'
import users from './modules/users.module'
import authJwt from './modules/auth_jwt'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    grades,
    questions,
    questionOptions,
    subjects,
    tests,
    authentication,
    authJwt,
    users
  }
})
