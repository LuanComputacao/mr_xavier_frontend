import henry from '@/api/henry'

// State
const state = {
  user: {},
  doingLogin: false
}

// Getters
const getters = {
  getUser: (state) => (code) => {
    return state.user
  }
}

// Actions
const actions = {
  async requestLogin ({ commit }, credentials) {
    const { username, password } = credentials
    commit('setToken', await henry.login(username, password))
  },

  async requestUser ({ commit }) {
    commit('setUser', await henry.account())
  }
}

// Mutations
const mutations = {
  setToken (state, data) {
    state.id_token = data.id_token
    localStorage.setItem('id_token', data.id_token)
  },

  setUser (state, data) {
    state.user = data
    localStorage.setItem('user', JSON.stringify(data))
  },

  setLoading (state, loading = true) {
    state.doingLogin = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
