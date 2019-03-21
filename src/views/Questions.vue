<template>
  <div class="questions">
    <title-h1 :texti18n="'all--questions'" />
    <div class="text-right">
      <router-link
        class="btn btn-secondary"
        :to="{name: 'question'}"
        v-t="'all--create_question'"
      />
    </div>

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
import TitleH1 from '@/components/titles/TitleH1'

export default {
  name: 'Questions',

  components: {
    FormKnowledgeFilter,
    TableQuestion,
    TitleH1
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
      console.log(code, knowledges)
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
