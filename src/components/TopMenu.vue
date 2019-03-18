<template>
  <nav
    class="navigation-bar"
    v-if="isVisible"
  >
    <button
      @click="toogleBar"
      class="navbar-toggler"
      type="button"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      class="collapse navbar-collapse"
      :class="{'show': expanded}"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li
          v-for="(route, i) in routes"
          :key="i"
          class="nav-item"
          :class="{ active : $route.name == route.name}"
          @click="toogleBar"
        >
          <router-link
            class="nav-link"
            :to="{name: route.name}"
            v-t="route.text"
          />
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TopMenu',

  data () {
    return {
      routes: [
        { name: 'home', text: 'all--home' },
        { name: 'questions', text: 'all--questions' },
        { name: 'tests', text: 'all--tests' }
      ],
      expanded: false
    }
  },

  computed: {
    isVisible () {
      return this.$route.name !== 'home'
    }
  },

  methods: {
    toogleBar () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
  @extend .navbar, .navbar-expand-lg, .navbar-light, .bg-light;
}
</style>
