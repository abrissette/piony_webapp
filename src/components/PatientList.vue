<template>
  <div class="patient-list">
    <b-list-group>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Morbi leo risus</b-list-group-item>
        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'patientlist',
  data () {
    return {
      msg: 'Patient List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
