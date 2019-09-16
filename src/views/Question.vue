<template>
  <div class="question">
    <div v-if="question">
      <question-preview
        :subject="question.subject"
        :knowledges="question.knowledges"
        :level="question.level"
        :wording="question.wording"
        :type="question.type"
        :lines="question.lines"
        :options="question.options"
        :grade="question.grade"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuestionPreview from '@/components/QuestionPreview'

export default {
  name: 'Question',

  data () {
    return {
      ready: false,
      question: null
    }
  },

  components: {
    QuestionPreview
  },

  created () {
    this.actionQuestionById(this.retrievedQuestionId).then(() => {
      this.actionGradeByCode(this.sQuestion.grade).then(() => {
        this.sQuestion.grade = this.grade
        this.question = this.sQuestion
      })
    })
  },

  computed: {
    ...mapState('questions', {
      sQuestion: state => state.question
    }),

    ...mapState('grades', {
      grade: state => state.grade
    }),

    retrievedQuestionId () {
      return this.$route.params.id
    }
  },

  methods: {
    ...mapActions('questions', {
      actionQuestionById: 'actionQuestionById'
    }),

    ...mapActions('grades', {
      actionGradeByCode: 'actionGradeByCode'
    })
  }
}
</script>

<style lang="scss" scoped>
.question{
  @extend .pt-5, .container;
}
</style>
