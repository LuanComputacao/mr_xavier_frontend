<template>
  <div class="login-page">
    <logo-with-text text="Login Page" />
    <div class="form-login">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="text"
            name="user"
            id="user-login"
            placeholder="Login"
            v-model="username"
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            name="pwd"
            id="user-pwd"
            placeholder="Password"
            v-model="password"
          >
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            type="submit"
            :disabled="loggingIn"
            v-text="'Login'"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import LogoWithText from '@/components/LogoWithText.vue'

export default {
  name: 'Home',
  components: {
    LogoWithText
  },
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    loggingIn () {
      return this.$store.state.authentication.status.loggingIn
    }
  },
  created () {
    // reset login status
    this.$store.dispatch('authentication/logout')
  },
  methods: {
    handleSubmit (e) {
      console.log(e)
      this.submitted = true
      const { username, password } = this
      const { dispatch } = this.$store
      console.log(username, password)
      if (username && password) {
        dispatch('authentication/login', { username, password })
      }
    }
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

.form-login{
  text-align: center;
}
</style>
