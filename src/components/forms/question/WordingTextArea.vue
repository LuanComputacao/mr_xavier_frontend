<template>
  <div class="form-group">
    <label for="wording"><strong v-t="'all--wording'" /></label>
    <textarea
      id="js-wording"
      class="form-control"
      name="wording"
      rows="5"
      v-model="text"
      @keyup="$emit('updateWording', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'WordingTextArea',

  props: {
    wording: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      text: ''
    }
  },

  watch: {
    wording (nv, oV) {
      this.text = this.wording
    }
  }
}
</script>

<style>

</style>
