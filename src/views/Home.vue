<template>
  <div class="home">
    <logo-with-text :text="professorIdentification"></logo-with-text>

    <nav>
      <router-link :to="{name: 'questions'}">Questões</router-link>
      <router-link v-if="isModerator" to="/propostas-de-invalidacoes">Propostas De Invalidações</router-link>
      <router-link :to="{name: 'tests'}">Testes</router-link>
    </nav>
  </div>
</template>

<script>
import LogoWithText from '@/components/LogoWithText.vue'

export default {
  name: 'home',

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
