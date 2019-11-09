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
        v-model="selectedId"
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

  props: {
    subjectId: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      loading: true,
      selectedId: 0
    }
  },

  computed: {
    ...mapState({
      question: state => state.questions.question,
      subjects: state => state.subjects.all
    })
  },

  created () {
    this.retrieveSubjects().then(() => {
      this.loading = false
    })
  },

  methods: {
    ...mapActions({
      retrieveSubjects: 'subjects/actionAllSubjects'
    }),

    changeSubject () {
      let subject = this.subjects.find(x => x.id === this.selectedId)
      this.$emit('change', subject)
      this.question.subject = subject
      this.question.subjectId = subject.id
    }
  }

}
</script>

<style lang="scss" scoped>
.subject-option {
  @extend .subject-option, .form-group, .row;
}
</style>
