<template>
  <form>
    <div>
      <label for="subjects">Matéria:</label>
      <select name="subjects" id="js-subjects" v-model="curSubject">
        <option value>Selecione uma matéria</option>
        <option v-for="(subject, i) in subjects" :key="i" :value="subject.code">{{subject.name}}</option>
      </select>
    </div>

    <div>
      <label for="knowledges">Conhecimentos necessários:</label>
      <select multiple name="knowledges" id="knowledges" v-model="knowledges">
        <option
          v-for="(knowledge, i) in availableKnowledges"
          :key="i"
          :value="knowledge.code"
        >{{knowledge.name}}</option>
      </select>
    </div>

    <button @click.prevent="raiseFilter">Filtrar</button>
  </form>
</template>

<script>
export default {
  name: 'FormKnowledgeFilter',

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
      return null
    }
  },

  methods: {
    raiseFilter () {
      this.$emit('filterKnowledge', this.curSubject, this.knowledges)
    }
  }
}
</script>
