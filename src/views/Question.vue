<template>
  <div class="question-editor">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <form-question
      :subjects="availableSubjects"
      :grades="availableGrades"
      :level-range="10"
      :level-value="Number.parseInt(4)"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'Question',

  components: {
    FormQuestion
  },

  computed: {
    ...mapState({
      availableSubjects: state => state.subjects.all,
      availableGrades: state => state.grades.all
    })
  },

  created () {
    this.$store.dispatch('subjects/getAllSubjects')
    this.$store.dispatch('grades/getAllGrades')
  }
}
</script>
<style lang="scss">
.question-editor{
  @extend .mb-1, .container;
}
</style>
