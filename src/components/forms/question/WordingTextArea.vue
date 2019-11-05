<template>
  <div class="form-group">
    <label for="wording"><strong v-t="'all--wording'" /></label>
    <textarea
      class="form-control"
      name="wording"
      id="wording"
      rows="5"
      @keyup="$emit('updateWording', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'WordingTextArea'
}
</script>

<style>

</style>
