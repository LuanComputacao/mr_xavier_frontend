<template>
  <div>
    <table class="questions-table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Enunciado</th>
          <th />
          <th>Fase de Ensino</th>
          <th>Nível</th>
          <th class="questions-table__edit">
            Editar
          </th>
          <th class="questions-table__delete">
            Apagar
          </th>
        </tr>
      </thead>
      <tbody v-if="questions.length > 0">
        <tr
          v-for="(question, i) in questions"
          :key="i"
        >
          <td>
            <font-awesome-icon
              v-if="question.type == questionType.discursive"
              icon="check"
              class="questions-table__type questions-table__type--close"
            />
            <font-awesome-icon
              v-else
              icon="pencil-alt"
              class="questions-table__type questions-table__type--open"
            />
          </td>

          <td>{{ question.wording }}</td>
          <td>
            <a @click="showQuestionDetails(question)">
              <font-awesome-icon
                class="questions-table__view"
                icon="eye"
              />
            </a>
          </td>
          <td>
            <span v-if="question.gradeName">{{ question.gradeName }}</span>
            <span v-else> ? </span>
          </td>
          <td>{{ question.level }}</td>
          <td class="questions-table__edit">
            <router-link :to="{name:'edit-question', params: {id: question.id}}">
              <font-awesome-icon
                icon="edit"
              />
            </router-link>
          </td>
          <td class="questions-table__delete">
            <font-awesome-icon
              class="text-danger"
              icon="trash"
              @click="deleteQuestion(question.id)"
            />
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td
            colspan="7"
            class="questions-table__loading-row"
          >
            Carregando questões
          </td>
        </tr>
      </tbody>
    </table>
    <modal-default
      :show="showDetails"
      @dispose="toggleModal"
    >
      <template slot="header">
        Detalhes da questão
      </template>
      <template slot="body">
        <div v-if="currentQuestion">
          <question-preview
            :subject="subjects.find(x => x.id === currentQuestion.subjectId) || {}"
            :knowledges="currentQuestion.knowledges"
            :grade="grades.find(x => x.id === currentQuestion.gradeId) || {}"
            :level="currentQuestion.level"
            :wording="currentQuestion.wording"
            :type="currentQuestion.type"
            :lines="currentQuestion.lines"
            :options="currentQuestion.options"
          />
        </div>
      </template>
      <template slot="footer">
        <button-default
          @click="toggleModal"
        >
          Fechar
        </button-default>
        <button-default
          theme="info"
          @click="editQuestion"
        >
          Editar
        </button-default>
        <button-default theme="danger">
          Deletar
        </button-default>
      </template>
    </modal-default>
  </div>
</template>
<script>
import ModalDefault from '@/components/modals/ModalDefault'
import ButtonDefault from '@/components/buttons/ButtonDefault'
import QuestionPreview from '@/components/QuestionPreview'
import { mapState } from 'vuex'

export default {
  name: 'TableQuestion',

  components: {
    ModalDefault,
    QuestionPreview,
    ButtonDefault
  },

  props: {
    questions: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapState({
      questionType: state => state.questions.type,
      grades: state => state.grades.all,
      subjects: state => state.subjects.all
    })
  },

  data () {
    return {
      showDetails: false,
      currentQuestion: null
    }
  },

  methods: {
    deleteQuestion (questionId) {
      confirm('Do you want to delete the question ' + questionId + '?')
    },

    toggleModal () {
      this.showDetails = !this.showDetails
    },

    showQuestionDetails (question) {
      this.currentQuestion = question
      this.toggleModal()
    },

    editQuestion () {
      let questionId = this.currentQuestion.id
      this.$router.push({ name: 'edit-question', params: { id: questionId } })
    }
  }
}
</script>
<style lang="scss" scoped>
.questions-table{
  @extend .table, .table-striped, .mb-3;

  &__type{
    text-align: center;

    &--open{
      color: $blue-light;
    }

    &--close{
      color: $blue-light;
    }
  }

  &__edit{
    display: none;
    @include media-breakpoint-up("sm") {
      display: table-cell;
    }
  }

  &__delete{
    display: none;
    @include media-breakpoint-up("sm") {
      display: table-cell;
    }

  }

  &__view{
    &:hover{
      cursor: pointer;
    }
    @extend .text-info;
  }

  &__loading-row{
    text-align: center;
  }
}
</style>
