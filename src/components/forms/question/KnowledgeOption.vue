<template>
  <div class="knowledge-option">
    <div />
    <div
      v-if="!hasValidSubject"
      class="alert-info"
    >
      Selectione uma Matéria para ver os conhecimentos dela.
    </div>

    <div
      v-else
      class="form-group"
    >
      <label for="knowledge-options">Selecione um conhecimento:</label>
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
        v-model="question.knowledgesIds"
        @change="changeKnowledges"
      >
        <option
          v-for="(knowledge, i) in question.subject.knowledges"
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

  created () {
    let knowledges = this.question.knowledges
    if (knowledges.length > 0) {
      this.$set(this.question, 'knowledgesIds', knowledges.map(x => x.id))
    }
  },

  computed: {
    question: {
      get () {
        return this.$store.state.questions.question
      },
      set () {
        this.$store.commit('questions/setQuestion')
      }
    },

    knowledges () {
      return this.question.subject.knowledges || []
    },

    hasValidSubject () {
      return typeof this.question.subject !== 'undefined' ? this.question.subject.hasOwnProperty('knowledges') : false
    }

  },

  methods: {
    changeKnowledges (e) {
      let that = this

      that.$set(
        that.question,
        'knowledges',
        that.question.subject.knowledges
          .filter(
            x => that.question.knowledgesIds.indexOf(x.id) >= 0
          )
      )

      this.$emit('change', this.selectedKnowledges)
    }
  }

}
</script>

<style>

</style>
