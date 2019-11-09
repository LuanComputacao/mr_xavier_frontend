<template>
  <div class="type-radio row">
    <div
      class="col-auto"
      v-t="'all--type'"
    >
      :
    </div>
    <div class="col-auto">
      <label for="type-closed">
        <input
          id="type-closed"
          type="radio"
          name="type"
          v-model="question.type"
          :value="questionTypes.objective"
          @change="updateType"
        >
        {{ $t('all--closed') }}
      </label>
    </div>
    <div class="col-auto">
      <label for="type-open">
        <input
          id="type-open"
          type="radio"
          name="type"
          v-model="question.type"
          :value="questionTypes.discursive"
          @change="updateType"
        >
        {{ $t('all--open') }}
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TypeRadio',

  computed: {
    ...mapState({
      questionTypes: state => state.questions.type,
      question: state => state.questions.question
    })
  },

  methods: {
    updateType (e) {
      this.$emit('change', e.target.value)
      this.question.type = e.target.value
    }
  }
}
</script>

<style>

</style>
