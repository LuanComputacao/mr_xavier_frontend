<template>
  <button
    @click.prevent="$emit('click')"
    class="button-default"
    v-t="textI18n"
    :class="classes"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: 'ButtonDefault',

  props: {
    textI18n: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    theme: {
      type: String,
      required: false,
      default: 'primary'
    }
  },

  data () {
    return {
      baseClass: 'button-default'
    }
  },

  computed: {
    classes () {
      let classes = []
      classes.push(this.buildModifier(this.theme))
      return classes.join(' ')
    }
  },

  methods: {
    buildModifier (modifier) {
      return this.baseClass + '--' + modifier
    }
  }
}
</script>
<style lang="scss" scoped>
.button-default{
  @extend .btn, .ml-2, .mr-2;

  &--primary{
    @extend .btn-primary
  }

  &--danger{
    @extend .btn-danger
  }

  &--info{
    @extend .btn-info
  }

  &--warning{
    @extend .btn-warning
  }
}
</style>
