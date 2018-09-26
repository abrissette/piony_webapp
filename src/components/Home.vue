<template>
  <div class="wrapper home">
  <b-container class="testing-class">
    <b-container>
        <b-row>
            <b-col sm="8">
                <div>
                  <b-input-group>
                    <b-form-input placeholder="Search by patient ID"></b-form-input>
                    <b-input-group-append>
                      <b-btn variant="info">Search</b-btn>
                    </b-input-group-append>
                  </b-input-group>
                </div>
            </b-col>
            <b-col sm="4" class="text-center">
                    <b-btn v-b-modal.newPatientModal variant="primary">New Patient
                    </b-btn>
                    <b-modal id="newPatientModal">
                        <NewPatient/>
                    </b-modal>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
        <b-list-group>
            <b-list-group-item button v-for="(patient, index) in patients" v-bind:key="index">
                {{ patient.name }}
            </b-list-group-item>
        </b-list-group>
    </b-container>
  </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import NewPatient from './NewPatient.vue'

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            msg: 'Blabla Welcome'
        }

    },
    computed: {
        ...mapState([
            'patients',
        ]),
    },
    components: {
        NewPatient,
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.testing-class {
    background-color: pink;
    border:1px solid black;
}

</style>
