<template>
  <div>
    <form
      action
      method="POST"
    >
      <div>
        Tipo:
        <label for="type">
          <input
            type="radio"
            name="type"
            value="1"
            v-model.number="type"
          >Objetiva
        </label>
        <label for="type">
          <input
            type="radio"
            name="type"
            value="2"
            v-model.number="type"
          >Discursiva
        </label>
      </div>

      <div class="form-group">
        <label for="subject">Selecione uma matéria</label>
        <select
          class="form-control"
          name="subject"
          id="subject"
        >
          <option value>
            Selectione uma matéria
          </option>
          <option
            v-for="(availableSubject, i) in availableSubjects"
            :key="i"
            value="availableSubject.code"
          >
            {{ availableSubject.name }}
          </option>
        </select>
      </div>

      <input-select-knowledge
        :available-knowledges="this.availableKnowledges"
        @select="updateKnowledges"
      />

      <div class="form-group">
        <label for="degree">Fase de ensino</label>
        <select
          class="form-control"
          name="degree"
          id="degree"
        >
          <option value>
            Selecione uma fase de ensino
          </option>
          <option
            v-for="(availableDegree, i) in availableDegrees"
            :key="i"
            value="availableDegree.code"
          >
            {{ availableDegree.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="level">Nível:</label>
        <input
          class="custom-range"
          type="range"
          min="0"
          :max="levelRange"
          v-model="level"
        >
        {{ level }}
      </div>

      <div class="form-group">
        <label for="wording">Enunciado:</label>
        <textarea
          class="form-control"
          name="wording"
          id="wording"
          rows="5"
          v-model="wording"
        />
      </div>

      <div v-if="Number.parseInt(type)===1">
        <span>Opções:</span>
        <div
          v-for="(i, j) in 5"
          :key="j"
        >
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input
                  type="checkbox"
                  :name="'option-checkbox[' + i + ']'"
                  @change="updateCorrectAnswers"
                >
              </div>
            </div>
            <input
              class="form-control"
              type="text"
              :name="'option-text[' + i + ']'"
              @change="updateCorrectAnswers"
            >
          </div>
        </div>
      </div>
      <div v-else-if="Number.parseInt(type)===2">
        <label for="lines">Lines:</label>
        <input
          id="lines"
          name="lines"
          type="number"
          min="0"
          max="50"
          v-model="lines"
        >
      </div>

      <div class="form-question__buttons">
        <div class="form-question__buttons-group">
          <button class="form-question__button">
            Preview
          </button>
          <input
            class="form-question__button"
            type="button"
            value="Salvar Rascunho"
          >
          <input
            class="form-question__button"
            type="button"
            value="Publicar"
          >
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import InputSelectKnowledge from '@/components/forms/inputs/InputSelectKnowledge'

export default {
  name: 'FormQuestion',

  components: {
    InputSelectKnowledge
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
    },
    availableSubjects: {
      type: Array,
      required: false,
      default: () => []
    },
    availableDegrees: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data () {
    return {
      availableKnowledges: [],
      subject: '',
      knowledges: [],
      level: null,
      wording: '',
      degree: 0,
      type: 1,
      options: {},
      lines: 0
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
<style lang="scss" scoped>
.form-question{
  &__buttons{
    @extend .row;
  }
  &__buttons-group{
    @extend .col, .justify-content-center;
  }
  &__button{
    align-self: center;
    @extend .btn, .btn-primary, .mt-1, .ml-1, .mr-1;
  }
}

</style>
