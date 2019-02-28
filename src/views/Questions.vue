<template>
  <div class="questions">
    <nav>
        <router-link to='/'>Home</router-link>
    </nav>
    <h1>Questoes</h1>
    <form>
      <label for="subjects">Matéria:</label>
      <select name="subjects" id="js-subjects" v-model="curSubject">
        <option value>Selecione uma matéria</option>
        <option v-for="(subject, i) in subjects" :key="i" :value="subject.code">{{subject.name}}</option>
      </select>

      <select multiple name="knowledge" id="js-knowledge">
        <option v-for="(knowledge, i) in availableKnowledges" :key="i" value>{{knowledge.name}}</option>
      </select>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Questions',

  data () {
    return {
      curSubject: '',
      subjects: [
        {
          code: 'port',
          name: 'Português',
          knowledge: [
            {
              code: 'predicate',
              name: 'Predicado'
            }
          ]
        },
        {
          code: 'mat',
          name: 'Matemática',
          knowledge: [
            {
              code: 'sum',
              name: 'Soma'
            }
          ]
        },
        {
          code: 'hist',
          name: 'História',
          knowledge: [
            {
              code: 'br_general',
              name: 'História Geral do Brasil'
            }
          ]
        }
      ]
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
  }
}
</script>
