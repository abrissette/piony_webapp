<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Home from '@/components/Home.vue'
import Vue from 'vue'
export default Vue.extend({
  name: 'app',
  components: {
      Header,
      Home
  }
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
