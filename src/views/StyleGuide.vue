<template>
  <div class="style-guide">
    <title-h1>Components</title-h1>
    <hr>
    <div class="container">
      <div>
        <h3>Logo with text</h3>
        <logo-with-text text="Text Logo" />
      </div>
      <hr>

      <div class="row">
        <div class="col">
          <h3>Question Preview</h3>
          <div class="row">
            <div class="col">
              Tipo da Questão:
              <label for="type">
                <input
                  type="radio"
                  name="type"
                  value="1"
                  v-model.number="questionPreviewType"
                >Objetiva
              </label>
              <label for="type">
                <input
                  type="radio"
                  name="type"
                  value="2"
                  v-model.number="questionPreviewType"
                >Discursiva
              </label>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <question-preview
                :subject="questionClosed.subject"
                :knowledges="questionClosed.knowledges"
                :degree="questionClosed.degree"
                :level="questionClosed.level"
                :wording="questionClosed.wording"
                :type="questionPreviewType"
                :lines="questionClosed.lines"
                :options="questionClosed.options"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <question-card
                :type="questionPreviewType"
                :options="questionClosed.options"
                :wording="questionClosed.wording"
                :lines="questionClosed.lines"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h3>Title H1</h3>
          <box-default>
            <title-h1 :texti18n="'lorem-ipsum'" />
          </box-default>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LogoWithText from '@/components/LogoWithText.vue'
import QuestionPreview from '@/components/QuestionPreview'
import QuestionCard from '@/components/QuestionCard'
import TitleH1 from '@/components/TitleH1'
import BoxDefault from '@/components/BoxDefault'

export default {
  name: 'StyleGruide',

  components: {
    LogoWithText,
    QuestionPreview,
    TitleH1,
    QuestionCard,
    BoxDefault
  },

  data () {
    return {
      questionPreviewType: 1,
      questionClosed: {
        subject: 'Portugues',
        knowledges: ['Predicado', 'Sujeito', 'Verbo', 'Predicativo do Sujeito'],
        degree: 3,
        level: 3,
        wording: 'O rato roeu a roupa do Rei de Roma',
        lines: 4,
        options: [
          {
            isTrue: false,
            text: 'First Option'
          },
          {
            isTrue: true,
            text: 'Second Option'
          },
          {
            isTrue: false,
            text: 'Third Option'
          },
          {
            isTrue: false,
            text: 'Forth Option'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.style-guide{
  margin-bottom: $grid-gutter-width*3;
}
</style>
