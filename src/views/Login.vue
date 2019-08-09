<template>
  <div class="login-page">
    <logo-with-text text="Login Page" />
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
<style lang="scss" scoped>
.login-page{
  @extend .container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
