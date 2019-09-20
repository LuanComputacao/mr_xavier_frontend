<template>
  <div>
    <div
      v-if="availableKnowledges.length > 0"
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
        <option value="">
          Qualquer um
        </option>
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
<style lang="scss">

</style>
