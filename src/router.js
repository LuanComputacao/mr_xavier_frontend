import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StyleGuide from './views/StyleGuide.vue'
import Pages from './views/Pages.vue'
import Login from './views/Login.vue'
import Questions from './views/Questions.vue'
import Question from './views/Question.vue'

Vue.use(Router)

export default new Router({
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
      name: 'question',
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
      component: Questions
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
    }
  ]
})
