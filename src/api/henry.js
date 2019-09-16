import axios from 'axios'
/**
 * Mocking client-server processing
 */
const _questions = [
  {
    id: 1,
    subject: 'mat',
    knowledges: ['sum'],
    type: 1,
    wording: 'Esta é a primeira questão?',
    grade_code: 8,
    level: 10,
    options: [
      {
        isTrue: false,
        text: 'First Option'
      },
      {
        isTrue: true,
        text: 'Second Option'
      },
      {
        isTrue: false,
        text: 'Third Option'
      },
      {
        isTrue: false,
        text: 'Forth Option'
      }
    ]
  },
  {
    id: 2,
    subject: 'port',
    knowledges: ['predicate'],
    type: 2,
    wording: 'Esta é a segunda questão?',
    grade_code: 9,
    level: 5,
    lines: 25
  },
  {
    id: 3,
    subject: 'port',
    knowledges: ['predicate', 'subject', 'verb'],
    type: 1,
    wording: 'Esta é a terceira questão?',
    grade_code: 9,
    level: 5,
    options: [
      {
        isTrue: false,
        text: 'First Option'
      },
      {
        isTrue: true,
        text: 'Second Option'
      },
      {
        isTrue: false,
        text: 'Third Option'
      },
      {
        isTrue: false,
        text: 'Forth Option'
      }
    ]
  },
  {
    id: 4,
    subject: 'port',
    knowledges: ['predicate', 'past'],
    type: 2,
    wording: 'Esta é a terceira questão?',
    grade_code: 9,
    level: 5,
    lines: 3
  }
]

const _tests = [
  {
    id: 1,
    subject: 1,
    appliedTimes: 2,
    author: 'Luan Roger',
    description: 'Avaliar a Identificação dos componentes das orações',
    grade_code: 9,
    level: 5,
    questions: {
      1: 3,
      2: 4,
      3: 2
    }
  }
]

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

  getQuestionById (questionId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let question = _questions.find(question => question.id === Number.parseInt(questionId))
        resolve(question)
      }, 3000)
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

  getTests (cb) {
    setTimeout(() => cb(_tests), 3000)
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
      axios.get('grade/' + code).then((response) => {
        resolve(response.data)
      })
    })
  }
}
