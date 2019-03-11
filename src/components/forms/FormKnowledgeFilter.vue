<template>
  <form class="knowledge-filter">
    <div class="knowledge-filter__subject">
      <div class="form-group">
        <label
          for="js-subjects"
        ><span v-t="'all__subject'" />:</label>
        <select
          class="form-control"
          id="js-subjects"
          name="subjects"
          v-model="curSubject"
        >
          <option value>
            Selecione uma matéria
          </option>
          <option
            v-for="(subject, i) in subjects"
            :key="i"
            :value="subject.code"
          >
            {{ subject.name }}
          </option>
        </select>
      </div>
    </div>

    <div class="knowledge-filter__knowledges">
      <input-select-knowledge
        :available-knowledges="this.availableKnowledges"
        @select="updateKnowledges"
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
    availableKnowledges () {
      let subject = this.subjects.filter(x => x.code === this.curSubject)
      if (subject.length > 0) {
        let knowledges = subject[0].knowledge
        return knowledges
      }
      return []
    }
  },

  methods: {
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
  @extend .row;

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
