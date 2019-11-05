<template>
  <div class="grade-option form-group row">
    <label
      class="col-auto col-form-label"
      for="js-grades"
      v-t="'form__select_grade'"
    />
    <div class="col">
      <select
        class="form-control"
        id="js-grades"
        name="grades"
        v-model="curGradeId"
        @change="changeGrade"
      >
        <option
          value
          v-t="'form__select_grade'"
        />
        <option
          v-for="(grade, i) in grades"
          :key="i"
          :value="grade.id"
        >
          {{ grade.name }}
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
      curGradeId: {}
    }
  },

  computed: {
    ...mapState({
      grades: state => state.grades.all
    })
  },

  created () {
    this.retrieveGrades()
  },

  methods: {
    ...mapActions({
      retrieveGrades: 'grades/actionAllGrades'
    }),

    changeGrade () {
      this.$emit('change', this.grades.find(x => x.id === this.curGradeId))
    }
  }

}
</script>

<style lang="scss" scoped>
.grade-option {
  @extend .grade-option, .form-group, .row;
}
</style>
