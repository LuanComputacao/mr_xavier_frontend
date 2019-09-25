<template>
  <div class="form-group-knowledge">
    <label
      for="js-subjects"
      v-t="'form__select_subject'"
    />
    <select
      class="form-control"
      id="js-subjects"
      name="subjects"
      v-model="curSubjectCode"
    >
      <option
        value
        v-t="'form__select_subject'"
      />
      <option
        v-for="(subject, i) in subjects"
        :key="i"
        :value="subject.code"
      >
        {{ subject.name }}
      </option>
    </select>

    <input-select-knowledge
      :available-knowledges="this.availableKnowledges"
      :initial-knowledge-group="this.initialKnowledgeGroup"
      @select="updateKnowledges"
    />
  </div>
</template>

<script>
import InputSelectKnowledge from '../inputs/InputSelectKnowledge'
export default {
  name: 'FormGroupKnowledgeSelector',
  components: { InputSelectKnowledge },
  props: {
    subjects: {
      type: Array,
      required: true,
      default: () => []
    },
    initialSubject: {
      type: Object,
      required: false,
      default: () => {}
    },
    initialKnowledgeGroup: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      curSubjectCode: ''
    }
  },
  mounted () {
    this.curSubjectCode = this.initialSubject.code
  },

  computed: {
    curSubject () {
      return this.subjects.find(x => x.code === this.curSubjectCode)
    },
    availableKnowledges () {
      return (typeof this.curSubject !== 'undefined') ? this.curSubject.knowledges : []
    }
  },
  methods: {
    updateKnowledges (knowledges) {
      this.$emit('select-subject-knowledges', this.curSubject, knowledges)
    }
  }
}
</script>
