<template>
  <div class="default-box">
    <slot name="default" />
  </div>
</template>
<script>
export default {
  name: 'BoxDefault'
}
</script>
<style lang="scss" scoped>
.default-box {
  padding: $grid-gutter-width/2;
  @extend .border, .shadow, .rounded;
}
</style>
