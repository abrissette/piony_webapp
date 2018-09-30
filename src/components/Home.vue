<template>
  <div class="pb-3 wrapper home">
    <b-container class="mb-4">
        <b-row>
            <b-col sm="8" class="mb-3">
                <SearchBar/>
            </b-col>
            <b-col sm="4" class="text-sm-right text-center">
                <b-button btn-lg btn-block v-b-modal.newPatientModal variant="primary">
                    New Patient
                </b-button>
                <NewPatient/>
            </b-col>
        </b-row>
    </b-container>
    <b-container class="list-container">
        <h3 class="text-center">Patient List:</h3>
        <div class="pb-3 patient-list-container">
            <b-list-group>
                <b-list-group-item button v-b-modal.patientInfoModal v-for="(patient, index) in patients" v-bind:key="patient.id" v-on:click="showPatientInformation(index)">
                    {{ patient.firstName }} {{ patient.lastName}} | {{ patient.streerAdress }}, {{ patient.city }}, {{ patient.state }} | id: {{ patient.id }}
                </b-list-group-item>
                <patientInfo/>
            </b-list-group>
        </div>
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
            activePatient: 'activePatient',
            patients: 'patients',
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
            showModal: 'changeShowPatientModal',
            setShowPatientInformation: 'setShowPatientInformation',
        }),
        showPatientInformation(index) {
            this.setShowPatientInformation({set: true});
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
    max-height: 460px;
    overflow-y: auto;
}

</style>
