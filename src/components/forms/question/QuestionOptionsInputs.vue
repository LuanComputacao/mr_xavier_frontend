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
              >
            </div>
          </div>
          <input
            class="form-control"
            type="text"
            :name="'option-text[' + j + ']'"
            @keyup="updateAnswersOptions(j)"
            :data-number="i"
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
export default {
  name: 'QuestionOptionsInputs',

  components: {
    ButtonDefault
  },

  data () {
    return {
      options: []
    }
  },

  methods: {
    addOption () {
      this.options.push({ text: '', value: false })
    },

    updateCorrectAnswers (number) {
      let answers = document.querySelector('[name*=\'option-checkbox[' + number + ']\']')
      this.$set(this.options, number, { value: answers.checked, text: this.options[number]['text'] })
      this.updateOptions()
    },

    updateAnswersOptions (number) {
      let answer = document.querySelector('[name*=\'option-text[' + number + ']\']')
      this.$set(this.options, number, { value: this.options[number].value, text: answer.value })
      this.updateOptions()
    },

    updateOptions () {
      this.$emit('update', this.options)
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
