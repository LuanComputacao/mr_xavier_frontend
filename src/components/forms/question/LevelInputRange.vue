<template>
  <div>
    <label for="level"><strong>Nível:</strong> {{ range }}</label>
    <input
      class="custom-range"
      type="range"
      min="0"
      step="0.5"
      :max="max"
      v-model.number="range"
      @change="$emit('change', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'LevelInputRange',

  props: {
    max: {
      type: Number,
      default: 10
    },
    level: {
      type: Number,
      default: 5
    }
  },

  data () {
    return {
      range: 0
    }
  },

  watch: {
    level () {
      this.range = this.level
    }
  }
}
</script>

<style>

</style>
