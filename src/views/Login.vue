<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <logo-with-text></logo-with-text>
    <login-form></login-form>
  </div>
</template>

<script>
import LogoWithText from '@/components/LogoWithText.vue'
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'home',
  components: {
    LogoWithText,
    LoginForm
  }
}
</script>
