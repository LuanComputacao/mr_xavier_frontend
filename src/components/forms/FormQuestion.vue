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
            {{ $t('all--open') }}
          </label>
        </div>
      </div>

      <form-group-knowledge-selector
        :subjects="subjects"
        @select-subject-knowledges="selectSubjectAndKnowledges"
      />

      <div class="form-group">
        <label for="grade"><strong>Fase de ensino</strong></label>
        <select
          class="form-control"
          name="grade"
          id="grade"
          v-model="grade"
        >
          <option value>
            Selecione uma fase de ensino
          </option>
          <option
            v-for="(gradeI, i) in grades"
            :key="i"
            :value="gradeI"
          >
            {{ gradeI.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="level"><strong>Nível:</strong> {{ level }}</label>
        <input
          id="level"
          class="custom-range"
          type="range"
          min="0"
          step="0.5"
          :max="levelRange"
          v-model.number="level"
        >
      </div>

      <div class="form-group">
        <label for="wording"><strong>Enunciado:</strong></label>
        <textarea
          class="form-control"
          name="wording"
          id="wording"
          rows="5"
          v-model="wording"
        />
      </div>

      <div v-if="Number.parseInt(type)===1">
        <span><strong>Opções:</strong></span>
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
          <button-default @click="saveDraft">
            Salvar rascunho
          </button-default>
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
          :grade="grade"
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
import ButtonDefault from '@/components/buttons/ButtonDefault'
import ModalDefault from '@/components/modals/ModalDefault'
import QuestionPreview from '@/components/QuestionPreview'
import FormGroupKnowledgeSelector from './groups/FormGroupKnowledgeSelector'

export default {
  name: 'FormQuestion',

  components: {
    FormGroupKnowledgeSelector,
    ButtonDefault,
    ModalDefault,
    QuestionPreview
  },

  props: {
    edit: {
      type: Boolean,
      required: false,
      default: false
    },
    question: {
      type: Object,
      required: false,
      default: () => {
      }
    },
    subjects: {
      type: Array,
      required: true,
      default: () => []
    },
    grades: {
      type: Array,
      required: true,
      default: () => []
    },
    levelRange: {
      type: Number,
      required: true,
      default: 10
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
      grade: {},
      type: 1,
      options: [],
      lines: 0
    }
  },

  created () {
    this.level = 0
    this.initializeOptionsFields()
  },

  mounted () {
    this.adaptEditOrCreate()
  },

  methods: {
    initializeOptionsFields () {
      for (let i = 0; i < 5; i++) {
        this.options[i] = {
          isTrue: false,
          text: ''
        }
      }
    },

    adaptEditOrCreate () {
      if (this.edit) {
        this.level = this.question.level
        this.wording = this.question.wording
        this.grade = this.question.grade
        this.type = this.question.type
        this.options = this.question.options
        this.lines = this.question.lines
        this.fillSubject()
        this.fillKnowledges()
      }
    },

    fillSubject () {
    },
    fillKnowledges () {
    },

    saveDraft () {
      this.$emit('saveDraft', {
        subject: this.subject,
        knowledges: this.knowledges,
        level: this.level,
        wording: this.wording,
        grade: this.grade,
        type: this.type,
        options: this.options,
        lines: this.lines
      })
    },

    toggleModal () {
      this.showPreview = !this.showPreview
    },

    updateKnowledges (knowledges) {
      this.knowledges = knowledges
    },

    updateCorrectAnswers (number) {
      let answers = document.querySelector('[name*=\'option-checkbox[' + number + ']\']')
      // this.options[number]['isTrue'] = (answers.checked === true)
      this.$set(this.options, number, { isTrue: answers.checked, text: this.options[number]['text'] })
      this.updateOption(number, answers.checked, this.options[number]['text'])
    },

    updateAnswersOptions (number) {
      let answers = document.querySelector('[name*=\'option-text[' + number + ']\']')
      this.updateOption(number, this.options[number]['isTrue'], answers.value)
    },

    updateOption (position, checked, text) {
      this.$set(this.options, position, { isTrue: checked, text: text })
    },

    selectSubjectAndKnowledges (subject, knowledges) {
      console.log(subject, knowledges)
      this.question.subject = subject
      this.question.knowledges = knowledges
    }

  }
}
</script>
<style lang="scss" scoped>
  .form-question {
    &__buttons {
      @extend .row, .pb-3, .pt-3, .justify-content-end;
    }

    &__buttons-group {
      @extend .col-auto;
    }
  }

</style>
