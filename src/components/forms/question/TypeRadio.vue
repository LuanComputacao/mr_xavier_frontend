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
          v-model="choosen"
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
          v-model="choosen"
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

  props: {
    type: {
      type: String,
      default: () => this.questionTypes.objective
    }
  },

  data () {
    return {
      choosen: null
    }
  },

  watch: {
    type (nV) {
      this.choosen = nV
    }
  },

  computed: {
    ...mapState({
      questionTypes: state => state.questions.type
    })
  },

  methods: {
    updateType (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style>

</style>
