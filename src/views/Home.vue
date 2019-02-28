<template>
  <div class="home">
    <logo-with-text :text="professorIdentification"></logo-with-text>

    <router-link to="/questions">Questões</router-link>
    <router-link v-if="isModerator" to="/propostas-de-invalidacoes">Propostas De Invalidações</router-link>
    <router-link to="tests">Testes</router-link>
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
