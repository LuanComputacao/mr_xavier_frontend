<template>
  <div class="question-editor">
    <div class="col">
      <h1>Editing question {{ $route.params.id }}</h1>
    </div>

    <div v-if="loading">
      Carregando...
    </div>
    <div v-else>
      <form-question
        :question-id="questionId"
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'QuestionForm',

  components: {
    FormQuestion
  },

  data () {
    return {
      questionId: null,
      loading: true,
      question: null
    }
  },

  mounted () {
    this.questionId = this.$route.params.id
    this.actionQuestionById(this.questionId)
      .then(() => {
        this.loading = false
      })
  },

  methods: {
    ...mapActions({
      actionQuestionById: 'questions/actionQuestionById'
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
