<template>
  <div class="table-tests">
    <table class="tests-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th />
          <th>Fase de Ensino</th>
          <th class="tests-table__level">
            Nível
          </th>
          <th class="tests-table__edit">
            Editar
          </th>
          <th class="tests-table__delete">
            Apagar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(test, i) in tests"
          :key="i"
        >
          <td class="tests-table__description">
            {{ test.description }}
          </td>
          <td class="tests-table__preview">
            <button class="tests-preview__btn">
              <font-awesome-icon icon="eye" />
            </button>
          </td>
          <td class="tests-table__grade">
            {{ test.grade.name }}
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
  &__preview,
  &__delete{
    text-align: center;
  }

  &__applied-times,
  &__level,
  &__delete,
  &__edit{
    display: none;

    @include media-breakpoint-up("sm") {
      display: table-cell;
    }
  }
}
.tests-preview{
  &__btn{
    background: none;
    border:none;
    stroke: none;

    @extend .text-info;

    &:hover{
      background: none;
      border:none;
      stroke: none;
    }
  }
}
</style>
