<template>
  <div class="wrapper home">
    <b-container class="mb-4">
        <b-row>
            <b-col sm="8" class="mb-3">
                <SearchBar/>
            </b-col>
            <b-col sm="4" class="text-sm-right text-center">
                <b-button btn-lg btn-block v-b-modal.newPatientModal variant="primary">New Patient
                </b-button>
                <b-modal hide-footer id="newPatientModal">
                    <NewPatient/>
                </b-modal>
            </b-col>
        </b-row>
    </b-container>
    <b-container class=".patient-list-container">
        <h3 class="text-center">Patient List:</h3>
        <b-list-group>
            <b-list-group-item button v-b-modal.patientInfoModal v-for="(patient, index) in patients" v-bind:key="patient.id" v-on:click="showPatientInformation(index)">
                {{ patient.firstName }} {{ patient.lastName}} | {{ patient.streerAdress }}, {{ patient.city }}, {{ patient.state }}
            </b-list-group-item>
            <b-modal hide-footer id="patientInfoModal">
                <PatientInfo/>
            </b-modal>
        </b-list-group>
    </b-container>
  </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import NewPatient from './NewPatient.vue'
import PatientInfo from './PatientInfo.vue'
import SearchBar from './SearchBar.vue'
import PionyAPI from '../api/Piony.js'

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            msg: 'blablbla',
        }

    },
    computed: {
        ...mapState({
            patients: 'patients',
            activePatient: 'activePatient',
        }),
    },
    components: {
        NewPatient,
        PatientInfo,
        SearchBar,
    },
    methods: {
        ...mapActions({
            loadPatients: 'setPatients',
            populateActivePatient: 'setActivePatientRisk',
        }),
        showPatientInformation(index) {
            this.populateActivePatient({type: 'index', index: index});
        }
    },
    mounted() {
        this.loadPatients();
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.testing-class {
    background-color: pink;
    border:1px solid black;
}

.patient-list-container {
    max-height: 700px;
    overflow-y: auto;
}

</style>
