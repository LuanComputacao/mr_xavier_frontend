<template>
  <div class="table-tests">
    <table class="tests-table">
      <thead>
        <tr>
          <th>Applied times</th>
          <th>Enunciado</th>
          <th>Fase de Ensino</th>
          <th>Nível</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(test, i) in tests"
          :key="i"
        >
          <td class="tests-table__applied-times">
            {{ test.appliedTimes }}
          </td>
          <td class="tests-table__description">
            {{ test.description }}
          </td>
          <td class="tests-table__grade">
            {{ test.grade }}
          </td>
          <td class="tests-table__level">
            {{ test.level }}
          </td>
          <td class="tests-table__edit">
            <router-link :to="{name:'edit-test', params: {id: test.id}}">
              <font-awesome-icon icon="edit" />
            </router-link>
          </td>
          <td class="tests-table__delete">
            <font-awesome-icon
              icon="trash"
              @click="deleteTest(test.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableTests',

  props: {
    tests: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  methods: {
    deleteTest () {

    }
  }
}
</script>
<style lang="scss" scoped>
.tests-table{

  @extend .table, .table-striped;

  &__grade,
  &__level,
  &__edit,
  &__delete{
    text-align: center;
  }
}
</style>
