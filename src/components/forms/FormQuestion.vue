<template>
  <div class="question-create">
    <div class="form-question">
      <type-radio
        :type="question.type"
      />

      <subject-option
        :subject-id="subjectId"
        @change="updateSubject"
      />

      <knowledge-option
        v-if="subject"
        :available-knowledges="subject.knowledges"
        :knowledges="knowledges"
        @change="updateKnowledges"
      />

      <grade-option
        :grade-id="gradeId"
        @change="updateGrade"
      />

      <level-input-range
        :level="level"
        @change="updateLevel"
      />

      <wording-text-area
        :wording="wording"
      />

      <question-options-inputs
        v-if="question.type == questionTypes.objective"
        @update="updateQuestionOptions"
      />
      <question-lines-number
        v-else-if="question.type === questionTypes.discursive"
        :lines="spaces"
        @change="updateLines"
      />
      <div
        v-else
        class="alert-info"
      >
        Selecione o tipo da questão
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
          <button-default
            theme="warning"
            @click="publish"
          >
            Publicar
          </button-default>
        </div>
      </div>
    </div>
    <modal-default
      :show="showPreview"
      @dispose="toggleModal"
    >
      <template slot="header">
        Detalhes da questão
      </template>
      <template slot="body">
        <question-preview
          :subject="subject"
          :knowledges="knowledges"
          :grade="grade"
          :level="level"
          :wording="wording"
          :type="question.type"
          :lines="spaces"
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

import TypeRadio from '@/components/forms/question/TypeRadio.vue'
import SubjectOption from '@/components/forms/question/SubjectOption.vue'
import KnowledgeOption from '@/components/forms/question/KnowledgeOption.vue'
import GradeOption from '@/components/forms/question/GradeOption.vue'
import ButtonDefault from '@/components/buttons/ButtonDefault.vue'
import QuestionPreview from '@/components/QuestionPreview.vue'
import ModalDefault from '@/components/modals/ModalDefault.vue'
import LevelInputRange from '@/components/forms/question/LevelInputRange.vue'
import WordingTextArea from '@/components/forms/question/WordingTextArea.vue'
import QuestionOptionsInputs from '@/components/forms/question/QuestionOptionsInputs.vue'
import QuestionLinesNumber from '@/components/forms/question/QuestionLinesNumber.vue'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'FormQuestion',

  components: {
    TypeRadio,
    SubjectOption,
    KnowledgeOption,
    GradeOption,
    LevelInputRange,
    WordingTextArea,
    QuestionOptionsInputs,
    QuestionLinesNumber,
    ModalDefault,
    ButtonDefault,
    QuestionPreview
  },

  props: {
    questionId: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data () {
    return {
      type: '',
      subject: {},
      subjectId: 0,
      knowledges: [],
      grade: {},
      gradeId: 0,
      level: 0,
      wording: '',
      options: [],
      spaces: 0,
      showPreview: false,
      published: false
    }
  },

  mounted () {
    if (this.questionId > 0) {
      console.log(this.question)
      this.type = this.question.type
      this.subjectId = this.question.subjectId
      this.knowledges = this.question.knowledges
      this.gradeId = this.question.gradeId
      this.level = this.question.level
      this.wording = this.question.wording
      this.options = this.question.options
      this.spaces = this.question.spaces
      this.showPreview = this.question.showPreview
      this.published = this.question.published
    }
  },

  computed: {
    ...mapState({
      questionTypes: state => state.questions.type,
      question: state => state.questions.question,
      sQuestionOptions: state => state.questionOptions.all
    }),

    ...mapGetters({
      questionData: 'questions/questionData'
    })
  },

  methods: {
    ...mapActions({
      saveQuestion: 'questions/actionCreateQuestion',
      saveOptions: 'questionOptions/actionCreateQuestionOptions'
    }),

    updateGrade (value) {
      this.gradeId = value.id
      this.grade = value
    },

    updateSubject (value) {
      this.subject = value
    },

    updateKnowledges (value) {
      this.knowledges = value
    },

    updateLevel (value) {
      this.level = parseInt(value)
    },

    updateWording (value) {
      this.wording = value
    },

    updateQuestionOptions (value) {
      this.options = value
    },

    updateLines (value) {
      this.spaces = parseInt(value)
    },

    toggleModal () {
      this.showPreview = !this.showPreview
    },

    saveDraft () {
      this.published = false
      this.saveQuestion()
    },

    publish () {
      this.published = true
      this.saveQuestion()
    },

    saveQuestion () {
      let that = this
      this.saveQuestion(this.questionData)
        .then(() => {
          that.saveOptions()
        })
    },

    saveOptions () {
      let that = this

      this.saveOptions({
        questionId: that.question.id,
        options: that.options
      })
    }
  }
}
</script>

<style lang="scss">
.question-create{
  @extend .mb-1, .container;
}
</style>
