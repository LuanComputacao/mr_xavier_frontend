<template>
  <div class="question-create">
    <h1
      class="text-center"
      v-t="'creating_question--title'"
    />
    <div class="form-question">
      <type-radio
        :type="type"
        @change="updateType"
      />

      <subject-option
        :subject-id="subjectId"
        @change="updateSubject"
      />

      <knowledge-option
        v-if="subject"
        :knowledges="subject.knowledges || []"
        @change="updateKnowledges"
      />

      <grade-option
        @change="updateGrade"
      />

      <level-input-range
        :level="level"
        @change="updateLevel"
      />

      <wording-text-area
        :wording="wording"
        @updateWording="updateWording"
      />

      <question-options-inputs
        v-if="type == questionTypes.objective"
        @update="updateQuestionOptions"
      />
      <question-lines-number
        v-else-if="type === questionTypes.discursive"
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
import { mapState, mapActions } from 'vuex'

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
      console.log(this.sQuestion)
      this.type = this.sQuestion.type
      this.subjectId = this.sQuestion.subjectId
      this.knowledges = this.sQuestion.knowledges
      this.gradeId = this.sQuestion.gradeId
      this.level = this.sQuestion.level
      this.wording = this.sQuestion.wording
      this.options = this.sQuestion.options
      this.spaces = this.sQuestion.spaces
      this.showPreview = this.sQuestion.showPreview
      this.published = this.sQuestion.published
    }
  },

  computed: {
    ...mapState({
      questionTypes: state => state.questions.type,
      sQuestion: state => state.questions.question
    }),

    question () {
      return {
        'authorId': 1,
        'gradeId': this.grade.id,
        'knowledges': this.knowledges,
        'level': this.level,
        'spaces': this.lines,
        'subjectId': this.subject.id,
        'wording': this.wording,
        'type': this.type,
        'published': this.published
      }
    }
  },

  methods: {
    ...mapActions({
      saveQuestion: 'questions/actionCreateQuestion'
    }),
    updateType (value) {
      this.type = value
    },

    updateGrade (value) {
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
      this.saveQuestion(this.question)
        .then(data => {
          alert('Questão salva com sucesso')
        })
    },

    publish () {
      this.published = true
      this.saveQuestion(this.question)
        .then((data) => {
          alert('Questão salva com sucesso')
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
