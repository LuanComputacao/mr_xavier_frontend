<template>
  <div id="app">
    <top-menu />
    <router-view />
  </div>
</template>
<script>
import TopMenu from '@/components/TopMenu'
export default {
  components: {
    TopMenu
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
