<template>
  <div>
    <label for="knowledges">Conhecimentos necessários:</label>
    <select multiple name="knowledges" id="knowledges" @change="doSelection" v-model="knowledges">
      <option
        v-for="(knowledge, i) in availableKnowledges"
        :key="i"
        :value="knowledge.code"
      >{{knowledge.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'InputSelectKnowledge',

  props: {
    availableKnowledges: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data () {
    return {
      knowledges: []
    }
  },

  methods: {
    doSelection (e) {
      this.$emit('select', this.knowledges)
    }
  }
}
</script>
