<template>
    <div>
        <b-input-group>
        <b-form-input v-model="searchInput" placeholder="Search by patient ID"></b-form-input>
        <b-input-group-append>
          <b-btn v-b-modal.patientInfoModal v-on:click="showSearchedPatientInformation()" variant="primary">Search</b-btn>
        </b-input-group-append>
        </b-input-group>
        <!-- <b-modal ok-only ref="invalidPatientModal">
            <p>Patient with the requested id does not exist</p>
        </b-modal> -->
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
                // this.$refs.invalidPatientModal.show()
            }
        }
    }
})
</script>

<style>

</style>
