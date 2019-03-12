<template>
  <div class="question-editor">
    <nav class="btn-group btn-group-sm">
      <router-link
        class="btn btn-primary"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="btn btn-primary"
        to="/questions"
      >
        Questions
      </router-link>
    </nav>
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
