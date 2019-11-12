<template>
  <div class="question-preview">
    <h2 class="text-center">
      Pre-visualização de Questão
    </h2>
    <hr>
    <div class="question-preview__details">
      <div class="row">
        <div class="col-12">
          <span class="font-weight-bold">Matéria: </span>
          <span v-if="question.subject">{{ question.subject.name }}</span>
          <span v-else>?</span>
        </div>
        <div class="col-12">
          <span class="font-weight-bold">Fase de Ensino: </span>
          <span v-if="question.grade">{{ question.gradeame }}</span>
          <span v-else>?</span>
        </div>
        <div class="col-12">
          <span class="font-weight-bold">Nível:</span>
          {{ question.level }}
        </div>
      </div>

      <div
        v-if="question.knowledges.length > 0"
        class="row"
      >
        <div class="col-12 font-weight-bold">
          Conhecimentos:
        </div>
        <div class="col-12">
          <span
            v-for="(knowledge, i) in question.knowledges"
            :key="i"
            class="badge badge-pill badge-info mr-1"
          >{{ knowledge.name }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <question-card
            :type="question.type"
            :wording="question.wording"
            :options="options"
            :lines="question.lines"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QuestionCard from '@/components/QuestionCard'
import { mapState } from 'vuex'

export default {
  name: 'QuestionPreview',

  components: {
    QuestionCard
  },

  computed: {
    ...mapState({
      question: state => state.questions.question,
      options: state => state.questionOptions.all
    })
  }
}
</script>

<style lang="scss" scoped>
.question-preview {
  @extend .border, .shadow, .rounded, .col, .pt-3, .pb-3;
}
</style>
