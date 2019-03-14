<template>
  <div class="questions">
    <nav class="btn-group btn-group-sm">
      <router-link
        class="btn btn-primary"
        to="/"
      >
        Home
      </router-link>
      <router-link
        class="btn btn-primary"
        to="/question/"
        v-t="'all__create-question'"
      />
    </nav>

    <h1 class="text-center">
      Questões
    </h1>

    <form-knowledge-filter
      :subjects="subjects"
      :level-range="50"
      @filterKnowledge="updateCurrentSubject"
    />

    <table-question :questions="filteredQuestions" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import FormKnowledgeFilter from '@/components/forms/FormKnowledgeFilter.vue'
import TableQuestion from '@/components/tables/TableQuestion.vue'

export default {
  name: 'Questions',

  components: {
    FormKnowledgeFilter,
    TableQuestion
  },

  computed: {
    ...mapState({
      questions: state => state.questions.all,
      subjects: state => state.subjects.all
    }),
    filteredQuestions () {
      let that = this

      if (this.curSubject.code.length < 1) {
        return this.questions
      }

      let subjectQuestions = this.questions.filter(
        x => x.subject === this.curSubject.code
      )

      let filteredQuestions = subjectQuestions.filter(x => {
        let filteredKnowledge = x.knowledges.filter(
          x => that.curSubject.knowledges.indexOf(x) > -1
        )

        return that.curSubject.knowledges.length === filteredKnowledge.length
      })

      return filteredQuestions
    }
  },

  data () {
    return {
      curSubject: {
        code: '',
        knowledges: []
      }
    }
  },
  created () {
    this.$store.dispatch('questions/getAllQuestions')
    this.$store.dispatch('subjects/getAllSubjects')
  },
  methods: {
    updateCurrentSubject (code, knowledges) {
      this.curSubject.code = code
      this.curSubject.knowledges = knowledges
    }
  }
}
</script>
<style lang="scss" scoped>
.questions{
  @extend .container;
}
</style>
