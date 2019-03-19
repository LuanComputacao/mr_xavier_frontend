<template>
  <table class="questions-table">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Enunciado</th>
        <th />
        <th>Fase de Ensino</th>
        <th>Nível</th>
        <th>Editar</th>
        <th>Apagar</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(question, i) in questions"
        :key="i"
      >
        <td>
          <font-awesome-icon
            v-if="question.type"
            icon="pencil-alt"
            class="questions-table__type questions-table__type--open"
          />
          <font-awesome-icon
            v-else
            icon="check"
            class="questions-table__type questions-table__type--close"
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
        <td>{{ question.grade }}</td>
        <td>{{ question.level }}</td>
        <td>
          <router-link :to="{name:'edit-question', params: {id: question.id}}">
            <font-awesome-icon
              icon="edit"
            />
          </router-link>
        </td>
        <td>
          <font-awesome-icon
            class="text-danger"
            icon="trash"
            @click="deleteQuestion(question.id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TableQuestion',

  props: {
    questions: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteQuestion (questionId) {
      confirm('Do you want to delete the question ' + questionId + '?')
    },
    showQuestionDetails (question) {
      console.log(question)
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
      color: $blue-dark;
    }

    &--close{
      color: $blue-dark;
    }
  }

  &__view{
    &:hover{
      cursor: pointer;
    }
    @extend .text-info;
  }
}
</style>
