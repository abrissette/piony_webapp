<template>
    <div>
        <b-input-group>
        <b-form-input v-model="searchInput" placeholder="Search by patient ID"></b-form-input>
        <b-input-group-append>
          <b-btn v-b-modal.patientInfoModal v-on:click="showSearchedPatientInformation()" variant="primary">Search</b-btn>
        </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import PatientInfo from './PatientInfo.vue'
import PionyAPI from '../api/Piony.js'

export default Vue.extend({
    name: 'SearchBar',
    data() {
        return {
            searchInput: '',
        }
    },
    components: {
        PatientInfo,
    },
    computed: {
        ...mapState({
            searchedPatient: 'activePatient',
        })
    },
    methods: {
        ...mapActions({
            populateActivePatient: 'setActivePatientRisk',
            setShowPatientInformation: 'setShowPatientInformation',
        }),
        showSearchedPatientInformation() {
            if (this.searchInput) {
                this.setShowPatientInformation({set: true});
                this.populateActivePatient({type: 'search', id: this.searchInput});
            }
            else {
                this.setShowPatientInformation({set: false});
            }
        }
    }
})
</script>

<style>

</style>
