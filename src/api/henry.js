import axios from 'axios'

export default {
  getQuestions () {
    return new Promise((resolve, reject) => {
      axios
        .get('questions/')
        .then(response => {
          resolve(response.data)
        })
    })
  },

  putQuestion (questionData) {
    return new Promise((resolve, reject) => {
      axios
        .put(
          'questions/',
          questionData
        )
        .then(response => {
          resolve(response)
        })
    })
  },

  getQuestionById (questionId) {
    return new Promise((resolve, reject) => {
      axios
        .get('questions/' + questionId)
        .then(response => {
          resolve(response.data)
        })
    })
  },

  getSubjects () {
    return new Promise((resolve, reject) => {
      axios
        .get('subject/')
        .then(response => {
          resolve(response.data)
        })
    })
  },

  getTests () {
    return new Promise((resolve, reject) => {
      axios
        .get('test/')
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  getGrades () {
    return new Promise((resolve, reject) => {
      axios
        .get('grade/')
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  getGradeByCode (code) {
    return new Promise((resolve, reject) => {
      axios
        .get('grade/' + code)
        .then((response) => {
          resolve(response.data)
        })
    })
  },

  login (username, password) {
    return new Promise((resolve, reject) => {
      axios
        .post('authenticate/', {
          password: password,
          rememberMe: true,
          username: username
        })
        .then((response) => {
          resolve(response.data)
        })
    })
  }
}
