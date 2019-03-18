<template>
  <div class="title-h2">
    <div class="title-h2__line">
      <span class="title-h2__stick" />
      <h2
        class="title-h2__text"
        v-t="texti18n"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TitleH2',

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
$font-size: 1.8em;

.title-h2 {
  margin-left: -$gutter_2;
  padding-top: $gutter_2;
  padding-bottom: $gutter_2/2;

  &__line {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &__text {
    font-size: $font-size;
    margin-bottom: 0;
    padding-left: $gutter_2 - $border-width;
  }

  &__stick {
    height: $font-size/1.5;
    border-left: solid $border-width $blue-light;
  }
}
</style>
