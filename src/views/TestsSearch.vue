<template>
  <div class="tests-page">
    <title-h1 :texti18n="'all--tests'" />
    <table-tests :tests="tests" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TableTests from '@/components/tables/TableTests'
import TitleH1 from '@/components/titles/TitleH1'

export default {
  name: 'TestsPage',

  components: {
    TableTests,
    TitleH1
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
