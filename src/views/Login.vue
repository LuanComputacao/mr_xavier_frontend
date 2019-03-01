<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <logo-with-text></logo-with-text>
    <form-login></form-login>
  </div>
</template>

<script>
import LogoWithText from '@/components/LogoWithText.vue'
import FormLogin from '@/components/forms/FormLogin.vue'

export default {
  name: 'home',
  components: {
    LogoWithText,
    FormLogin
  }
}
</script>
