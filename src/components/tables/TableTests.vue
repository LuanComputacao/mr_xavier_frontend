<template>
  <div class="table-tests">
    <table class="tests-table">
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
          v-for="(test, i) in tests"
          :key="i"
        >
          <td v-if="test.type">
            <font-awesome-icon icon="file-alt" />
          </td>
          <td v-else>
            <font-awesome-icon icon="check-square" />
          </td>

          <td>{{ test.wording }}</td>
          <td>{{ test.grade }}</td>
          <td>{{ test.level }}</td>
          <td>
            <router-link :to="{name:'edit-test', params: {id: test.id}}">
              <font-awesome-icon icon="edit" />
            </router-link>
          </td>
          <td>
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
