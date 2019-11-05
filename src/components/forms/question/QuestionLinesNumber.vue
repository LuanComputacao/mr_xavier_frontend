<template>
  <div class="question-lines-number">
    <label
      class="col-auto"
      for="lines"
    >Lines:</label>
    <input
      class="col-auto form-control"
      id="lines"
      name="lines"
      type="number"
      min="0"
      max="50"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'QuestionLinesNumber'
}
</script>

<style lang="scss">
.question-lines-number{
  @extend .form-group, .row, .form-inline;
}
</style>
