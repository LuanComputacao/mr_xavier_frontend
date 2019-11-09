<template>
  <div class="question-create">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <div>
      <form-question />
    </div>
  </div>
</template>

<script>

import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'QuestionCreate',

  components: {
    FormQuestion
  }
}
</script>

<style lang="scss">
.question-create{
  @extend .mb-1, .container;
}
</style>
