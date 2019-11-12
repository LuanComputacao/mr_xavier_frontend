<template>
  <div class="question">
    <div class="question__wording">
      {{ question.wording }}
    </div>

    <div class="question__answer">
      <div v-if="question.type === questionType.objective">
        <span
          v-if="options.length < 1"
          class="question__type-info"
        >
          A questão não possui opções registradas
        </span>
        <ul
          v-else
          class="question__options"
        >
          <li
            v-for="(option, i) in options"
            :key="i"
            class="question__option"
          >
            <font-awesome-icon
              class="question__option-circle--true"
              v-if="option.value"
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
      </div>
      <div v-else-if="question.type === questionType.discursive">
        <hr
          v-for="(i, j) in getAmountOfLines()"
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
import { mapState } from 'vuex'

export default {
  name: 'QuestionCard',

  props: {
    lines: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    ...mapState({
      questionType: state => state.questions.type,
      question: state => state.questions.question,
      options: state => state.questionOptions.all
    })
  },

  methods: {
    getAmountOfLines () {
      let lines = Number.parseInt(this.question.spaces)
      return lines > 10 ? 10 : lines
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

    &__option-circle {
      &--true {
        color: $green-dark;
      }

      &--false {
        color: $grey;
      }
    }

    &__line {
      background-color: $blue;
      margin: 0.5em 0 0.5em;
    }

    &__type-info {
      @extend .text-info;
    }
  }
</style>
