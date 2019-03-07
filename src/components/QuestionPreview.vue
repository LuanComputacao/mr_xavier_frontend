<template>
  <div>
    <h2>Pre-visualização:</h2>
    Matéria: {{subject}}
    <br>
    Conhecimentos: {{knowledges.join(' ; ')}}
    <br>
    Fase de Ensino: {{degree}}
    <br>
    Nível: {{level}}
    <br>
    Enunciado:
    {{wording}}
    <br>
    <div v-if="type === 1">
      Linhas:
      <hr v-for="(i, j) in Number.parseInt(lines)" :key="j">
    </div>
    <div v-else-if="type === 2">
      Linhas:
      <hr v-for="(i, j) in Number.parseInt(lines)" :key="j">
    </div>
    <div v-else>
      <span>A questão não possui um tipo selecionado</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionPreview',

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
    degree: {
      type: String,
      required: true,
      default: ''
    },
    level: {
      type: Number,
      required: true,
      default: () => {}
    },
    wording: {
      type: String,
      required: true,
      default: ''
    },
    lines: {
      type: String,
      required: false,
      default: '0'
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
