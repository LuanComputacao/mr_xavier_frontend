<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <logo-with-text />
    <form-login />
  </div>
</template>

<script>
import LogoWithText from '@/components/LogoWithText.vue'
import FormLogin from '@/components/forms/FormLogin.vue'

export default {
  name: 'Home',
  components: {
    LogoWithText,
    FormLogin
  }
}
</script>
