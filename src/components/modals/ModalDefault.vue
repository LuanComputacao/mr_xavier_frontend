<template>
  <div
    v-show="show"
    class="modal-default"
  >
    <box-default
      class="modal-default__window"
      tabindex="-1"
      role="dialog"
    >
      <div
        class="modal-default__dialog"
        role="document"
      >
        <div class="modal-default__content">
          <div class="modal-default__header">
            <h5 class="modal-default__title">
              <slot name="header">
                Some header
              </slot>
            </h5>
            <button
              v-if="!lock"
              @click="disposeEmit"
              type="button"
              class="modal-default__close"
              aria-label="Close"
            >
              <font-awesome-icon icon="times" />
            </button>
          </div>
          <div class="modal-default__body">
            <slot name="body">
              Something to the body
            </slot>
          </div>
          <div class="modal-default__footer">
            <slot name="footer">
              Some footer
            </slot>
          </div>
        </div>
      </div>
    </box-default>
    <div
      @click="disposeEmit"
      class="modal-default__overlay"
    />
  </div>
</template>
<script>
import BoxDefault from '@/components/BoxDefault'
export default {
  name: 'ModalDefault',

  components: {
    BoxDefault
  },

  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    lock: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    disposeEmit () {
      if (!this.lock) this.$emit('dispose')
    }
  }
}
</script>
<style lang="scss" scoped>
$overlay-c: rgba(87, 87, 87, 0.6);
.modal-default {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &__window {
    background-color: $grey-light;
    z-index: 10072;

    @include media-breakpoint-up("sm") {
      height: auto;
      margin: $gutter;
    }

    @extend .container;
  }
  &__overlay {
    background-color: $overlay-c;
    opacity: 0.55;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
  }

  &__header {
    position: relative;
    padding-bottom: $gutter_2;
    margin-bottom: $gutter_2;
    border-bottom: solid 1px $grey-light;
  }
  &__title {
    font-size: 2em;
    margin-right: 30px;
    margin-bottom: 0;
  }
  &__close {
    border: none;
    background: none;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5em;

    &:hover {
      border: none;
      background: none;
    }
  }
  &__body {
  }
  &__footer {
    border-top: solid 1px $grey-light;
    padding-top: $gutter_2;
    margin-top: $gutter_2;
  }
}
</style>
