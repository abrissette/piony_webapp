<template>
    <div>
        <b-input-group>
        <b-form-input v-model="searchInput" placeholder="Search by patient ID"></b-form-input>
        <b-input-group-append>
          <b-btn v-on:click="showSearchedPatientInformation()" variant="primary">Search</b-btn>
        </b-input-group-append>
        </b-input-group>
        <b-modal ok-only ref="invalidPatientModal">
            <p>Patient with the requested id does not exist</p>
        </b-modal>
        <PatientInfo/>
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
        }),
        showSearchedPatientInformation() {
            if (this.searchInput) {
                this.populateActivePatient({type: 'id', id: this.searchInput});
                this.$refs.patientInformationModal.show();
            }
            else {
                this.$refs.invalidPatientModal.show()
            }
        }
    }
})
</script>

<style>

</style>
