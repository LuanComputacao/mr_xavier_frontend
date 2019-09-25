<template>
  <div>
    <div
      class="form-group"
    >
      <label
        for="knowledges"
        v-t="'all--requested_knowledges'"
      >:</label>
      <select
        class="form-control"
        multiple
        name="knowledges"
        id="knowledges"
        @change="doSelection"
        v-model="knowledges"
      >
        <option
          value=""
          v-t="'form__select_any_knowledge'"
        />
        <option
          v-for="(knowledge, i) in availableKnowledges"
          :key="i"
          :value="knowledge"
        >
          {{ knowledge.name }}
        </option>
      </select>
    </div>
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
    },
    initialKnowledgeGroup: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data () {
    return {
      knowledges: []
    }
  },

  mounted () {
    this.knowledges = this.initialKnowledgeGroup
  },

  methods: {
    doSelection (e) {
      this.$emit('select', this.knowledges)
    }
  }
}
</script>
<style lang="scss">

</style>
