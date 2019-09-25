import axios from 'axios'

export default {
  getQuestions () {
    return new Promise((resolve, reject) => {
      axios
        .get('question/')
        .then(response => {
          resolve(response.data)
        })
    })
  },

  putQuestion (questionData) {
    return new Promise((resolve, reject) => {
      axios
        .put(
          'question/',
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
        .get('question/' + questionId)
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
  }
}
