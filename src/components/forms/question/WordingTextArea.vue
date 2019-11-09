<template>
  <div class="form-group">
    <label for="wording"><strong v-t="'all--wording'" /></label>
    <textarea
      id="js-wording"
      class="form-control"
      name="wording"
      rows="5"
      v-model="question.wording"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WordingTextArea',

  computed: {
    ...mapState({
      question: state => state.questions.question
    })
  }
}
</script>

<style>

</style>
