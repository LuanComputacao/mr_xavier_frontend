<template>
  <table class="questions-table">
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Enunciado</th>
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
        <td v-if="question.type">
          <font-awesome-icon icon="file-alt" />
        </td>
        <td v-else>
          <font-awesome-icon icon="check-square" />
        </td>

        <td>{{ question.wording }}</td>
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
    }
  }
}
</script>
<style lang="scss" scoped>
.questions-table{
  @extend .table, .table-striped, .mb-3;
}
</style>
