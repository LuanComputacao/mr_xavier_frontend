<template>
  <div class="knowledge-option">
    <div class="form-group">
      <label for="knowledge-options">Selecione um conhecimento:</label>
      <div
        v-if="availableKnowledges.length < 1"
        class="alert-info"
      >
        Nenhum conhecimento disponível para esta matéria
      </div>
      <select
        v-else
        multiple
        class="form-control"
        id="knowledge-options"
        v-model="question.knowledges"
        @change="changeKnowledges"
      >
        <option
          v-for="(knowledge, i) in availableKnowledges"
          :value="knowledge.id"
          :key="i"
        >
          {{ knowledge.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KnowledgeOption',

  props: {
    knowledges: {
      type: Array,
      default: () => []
    },

    availableKnowledges: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    knowledges () {
      this.selectedKnowledgesIds = this.knowledges.map(a => a.id)
    }
  },

  data () {
    return {
      selectedKnowledgesIds: []
    }
  },

  computed: {
    ...mapState({
      question: state => state.questions.question
    }),

    selectedKnowledges () {
      return this.availableKnowledges.filter(x => this.selectedKnowledgesIds.indexOf(x.id) >= 0)
    }
  },

  methods: {
    changeKnowledges (e) {
      this.$emit('change', this.selectedKnowledges)
    }
  }

}
</script>

<style>

</style>
