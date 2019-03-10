<template>
  <div>
    <nav>
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/questions">
        Questions
      </router-link>
    </nav>
    <form-question
      :subjects="availableSubjects"
      :degrees="[]"
      :level-range="100"
      :level-value="4"
    />
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
