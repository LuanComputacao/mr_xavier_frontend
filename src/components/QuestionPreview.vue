<template>
  <div class="question-preview">
    <h2 class="text-center">
      Pre-visualização de Questão
    </h2>
    <hr>
    <div class="question-preview__details">
      <div class="row">
        <div class="col-12">
          <span class="font-weight-bold">Matéria:</span>
          {{ subject }}
        </div>
        <div class="col-12">
          <span class="font-weight-bold">Fase de Ensino:</span>
          {{ grade.name }} ({{ grade.code }})
        </div>
        <div class="col-12">
          <span class="font-weight-bold">Nível:</span>
          {{ level }}
        </div>
      </div>

      <div class="row">
        <div class="col-12 font-weight-bold">
          Conhecimentos:
        </div>
        <div class="col-12">
          <span
            v-for="(knowledge, i) in knowledges"
            :key="i"
            class="badge badge-pill badge-info mr-1"
          >{{ knowledge }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <question-card
            :type="type"
            :wording="wording"
            :options="_options"
            :lines="lines"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestionCard from '@/components/QuestionCard'

export default {
  name: 'QuestionPreview',

  components: {
    QuestionCard
  },

  props: {
    type: {
      type: Number,
      required: true,
      default: -1
    },
    subject: {
      type: String,
      required: true,
      default: ''
    },
    knowledges: {
      type: Array,
      required: true,
      default: () => []
    },
    grade: {
      type: Object,
      required: true,
      default: () => {}
    },
    level: {
      type: Number,
      required: true,
      default: 0
    },
    wording: {
      type: String,
      required: true,
      default: ''
    },
    lines: {
      type: Number,
      required: false,
      default: 0
    },
    options: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  computed: {
    _options () { return this.options }
  }
}
</script>

<style lang="scss" scoped>
.question-preview {
  @extend .border, .shadow, .rounded, .col, .pt-3, .pb-3;
}
</style>
