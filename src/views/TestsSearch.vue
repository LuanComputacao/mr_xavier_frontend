<template>
  <div class="tests-page">
    <h1>Testes</h1>
    <table-tests :tests="tests" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TableTests from '@/components/tables/TableTests'

export default {
  name: 'TestsPage',

  components: {
    TableTests
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapState({
      tests: state => state.tests.all
    })
  },

  created () {
    this.$store.dispatch('tests/getAllTests')
  }

}
</script>
<style lang="scss">
.tests-page{
  @extend .container;
}
</style>
