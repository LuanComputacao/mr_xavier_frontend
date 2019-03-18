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
.title-h1{
  border-left: solid 0.2em #42b983;
  font-size: 2em;
  padding-left: $grid-gutter-width/2;
  margin-left: -$grid-gutter-width/2
}
</style>
