<template>
  <div class="logo-with-text">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <h1>Mr. Xavier</h1>
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'LogoWithText',

  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.logo-with-text{
  @extend .text-center;
}
</style>
