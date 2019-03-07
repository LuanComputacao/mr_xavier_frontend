<template>
  <div>
    <form action method="POST">
      <div>
        Tipo:
        <label for="type">
          <input type="radio" name="type" value="1" v-model.number="type">Objetiva
        </label>
        <label for="type">
          <input type="radio" name="type" value="2" v-model.number="type">Discursiva
        </label>
      </div>

      <div>
        <label for="subject">Selecione uma matéria</label>
        <select name="subject" id="subject">
          <option value>Selectione uma matéria</option>
          <option v-for="(subject, i) in subjects" :key="i" value="subject.code">{{subject.name}}</option>
        </select>
      </div>

      <input-select-knowledge
        :availableKnowledges="this.availableKnowledges"
        @select="updateKnowledges"
      ></input-select-knowledge>

      <div>
        <label for="degree">Fase de ensino</label>
        <select name="degree" id="degree">
          <option value>Selecione uma fase de ensino</option>
          <option v-for="(degree, i) in degrees" :key="i" value="degree.code">{{degree.name}}</option>
        </select>
      </div>

      <div>
        <label for="level">Nível:</label>
        <input type="range" min="0" max="levelRange" v-model="level">
        {{level}}
      </div>

      <div>
        <label for="wording">Enunciado:</label>
        <textarea name="wording" id="wording" cols="50" rows="5" v-model="wording"></textarea>
      </div>

      <div v-if="Number.parseInt(type)===1">
        <div v-for="(i, j) in 5" :key="j">
          <input
            type="checkbox"
            :name="'option-checkbox[' + i + ']'"
            @change="updateCorrectAnswers"
          >
          <input type="text" :name="'option-text[' + i + ']'" @change="updateCorrectAnswers">
        </div>
      </div>
      <div v-else-if="Number.parseInt(type)===2">
        <label for="lines">Lines:</label>
        <input id="lines" name="lines" type="number" min="0" max="50">
      </div>

      <question-preview
        :subject="subject"
        :knowledges="knowledges"
        :degree="degree"
        :level="level"
        :wording="wording"
        :type="type"
      ></question-preview>

      <input type="button" value="Salvar Rascunho">
      <input type="button" value="Publicar">
    </form>
  </div>
</template>
<script>
import InputSelectKnowledge from '@/components/forms/inputs/InputSelectKnowledge'
import QuestionPreview from '@/components/QuestionPreview'

export default {
  name: 'FormQuestion',

  components: {
    InputSelectKnowledge,
    QuestionPreview
  },

  props: {
    subjects: {
      type: Array,
      required: true,
      default: () => []
    },
    degrees: {
      type: Array,
      required: true,
      default: () => []
    },
    levelRange: {
      type: Number,
      required: true,
      default: 10
    },
    levelValue: {
      type: Number,
      required: false,
      default: null
    }
  },

  data () {
    return {
      availableKnowledges: [],
      subject: '',
      knowledges: [],
      level: null,
      wording: '',
      degree: '',
      type: 1,
      options: {}
    }
  },

  created () {
    this.level = this.levelValue ? this.levelValue : this.levelRange / 2
    for (let i = 0; i < 5; i++) {
      this.options[i] = {}
    }
  },

  methods: {
    updateKnowledges (knowledges) {
      this.knowledges = knowledges
    },

    updateCorrectAnswers () {
      let answers = document.querySelectorAll("[name*='option-radio']")
      console.log(answers)
    },
    updateAnswersOptions () {
      let answers = document.querySelectorAll("[name*='option-text']")
      answers.forEach(element => {
        console.log(element)
      })
    }
  }
}
</script>
