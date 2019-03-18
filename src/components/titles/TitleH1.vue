<template>
  <div class="title-h1">
    <h1 v-t="texti18n" />
  </div>
</template>
<script>
export default {
  name: 'TitleH1',

  props: {
    texti18n: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
$border-width: 5px;

.title-h1{
  border-left: solid $border-width $green;
  font-size: 2em;
  margin-left: -$gutter_2;
  padding-left: $gutter_2 - $border-width;
  margin-top: $gutter_2;
}
</style>
