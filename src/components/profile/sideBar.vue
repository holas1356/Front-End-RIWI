<template>
  <div class="container-sidebar">
    <PersonDetail :person="personData" />
    <Overview />
  </div>
</template>

<script>
import PersonDetail from './personDetail.vue';
import Overview from './overview.vue';

export default {
  name: "Sidebar",
  components: {
    PersonDetail,
    Overview,
  },
  data() {
    return {
      personData: {
        name: 'Carlos Andres Perez',
        status: 'active',
        role: 'Software Engineer',
        country: 'Spain',
        language: 'English',
        contact: '(123) 456-7890',
        email: 'carlos@carlos.com',
        skype: 'carlos.doe',
        team1: 'Backend Developer',
        team2: 'VueJs Developer',
      }
    };
  }
}
</script>

<style scoped>
.container-sidebar {
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 700px;
  gap: 10px;
}
</style>
