<template>
  <div class="subject-option form-group row">
    <label
      class="col-auto col-form-label"
      for="js-subjects"
      v-t="'form__select_subject'"
    />
    <div class="col">
      <select
        class="form-control"
        id="js-subjects"
        name="subjects"
        v-model="curSubjectId"
        @change="changeSubject"
      >
        <option
          value
          v-t="'form__select_subject'"
        />
        <option
          v-for="(subject, i) in subjects"
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
      curSubjectId: {}
    }
  },

  computed: {
    ...mapState({
      subjects: state => state.subjects.all
    })
  },

  created () {
    this.retrieveSubjects()
  },

  methods: {
    ...mapActions({
      retrieveSubjects: 'subjects/actionAllSubjects'
    }),

    changeSubject () {
      this.$emit('change', this.subjects.find(x => x.id === this.curSubjectId))
    }
  }

}
</script>

<style lang="scss" scoped>
.subject-option {
  @extend .subject-option, .form-group, .row;
}
</style>
