<template>
  <div class="style-guide">
    <div class="col">
      <title-h1 :texti18n="'Componentes'" />
    </div>
    <hr>
    <div class="container">
      <div>
        <title-h2 :texti18n="'Logo with text'" />
        <logo-with-text text="Text Logo" />
      </div>
      <hr>

      <div class="row">
        <div class="col">
          <title-h2 :texti18n="'Question Details'" />

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
              <title-h2 :texti18n="'Question Preview'" />
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
      <hr>
      <div class="row">
        <div class="col">
          <title-h2 :texti18n="'Titles'" />
          <box-default>
            <title-h1 :texti18n="'Title h1'" />
            <title-h2 :texti18n="'Title h2'" />
            <title-h3 :texti18n="'Title h3'" />
          </box-default>
        </div>
      </div>

      <hr>
      <div class="row">
        <div class="col">
          <title-h2 :texti18n="'Modals'" />
          <a
            class="btn btn-primary"
            @click="toggleModal('default')"
          >
            Show modal <strong>default</strong>
          </a>
          <a
            class="btn btn-primary"
            @click="toggleModal('locked')"
          >
            Show modal <strong>locked</strong>
          </a>

          <modal-default
            :lock="true"
            :show="modal.locked"
          >
            <template slot="header">
              This is a sample of Locked Modal Window
            </template>
            <template slot="body">
              <p>This modal window don't emit a dispose event</p>
              <p>You need to create some element that trigger your <code>toogleModal</code> function as the button on this footer</p>
            </template>
            <template slot="footer">
              <button
                class="btn btn-secondary"
                @click="toggleModal('locked')"
              >
                Click here to dispose
              </button>
            </template>
          </modal-default>

          <modal-default
            :show="modal.default"
            @dispose="toggleModal('default')"
          >
            <template slot="header">
              This is a sample of non Locked Modal Window
            </template>
            <template slot="body">
              <h4>This is a body</h4>
              <p>You can do wathever you want to do here</p>
            </template>
            <template slot="footer">
              Here you can put some buttons or nothing
            </template>
          </modal-default>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LogoWithText from '@/components/LogoWithText.vue'
import QuestionPreview from '@/components/QuestionPreview'
import QuestionCard from '@/components/QuestionCard'
import TitleH1 from '@/components/titles/TitleH1'
import TitleH2 from '@/components/titles/TitleH2'
import TitleH3 from '@/components/titles/TitleH3'
import BoxDefault from '@/components/BoxDefault'
import ModalDefault from '@/components/modals/ModalDefault'

export default {
  name: 'StyleGruide',

  components: {
    LogoWithText,
    QuestionPreview,
    TitleH1,
    TitleH2,
    TitleH3,
    QuestionCard,
    BoxDefault,
    ModalDefault
  },

  data () {
    return {
      modal: {
        default: false,
        locked: false
      },
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
  },

  methods: {
    toggleModal (code) {
      this.modal[code] = !this.modal[code]
    }
  }
}
</script>
<style lang="scss" scoped>
.style-guide{
  margin-bottom: $grid-gutter-width*3;
}
</style>
