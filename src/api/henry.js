import axios from 'axios'

const henryApi = axios.create({
  baseURL: 'http://localhost:9000/api/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

function makeHeader () {
  return {
    Authorization: 'Bearer ' + localStorage.getItem('id_token')
  }
}

export default {
  getQuestions () {
    return new Promise((resolve, reject) => {
      henryApi
        .get('questions/',
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  putQuestion (questionData) {
    return new Promise((resolve, reject) => {
      henryApi
        .put(
          'questions',
          questionData,
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response)
        })
    })
  },

  getQuestionById (questionId) {
    return new Promise((resolve, reject) => {
      henryApi
        .get('questions/' + questionId,
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  getSubjects () {
    return new Promise((resolve, reject) => {
      henryApi
        .get('subjects/',
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  getTests () {
    return new Promise((resolve, reject) => {
      henryApi
        .get('test/',
          {
            headers: makeHeader()
          }
        )
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  getGrades () {
    return new Promise((resolve, reject) => {
      henryApi
        .get('grades/',
          {
            headers: makeHeader()
          }
        )
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  getGradeByCode (code) {
    return new Promise((resolve, reject) => {
      henryApi
        .get('grade/' + code)
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  login (username, password) {
    return new Promise((resolve, reject) => {
      henryApi
        .post('authenticate', {
          password: password,
          rememberMe: true,
          username: username
        })
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  account () {
    return new Promise((resolve, reject) => {
      henryApi
        .get('account', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('id_token')
          }
        })
        .then((response) => {
          resolve(response.data)
        })
    })
  }
}
