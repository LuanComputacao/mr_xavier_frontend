<template>
  <div class="logo-with-text">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Mr. Xavier</h1>
    <div>{{text}}</div>
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
