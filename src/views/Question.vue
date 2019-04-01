<template>
  <div class="question-editor">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <form-question
      :edit="edit"
      :question="question"
      :subjects="availableSubjects"
      :grades="availableGrades"
      :level-range="10"
    />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'Question',

  data () {
    return {
      questionId: null,
      edit: false,
      question: {}
    }
  },

  components: {
    FormQuestion
  },

  computed: {
    ...mapGetters({
      getQuestion: 'questions/questionById'
    }),
    ...mapState({
      availableSubjects: state => state.subjects.all,
      availableGrades: state => state.grades.all
    })
  },

  created () {
    this.$store.dispatch('grades/getAllGrades')
    this.$store.dispatch('subjects/getAllSubjects')
    this.$store.dispatch('questions/getAllQuestions')
    this.retrieveQuestionIfEditing()
  },

  updated () {
  },

  methods: {
    retrieveQuestionIfEditing () {
      if (this.$route.params.id) {
        this.questionId = this.$route.params.id
        this.question = this.getQuestion(this.questionId)
        this.edit = !!(this.question)
      }
      return true
    }
  }
}
</script>
<style lang="scss">
.question-editor{
  @extend .mb-1, .container;
}
</style>
