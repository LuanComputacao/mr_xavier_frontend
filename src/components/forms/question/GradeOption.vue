<template>
  <div class="grade-option form-group row">
    <label
      class="col-auto col-form-label"
      for="js-grades"
      v-t="'form__select_grade'"
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
        id="js-grades"
        name="grades"
        v-model="question.gradeId"
        @change="changeGrade"
      >
        <option
          value
          v-t="'form__select_grade'"
        />
        <option
          v-for="(g, i) in grades"
          :key="i"
          :value="g.id"
        >
          {{ g.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'GradeOption',

  data () {
    return {
      curGradeId: 0,
      loading: true
    }
  },

  computed: {
    ...mapState({
      grades: state => state.grades.all
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
    this.retrieveGrades()
      .then(() => {
        that.loading = false
      })
  },

  methods: {
    ...mapActions({
      retrieveGrades: 'grades/actionAllGrades'
    }),

    changeGrade () {
      let grade = this.grades.find(x => x.id === this.question.gradeId)

      this.question.grade = grade
      this.question.gradeId = grade.id
      this.question.gradeName = grade.name
      this.$emit('change', grade)
    }
  }

}
</script>

<style lang="scss" scoped>
.grade-option {
  @extend .grade-option, .form-group, .row;
}
</style>
