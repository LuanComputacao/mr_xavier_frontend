<template>
  <div class="question-lines-number">
    <label
      class="col-auto"
      for="lines"
    >Lines:</label>
    <input
      class="col-auto form-control"
      name="lines"
      type="number"
      min="0"
      :max="max"
      v-model.number="question.spaces"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'QuestionLinesNumber',

  props: {
    max: {
      type: Number,
      default: 10
    },
    lines: {
      type: Number,
      default: 5
    }
  },

  computed: {
    ...mapState({
      question: state => state.questions.question
    })
  }
}
</script>

<style lang="scss">
.question-lines-number{
  @extend .form-group, .row, .form-inline;
}
</style>
