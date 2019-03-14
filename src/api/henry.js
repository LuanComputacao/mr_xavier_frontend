/**
 * Mocking client-server processing
 */
const _questions = [
  {
    id: 1,
    subject: 'mat',
    knowledges: ['sum'],
    type: true,
    wording: 'Esta é a primeira questão?',
    grade: 8,
    level: 10
  },
  {
    id: 2,
    subject: 'port',
    knowledges: ['predicate'],
    type: false,
    wording: 'Esta é a segunda questão?',
    grade: 9,
    level: 5
  },
  {
    id: 3,
    subject: 'port',
    knowledges: ['predicate', 'subject', 'verb'],
    type: false,
    wording: 'Esta é a terceira questão?',
    grade: 9,
    level: 5
  },
  {
    id: 4,
    subject: 'port',
    knowledges: ['predicate', 'past'],
    type: false,
    wording: 'Esta é a terceira questão?',
    grade: 9,
    level: 5
  }
]

const _subjects = [
  {
    code: 'port',
    name: 'Português',
    knowledge: [
      {
        code: 'predicate',
        name: 'Predicado'
      },
      {
        code: 'subject',
        name: 'Sujeito'
      },
      {
        code: 'verb',
        name: 'Verbo'
      },
      {
        code: 'past',
        name: 'Preterito'
      }
    ]
  },
  {
    code: 'mat',
    name: 'Matemática',
    knowledge: [
      {
        code: 'sum',
        name: 'Soma'
      }
    ]
  },
  {
    code: 'hist',
    name: 'História',
    knowledge: [
      {
        code: 'br_general',
        name: 'História Geral do Brasil'
      }
    ]
  }
]

export default {
  getQuestions (cb) {
    setTimeout(() => cb(_questions), 100)
  },
  getSubjects (cb) {
    setTimeout(() => cb(_subjects), 100)
  }
}
