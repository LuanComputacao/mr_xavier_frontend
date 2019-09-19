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
              v-if="question.type == 1"
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
          <td>{{ question.grade.name }}</td>
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
            :subject="currentQuestion.subject.name"
            :knowledges="currentQuestion.knowledges.map( x => x.name)"
            :grade="currentQuestion.grade"
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
        <button-default theme="info">
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
