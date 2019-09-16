<template>
  <div class="home">
    <logo-with-text :text="professorIdentification" />

    <nav class="home__menu">
      <div class="home__buttons">
        <router-link
          :to="{name: 'questions'}"
          class="btn btn-primary"
          v-t="'all--questions'"
        />
        <router-link
          v-if="isModerator"
          to="/propostas-de-invalidacoes"
          class="btn btn-primary"
          v-t="'all--invalidation_proposals'"
        />
        <router-link
          :to="{name: 'tests'}"
          class="btn btn-primary"
          v-t="'all--tests'"
        />
      </div>
    </nav>
    <div class="text-center">
      <router-link
        :to="{name: 'style-guide'}"
        v-t="'all--style_guide'"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LogoWithText from '@/components/LogoWithText.vue'

export default {
  name: 'Home',

  components: {
    LogoWithText
  },

  data () {
    return {
      grades: {},
      isModerator: false
    }
  },

  mounted () {
    this.actionAllGrades()
    this.actionGradeByCode(1)
  },

  computed: {
    ...mapState({
      availableGrades: state => state.grades.all,
      availableGrade: state => state.grades.grade
    }),
    professorIdentification () {
      return 'Professor' + (this.isModerator ? ' Moderador' : '')
    }
  },

  methods: {
    ...mapActions('grades', {
      actionAllGrades: 'actionAllGrades',
      actionGradeByCode: 'actionGradeByCode'
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;

  &__menu{
    @extend .text-center, .justify-content-center;
  }

  &__buttons{
    @extend .btn-group;
  }
}
</style>
