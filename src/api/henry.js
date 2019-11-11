import axios from 'axios'

const henryApi = axios.create({
  baseURL: 'http://localhost:8080/api/',
  timeout: 15000,
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
        .get('questions/?eagerload=true',
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  createQuestion (questionData) {
    return new Promise((resolve, reject) => {
      console.log(questionData)
      henryApi
        .post(
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
          resolve(response.data)
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

  /**
   * Retrieve the Question Options
   * @param {Number} questionId
   */
  getQuestionOptionsByQuestionId (questionId) {
    return new Promise((resolve, reject) => {
      henryApi
        .get('questions/' + questionId + '/question-options',
          {
            headers: makeHeader()
          }
        )
        .then(response => {
          resolve(response.data)
        })
    })
  },

  /**
   * Create a list of Question Options
   *
   * Argument example:
   * [
   *  {
   *    "questionId": 1,
   *    "text": "Something special",
   *    "value": true
   *  }
   *]
   * @param {Number} questionId
   * @param {Array} questionOptions
   */
  createQuestionOptionsByQuestionId (questionId, questionOptions) {
    return new Promise((resolve, reject) => {
      henryApi
        .post('questions/' + questionId + '/question-options',
          questionOptions,
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

  getKnowledges () {
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
