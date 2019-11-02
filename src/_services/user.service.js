import { authHeader } from '../_auth'
import axios from 'axios'
import { mapActions, mapMutations } from 'vuex'

export const userService = {
  login,
  logout,
  getAll
}

const actions = {
  ...mapActions('authJwt', {
    requestLogin: 'requestLogin'
  })
}

const mutations = {
  ...mapMutations({
    setLoading: 'authJwt/setLoading'
  })
}

function login (username, password) {
  mutations.setLoading()
  actions.requestLogin({ username, password })
    .then((data) => {
      mutations.setLoading(false)
    })
}

function logout () {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return axios.get('/users', requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

export default userService
