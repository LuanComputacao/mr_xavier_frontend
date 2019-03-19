<template>
  <div class="question">
    <div class="question__wording">
      {{ wording }}
    </div>

    <div class="question__answer">
      <ul
        v-if="type === 1"
        class="question__options"
      >
        <li
          v-for="(option, i) in options"
          :key="i"
          class="question__option"
        >
          <font-awesome-icon
            class="question__option-circle--true"
            v-if="option.isTrue"
            icon="check-circle"
          />
          <font-awesome-icon
            class="question__option-circle--false"
            v-else
            icon="circle"
          />
          - {{ option.text }}
        </li>
      </ul>
      <div v-else-if="type === 2">
        <hr
          v-for="(i, j) in Number.parseInt(lines)"
          :key="j"
          class="question__line"
        >
      </div>
      <div v-else>
        <span class="question__type-info">A questão não possui um tipo selecionado</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuestionCard',
  props: {
    type: {
      type: Number,
      required: true,
      default: -1
    },
    wording: {
      type: String,
      required: true,
      default: '...'
    },
    lines: {
      type: Number,
      required: true,
      default: 0
    },
    options: {
      type: Array,
      required: true,
      default: () => {
        return [{
          isTrue: false,
          text: 'Default Text'
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.question {
  @extend .card, .mt-4, .mb-2, .shadow-sm;

  &__answer {
    @extend .card-body;
  }

  &__wording {
    @extend .font-weight-bold, .card-header;
  }

  &__options {
    padding-left: 0em;
    margin-bottom: 0em;
  }

  &__option {
    list-style: none;
    padding-left: 0em;
  }

  &__option-circle{
    &--true{
      color: $green-dark;
    }
    &--false{
      color: $grey;
    }
  }

  &__line{
    background-color: $blue;
    margin: 0.5em 0 0.5em;
  }

  &__type-info{
    @extend .text-info;
  }
}
</style>
