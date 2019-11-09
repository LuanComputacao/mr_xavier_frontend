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

  props: {
    gradeId: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      curGradeId: 0
    }
  },

  watch: {
    gradeId () {
      this.curGradeId = this.gradeId
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
