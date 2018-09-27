<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import NewPatient from '@/components/NewPatient.vue'
import PatientInfo from '@/components/PatientInfo.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'app',
  components: {
      Header,
      Home,
      NewPatient,
      PatientInfo
  },
  computed: {
      displayNewPatientModal() {
          return this.$store.state.displayNewModal;
      },
      displayPatientInfoModal() {
          return this.$store.state.displayPatientModal;
      }
  }
})
</script>

<style>

</style>
