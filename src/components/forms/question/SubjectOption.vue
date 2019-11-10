<template>
  <div class="subject-option form-group row">
    <label
      class="col-auto col-form-label"
      for="js-subjects"
      v-t="'form__select_subject'"
    />
    <div
      class="alert-info"
      v-if="loading"
      v-t="'all--loading'"
    />
    <div
      v-else
      class="col"
    >
      <select
        class="form-control"
        id="js-subjects"
        name="subjects"
        v-model="question.subjectId"
        @change="changeSubject"
      >
        <option
          value
          v-t="'form__select_subject'"
        />
        <option
          v-for="(subject, i) in subjects.filter(x => x.knowledges.length)"
          :key="i"
          :value="subject.id"
        >
          {{ subject.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SubjectOption',

  data () {
    return {
      loading: true,
      selectedId: 0
    }
  },

  computed: {
    ...mapState({
      subjects: state => state.subjects.all
    }),

    question: {
      get () {
        return this.$store.state.questions.question
      },
      set () {
        this.$store.commit('questions/SetQuestion')
      }
    }
  },

  created () {
    let that = this
    this.retrieveSubjects().then(() => {
      that.loading = false
      that.changeSubject()
    })
  },

  methods: {
    ...mapActions({
      retrieveSubjects: 'subjects/actionAllSubjects'
    }),

    changeSubject () {
      let subject = this.subjects.find(x => x.id === this.question.subjectId) || {}

      this.$emit('change', subject)
      this.$set(this.question, 'subjectId', subject.id || 0)
      this.$set(this.question, 'subject', subject)
    }
  }

}
</script>

<style lang="scss" scoped>
.subject-option {
  @extend .subject-option, .form-group, .row;
}
</style>
