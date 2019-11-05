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
        @saveDraft="saveDraft"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'QuestionForm',

  components: {
    FormQuestion
  },

  data () {
    return {
      questionId: null,
      edit: false,
      question: null
    }
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
        this.question = this.sQuestion
      })
    this.actionAllGrades()
    this.actionAllSubjects()
  },

  methods: {
    ...mapActions({
      actionQuestionById: 'questions/actionQuestionById',
      actionAllGrades: 'grades/actionAllGrades',
      actionAllSubjects: 'subjects/actionAllSubjects',
      actionKnowledgesBySubjectId: 'knowledges/actionKnowledgesBySubjectId'
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
