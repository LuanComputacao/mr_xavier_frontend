<template>
  <div class="questions">
    <nav class="btn-group btn-group-sm">
      <router-link
        class="btn btn-primary"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="btn btn-primary"
        to="/question/"
        v-t="'all__create-question'"
      />
    </nav>

    <h1 class="text-center">
      Questões
    </h1>

    <form-knowledge-filter
      :subjects="subjects"
      :level-range="50"
      @filterKnowledge="updateCurrentSubject"
    />

    <table-question :questions="filteredQuestions" />
  </div>
</template>
<script>
import FormKnowledgeFilter from '@/components/forms/FormKnowledgeFilter.vue'
import TableQuestion from '@/components/tables/TableQuestion.vue'

export default {
  name: 'Questions',

  components: {
    FormKnowledgeFilter,
    TableQuestion
  },

  computed: {
    filteredQuestions () {
      let that = this

      if (this.curSubject.code.length < 1) {
        return this.questions
      }

      let subjectQuestions = this.questions.filter(
        x => x.subject === this.curSubject.code
      )

      let filteredQuestions = subjectQuestions.filter(x => {
        let filteredKnowledge = x.knowledges.filter(
          x => that.curSubject.knowledges.indexOf(x) > -1
        )

        return that.curSubject.knowledges.length === filteredKnowledge.length
      })

      return filteredQuestions
    }
  },

  data () {
    return {
      curSubject: {
        code: '',
        knowledges: []
      },
      subjects: [
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
      ],
      questions: [
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
    }
  },

  methods: {
    updateCurrentSubject (code, knowledges) {
      this.curSubject.code = code
      this.curSubject.knowledges = knowledges
    }
  }
}
</script>
<style lang="scss" scoped>
.questions{
  @extend .container;
}
</style>
