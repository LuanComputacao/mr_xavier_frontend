<template>
  <div class="question-editor">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <div v-if="question">
      <form-question
        :edit="edit"
        :question="question"
        :subjects="availableSubjects"
        :grades="availableGrades"
        :level-range="10"
        :save-draft="saveDraft"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'QuestionForm',

  data () {
    return {
      questionId: null,
      edit: false,
      question: null
    }
  },

  components: {
    FormQuestion
  },

  computed: {
    ...mapState('questions', {
      sQuestion: state => state.question
    }),

    ...mapState({
      availableSubjects: state => state.subjects.all,
      availableGrades: state => state.grades.all
    })
  },

  created () {
    this.questionId = this.$route.params.id

    this.actionQuestionById(this.questionId)
      .then(() => {
        this.actionGradeByCode(this.sQuestion.grade)
          .then(() => {
            this.sQuestion.grade = this.grade
            this.question = this.sQuestion
          })
      })
    this.$store.dispatch('grades/actionAllGrades')
    this.$store.dispatch('subjects/actionAllSubjects')
  },

  methods: {
    ...mapActions('questions', {
      actionQuestionById: 'actionQuestionById'
    }),

    ...mapActions('grades', {
      actionGradeByCode: 'actionGradeByCode'
    }),

    retrieveQuestionIfEditing () {
      if (this.$route.params.id) {
        this.edit = !!(this.question)
      }
      return true
    },

    saveDraft () {

    }
  }
}
</script>
<style lang="scss">
.question-editor{
  @extend .mb-1, .container;
}
</style>
