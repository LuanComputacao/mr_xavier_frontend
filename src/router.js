import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StyleGuide from './views/StyleGuide.vue'
import Pages from './views/Pages.vue'
import Login from './views/Login.vue'
import Questions from './views/Questions.vue'
import Question from './views/Question.vue'
import QuestionCreate from './views/QuestionCreate.vue'
import TestsSearch from './views/TestsSearch.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pages/',
      name: 'pages',
      component: Pages
    },
    {
      path: '/login/',
      name: 'login',
      component: Login
    },
    {
      path: '/question/',
      name: 'create-question',
      component: QuestionCreate
    },
    {
      path: '/question/:id',
      name: 'edit-question',
      component: Question
    },
    {
      path: '/questions/',
      name: 'questions',
      component: Questions
    },
    {
      path: '/tests/',
      name: 'tests',
      component: TestsSearch
    },
    {
      path: '/test/:id/',
      name: 'edit-test',
      component: Test
    },
    {
      path: '/test/',
      name: 'test',
      component: Test
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/style-guide',
      name: 'style-guide',
      component: StyleGuide
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})

export default router
