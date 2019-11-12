<template>
  <form class="knowledge-filter">
    <div class="knowledge-filter__subject">
      <div class="form-group">
        <label
          for="js-subjects"
        ><span v-t="'all--subject'" />:</label>
        <select
          class="form-control"
          id="js-subjects"
          name="subjects"
          v-model="curSubject"
          @change="updateSubject"
        >
          <option value>
            Selecione uma matéria
          </option>
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

    <div class="knowledge-filter__knowledges">
      <input-select-knowledge
        :available-knowledges="this.availableKnowledges"
        @select="setFilterKnowledges"
      />
    </div>

    <div class="knowledge-filter__confirm">
      <button
        class="knowledge-filter__button"
        @click.prevent="raiseFilter"
      >
        Filtrar
      </button>
    </div>
  </form>
</template>

<script>
import InputSelectKnowledge from '@/components/forms/inputs/InputSelectKnowledge'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FormKnowledgeFilter',

  components: {
    InputSelectKnowledge
  },

  props: {
    subjects: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      curSubject: '',
      knowledges: []
    }
  },

  computed: {
    ...mapState({
      filters: state => state.questions.filters
    }),

    availableKnowledges () {
      let subject = this.subjects.filter(x => x.id === this.curSubject)
      return (subject.length > 0) ? subject[0].knowledges : []
    }
  },

  methods: {
    ...mapMutations({
      setFilterSubject: 'questions/setFilterSubject',
      setFilterKnowledges: 'questions/setFilterKnowledges'
    }),

    updateSubject (e) {
      let subjectId = Number.parseInt(e.target.value)

      this.setFilterSubject((isNaN(subjectId) ? 0 : subjectId))
    },

    raiseFilter () {
      this.$emit('filterKnowledge', this.curSubject, this.knowledges)
    },

    updateKnowledges (knowledges) {
      this.knowledges = knowledges
    }
  }
}
</script>

<style lang="scss" scoped>
.knowledge-filter {

  @extend .row, .pb-3;

  &__confirm{
    @extend .col-12, .text-center;
  }

  &__button {
    @extend .btn, .btn-primary;
  }

  &__knowledges {
    @extend .col-12;
  }

  &__subject {
    @extend .col-12;
  }
}
</style>
