<template>
  <div class="knowledge-option">
    <div class="form-group">
      <label for="knowledge-options">Selecione uma matéria</label>
      <div
        v-if="knowledges.length < 1"
        class="alert-info"
      >
        Nenhum conhecimento disponível para esta matéria
      </div>
      <select
        v-else
        multiple
        class="form-control"
        id="knowledge-options"
        v-model="selectedKnowledgesIds"
        @change="changeKnowledges"
      >
        <option
          v-for="(knowledge, i) in knowledges"
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
export default {
  name: 'KnowledgeOption',

  props: {
    knowledges: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      selectedKnowledgesIds: []
    }
  },

  computed: {
    selectedKnowledges () {
      return this.knowledges.filter(x => this.selectedKnowledgesIds.indexOf(x.id) > -1)
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
