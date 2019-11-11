<template>
  <div class="question-options-inputs">
    <span><strong>Opções:</strong></span>
    <div v-if="options.length < 1">
      <button-default @click="addOption">
        Adicione uma opção
      </button-default>
    </div>
    <div v-else>
      <div
        v-for="(i, j) in options"
        :key="j"
      >
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input
                type="checkbox"
                :name="'option-checkbox[' + j + ']'"
                @click="updateCorrectAnswers(j)"
                :data-number="i"
                :checked="i.value"
              >
            </div>
          </div>
          <input
            class="form-control"
            type="text"
            :name="'option-text[' + j + ']'"
            @keyup="updateAnswersOptions(j)"
            :data-number="i"
            :value="i.text"
          >
          <div
            class="input-group-append"
            @click="removeOption(j)"
          >
            <div class="question-option--remove">
              <font-awesome-icon
                icon="minus"
              />
            </div>
          </div>
          <div
            v-if="j === options.length -1"
            class="question-option--add"
            @click="addOption"
          >
            <button-default>
              <font-awesome-icon
                icon="plus"
              />
            </button-default>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonDefault from '@/components/buttons/ButtonDefault'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'QuestionOptionsInputs',

  components: {
    ButtonDefault
  },

  data () {
    return {
      optionsD: []
    }
  },

  computed: {
    ...mapState({
      options: state => state.questionOptions.all,
      question: state => state.questions.question
    })
  },

  mounted () {
    let questionId = this.question.id

    if (typeof questionId !== 'undefined' && questionId > 0) {
      this.retrieveQuestionOptions(questionId)
        .then(() => {
          this.loading = false
        })
    }
  },

  methods: {
    ...mapActions({
      retrieveQuestionOptions: 'questionOptions/actionAllQuestionOptions'
    }),

    addOption () {
      this.options.push({ text: '', value: false })
    },

    updateCorrectAnswers (number) {
      let answer = document.querySelector('[name*=\'option-checkbox[' + number + ']\']')

      let option = this.options[number]
      option.value = answer.checked

      this.setOption(number, option)
    },

    updateAnswersOptions (number) {
      let answer = document.querySelector('[name*=\'option-text[' + number + ']\']')

      let option = this.options[number]
      option.text = answer.value

      this.setOption(number, option)
    },

    setOption (number, option) {
      this.$set(this.options, number, option)
    },

    removeOption (index) {
      this.options.splice(index, 1)
    }
  }

}
</script>
<style lang="scss">
.question-options-inputs{
  @extend .my-5;
}
.question-option{
  &--add{
    @extend .input-group-append;
    margin-left: -8px;
    margin-right: -8px;
  }

  &--remove{
    @extend .input-group-text;
    cursor: pointer;
  }
}
</style>
