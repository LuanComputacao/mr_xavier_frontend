<template>
  <form>
    <div>
      <label for="subjects">Matéria:</label>
      <select name="subjects" id="js-subjects" v-model="curSubject">
        <option value>Selecione uma matéria</option>
        <option v-for="(subject, i) in subjects" :key="i" :value="subject.code">{{subject.name}}</option>
      </select>
    </div>

    <input-select-knowledge
      :availableKnowledges="this.availableKnowledges"
      @select="updateKnowledges"
    ></input-select-knowledge>

    <button @click.prevent="raiseFilter">Filtrar</button>
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
