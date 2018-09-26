<template>
  <div class="wrapper home"
  <b-container class="testing-class">
      wassup
  </b-container>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            msg: 'Blabla Welcome'
        }

    },
    components: {
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.testing-class {
    background-color: pink;
}

</style>
