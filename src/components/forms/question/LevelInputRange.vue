<template>
  <div>
    <label for="level"><strong>Nível:</strong> {{ level }}</label>
    <input
      class="custom-range"
      type="range"
      min="0"
      step="0.5"
      :max="max"
      v-model.number="level"
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
    }
  },

  data () {
    return {
      level: 0
    }
  }
}
</script>

<style>

</style>
