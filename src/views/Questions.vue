<template>
  <div class="questions">
    <title-h1 :texti18n="'all--questions'" />
    <div class="text-right">
      <router-link
        class="btn btn-secondary"
        :to="{name: 'create-question'}"
        v-t="'all--create_question'"
      />
    </div>

    <form-knowledge-filter
      :subjects="subjects"
      :level-range="50"
      @filterKnowledge="updateCurrentSubject"
    />

    <div v-if="questions.length > 0">
      <table-question :questions="filteredQuestions" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import FormKnowledgeFilter from '@/components/forms/FormKnowledgeFilter.vue'
import TableQuestion from '@/components/tables/TableQuestion.vue'
import TitleH1 from '@/components/titles/TitleH1'

export default {
  name: 'Questions',

  components: {
    FormKnowledgeFilter,
    TableQuestion,
    TitleH1
  },

  data () {
    return {
      curSubject: {
        code: '',
        knowledges: []
      }
    }
  },

  mounted () {
    this.actionAllSubjects()
    this.actionAllQuestions()
    this.actionAllGrades()
    // this.$store.dispatch('grades/actionAllGrades')
  },

  computed: {
    ...mapGetters({
      gradeByCode: 'grades/gradeByCode'
    }),
    ...mapState({
      questions: state => state.questions.all,
      subjects: state => state.subjects.all,
      grades: state => state.grades.all
    }),
    selectedNoOneKnowledge () {
      return this.curSubject.knowledges.length === 1 && this.curSubject.knowledges[0] === ''
    },

    filteredQuestions () {
      let that = this
      let filteredQuestions = []

      if (this.curSubject.code.length < 1) {
        filteredQuestions = this.questions
      } else {
        let knowledgesCodes = that.curSubject.knowledges.map(x => x.code)

        // Filter questions by subject
        let subjectQuestions = this.questions.filter(
          x => x.subject.code === this.curSubject.code
        )

        // Filter the questions by knowledge
        filteredQuestions = subjectQuestions.filter(x => {
          let filteredKnowledge = x.knowledges.filter(
            y => knowledgesCodes.indexOf(y.code) > -1 || this.selectedNoOneKnowledge
          )
          return knowledgesCodes.length === filteredKnowledge.length || this.selectedNoOneKnowledge
        })
      }

      return filteredQuestions
    }
  },

  methods: {
    ...mapActions({
      actionAllQuestions: 'questions/actionAllQuestions',
      actionAllSubjects: 'subjects/actionAllSubjects',
      actionAllGrades: 'grades/actionAllGrades'
    }),

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
