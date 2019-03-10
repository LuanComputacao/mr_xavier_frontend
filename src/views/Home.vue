<template>
  <div class="home">
    <logo-with-text :text="professorIdentification" />

    <nav class="home__menu">
      <div class="home__buttons">
        <router-link
          :to="{name: 'questions'}"
          class="btn btn-primary"
        >
          Questões
        </router-link>
        <router-link
          v-if="isModerator"
          to="/propostas-de-invalidacoes"
          class="btn btn-primary"
        >
          Propostas De Invalidações
        </router-link>
        <router-link
          :to="{name: 'tests'}"
          class="btn btn-primary"
        >
          Testes
        </router-link>
      </div>
    </nav>
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
      isModerator: false
    }
  },

  computed: {
    professorIdentification () {
      return 'Professor' + (this.isModerator ? ' Moderador' : '')
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  &__menu{
    @extend .text-center, .row, .justify-content-center;
  }

  &__buttons{
    @extend .btn-group;
  }
}
</style>
