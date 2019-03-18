<template>
  <div class="question-editor">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <form-question
      :subjects="availableSubjects"
      :degrees="[]"
      :level-range="100"
      :level-value="4"
    />
  </div>
</template>
<script>
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'Question',

  components: {
    FormQuestion
  },

  data () {
    return {
      availableSubjects: []
    }
  }
}
</script>
<style lang="scss">
.question-editor{
  @extend .mb-1, .container;
}
</style>
