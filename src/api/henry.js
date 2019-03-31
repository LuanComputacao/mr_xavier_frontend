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

const _subjects = [
  {
    id: 0,
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
    id: 2,
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
    id: 3,
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

const _grades = [
  { code: 1, name: 'First Year' },
  { code: 2, name: 'Second Year' },
  { code: 3, name: 'Third Year' },
  { code: 4, name: 'Fourth Year' },
  { code: 5, name: 'Fifth Year' },
  { code: 6, name: 'Sixth Year' },
  { code: 7, name: 'Seventh Year' },
  { code: 8, name: 'Eighth Year' },
  { code: 9, name: 'Nine Year' }
]

export default {
  getQuestions (cb) {
    setTimeout(() => cb(_questions), 100)
  },
  getSubjects (cb) {
    setTimeout(() => cb(_subjects), 100)
  },
  getTests (cb) {
    setTimeout(() => cb(_tests), 100)
  },
  getGrades (cb) {
    setTimeout(() => cb(_grades), 100)
  }
}
