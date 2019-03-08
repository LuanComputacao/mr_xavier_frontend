<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
    </nav>
    <h1>Components</h1>
    <hr>
    <div>
      <h3>Logo with text</h3>
      <logo-with-text text="Text Logo"></logo-with-text>
    </div>
    <hr>
    <div>
      <h3>Question Preview</h3>
      <div>
        Tipo:
        <label for="type">
          <input type="radio" name="type" value="1" v-model.number="questionPreviewType">Objetiva
        </label>
        <label for="type">
          <input type="radio" name="type" value="2" v-model.number="questionPreviewType">Discursiva
        </label>
      </div>
      <question-preview
        :subject="questionClosed.subject"
        :knowledges="questionClosed.knowledges"
        :degree="questionClosed.degree"
        :level="questionClosed.level"
        :wording="questionClosed.wording"
        :type="questionPreviewType"
        :lines="questionClosed.lines"
        :options="questionClosed.options"
      ></question-preview>
    </div>
  </div>
</template>
<script>
import LogoWithText from '@/components/LogoWithText.vue'
import QuestionPreview from '@/components/QuestionPreview'

export default {
  name: 'StyleGruide',
  components: {
    LogoWithText,
    QuestionPreview
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
