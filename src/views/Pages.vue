<template>
  <div>
    <router-link
      class="route-link"
      :to="route.path"
      v-for="(route, index) in routes"
      :key="index"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Pages',
  created () {
    this.$router.options.routes.forEach(route => {
      this.routes.push({
        name: route.name,
        path: route.path
      })
    })
  },
  data () {
    return {
      routes: []
    }
  }
}
</script>
<style lang="scss" scoped>
.route-link{
    text-decoration: none;
    border: solid 1px #707070;
    padding: 10px;
    margin: 10px;
}
</style>
