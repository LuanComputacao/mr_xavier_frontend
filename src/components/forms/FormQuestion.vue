<template>
  <div>
    <form
      action
      method="POST"
    >
      <div class="row">
        <div
          class="col-auto"
          v-t="'all--type'"
        >
          :
        </div>
        <div class="col-auto">
          <label for="type-closed">
            <input
              id="type-closed"
              type="radio"
              name="type"
              value="1"
              v-model.number="type"
            >
            {{ $t('all--closed') }}
          </label>
        </div>
        <div class="col-auto">
          <label for="type-open">
            <input
              id="type-open"
              type="radio"
              name="type"
              value="2"
              v-model.number="type"
            >
            {{ $t('all--closed') }}
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="subject">Selecione uma matéria</label>
        <select
          class="form-control"
          name="subject"
          id="subject"
          v-model="subject"
        >
          <option value>
            Selectione uma matéria
          </option>
          <option
            v-for="(availableSubject, i) in availableSubjects"
            :key="i"
            :value="availableSubject"
          >
            {{ availableSubject.name }}
          </option>
        </select>
      </div>

      <input-select-knowledge
        :available-knowledges="subject.knowledge"
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
          step="0.5"
          :max="levelRange"
          v-model.number="level"
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
                  :name="'option-checkbox[' + j + ']'"
                  @click="updateCorrectAnswers(j)"
                  :data-number="i"
                >
              </div>
            </div>
            <input
              class="form-control"
              type="text"
              :name="'option-text[' + j + ']'"
              @change="updateAnswersOptions(j)"
              :data-number="i"
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
          v-model.number="lines"
        >
      </div>

      <div class="form-question__buttons">
        <div class="form-question__buttons-group">
          <button-default
            theme="info"
            @click="toggleModal"
          >
            Preview
          </button-default>
          <button-default>Salvar rascunho</button-default>
          <button-default theme="warning">
            Publicar
          </button-default>
        </div>
      </div>
    </form>

    <modal-default
      :show="showPreview"
      @dispose="toggleModal"
    >
      <template slot="header">
        Detalhes da questão
      </template>
      <template slot="body">
        <question-preview
          :subject="subject.name"
          :knowledges="knowledges.map(x=> x.name)"
          :degree="degree"
          :level="level"
          :wording="wording"
          :type="type"
          :lines="lines"
          :options="options"
        />
      </template>
      <template slot="footer">
        <button-default
          @click="toggleModal"
        >
          Fechar
        </button-default>
      </template>
    </modal-default>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import InputSelectKnowledge from '@/components/forms/inputs/InputSelectKnowledge'
import ButtonDefault from '@/components/buttons/ButtonDefault'
import ModalDefault from '@/components/modals/ModalDefault'
import QuestionPreview from '@/components/QuestionPreview'

export default {
  name: 'FormQuestion',

  components: {
    InputSelectKnowledge,
    ButtonDefault,
    ModalDefault,
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
    },
    availableDegrees: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data () {
    return {
      showPreview: false,
      availableKnowledges: [],
      subject: {},
      knowledges: [],
      level: null,
      wording: '',
      degree: 0,
      type: 1,
      options: [],
      lines: 0
    }
  },

  computed: {
    ...mapState({
      availableSubjects: state => state.subjects.all
    })
  },

  created () {
    this.$store.dispatch('subjects/getAllSubjects')
    this.level = this.levelValue ? this.levelValue : 0
    for (let i = 0; i < 5; i++) {
      this.options[i] = {
        isTrue: false,
        text: ''
      }
    }
  },

  methods: {
    updateKnowledges (knowledges) {
      this.knowledges = knowledges
    },

    updateCorrectAnswers (number) {
      let answers = document.querySelector("[name*='option-checkbox[" + number + "]']")
      this.options[number]['isTrue'] = (answers.checked === true)
    },

    updateAnswersOptions (number) {
      let answers = document.querySelector("[name*='option-text[" + number + "]']")
      this.options[number]['text'] = answers.value
    },

    toggleModal () {
      this.showPreview = !this.showPreview
    }
  }
}
</script>
<style lang="scss" scoped>
.form-question{
  &__buttons{
    @extend .row, .pb-3, .pt-3, .justify-content-end;
  }
  &__buttons-group{
    @extend .col-auto;
  }
}

</style>
