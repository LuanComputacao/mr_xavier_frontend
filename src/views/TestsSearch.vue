<template>
  <div class="tests-page">
    <h1>Testes</h1>
    <table-tests :tests="tests" />
  </div>
</template>
<script>
import TableTests from '@/components/tables/TableTests'
export default {
  name: 'TestsPage',

  components: {
    TableTests
  },

  data () {
    return {
      tests: []
    }
  }

}
</script>
<style lang="scss">
.tests-page{
  @extend .container;
}
</style>
