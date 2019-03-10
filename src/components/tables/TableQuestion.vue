<template>
  <table>
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
          discursiva
        </td>
        <td v-else>
          objetiva
        </td>

        <td>{{ question.wording }}</td>
        <td>{{ question.grade }}</td>
        <td>{{ question.level }}</td>
        <td>{{ question.id }}</td>
        <td>{{ question.id }}</td>
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
  }
}
</script>
