<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/questions">Questions</router-link>
    </nav>
    <form-question
        :subjects="availableSubjects"
        :degrees="[]"
        :levelRange="100"
        :levelValue="4"
    ></form-question>
  </div>
</template>
<script>
import FormQuestion from '@/components/forms/FormQuestion'

export default {
  name: 'Question',

  components: {
    FormQuestion
  },

  data () {
    return {
      availableSubjects: []
    }
  }
}
</script>
