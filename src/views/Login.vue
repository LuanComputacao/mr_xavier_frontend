<template>
  <div class="login-page">
    <logo-with-text text="Login Page" />
    <div class="form-login">
      <form @submit.prevent="formHandler">
        <div class="form-group">
          <input
            type="text"
            name="user"
            id="user-login"
            class="form-control"
            placeholder="Login"
            autocomplete="username"
            v-model="username"
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            id="user-pwd"
            class="form-control"
            placeholder="Password"
            autocomplete="username"
            v-model="password"
          >
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            type="submit"
            :disabled="loading"
            v-text="'Login'"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
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
    ...mapState('authJwt', {
      loading: state => state.doingLogin
    })
  },
  created () {
    // reset login status
    this.$store.dispatch('authentication/logout')
  },
  methods: {
    ...mapActions('authJwt', {
      requestLogin: 'requestLogin',
      requestUser: 'requestUser'
    }),

    ...mapMutations({
      setLoading: 'authJwt/setLoading'
    }),

    formHandler (e) {
      const { username, password } = this

      this.setLoading()
      this.requestLogin({ username, password })
        .then(data => {
          this.setLoading(false)
          this.requestUser()
            .then(() => {
              this.$router.push({ path: 'home' })
            })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  @extend .container;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form-login {
  text-align: center;
}
</style>
