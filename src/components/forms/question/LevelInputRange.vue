<template>
  <div>
    <label for="level"><strong>Nível:</strong> {{ question.level }}</label>
    <input
      class="custom-range"
      type="range"
      min="0"
      step="0.5"
      :max="max"
      v-model.number="question.level"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LevelInputRange',

  props: {
    max: {
      type: Number,
      default: 10
    }
  },

  data () {
    return {
      range: 0
    }
  },

  computed: {
    ...mapState({
      question: state => state.questions.question
    })
  }
}
</script>

<style>

</style>
