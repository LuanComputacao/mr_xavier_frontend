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
      v-model.number="linesNumber"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
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

  data () {
    return {
      linesNumber: 0
    }
  },

  mounted () {
    this.linesNumber = this.lines
  },

  watch: {
    level (nV, oV) {
      this.linesNumber = nV
    }
  }
}
</script>

<style lang="scss">
.question-lines-number{
  @extend .form-group, .row, .form-inline;
}
</style>
