<template>
  <b-form class="sm-modal text-center" @submit="updatePatientInformation">
      <b-form-group id="patientIdGroup"
                    label="Id:"
                    label-for="patientId">
        <b-form-input id="patientId"
                    type="text"
                    :value="activePatient.id"
                    required
                    disabled
                    placeholder="Id">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientRiskGroup"
                    label="Risk:"
                    label-for="patientRisk">
        <b-form-input id="patientRisk"
                    type="text"
                    :value="activePatientRisk"
                    required
                    disabled
                    placeholder="Risk">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientFirstNameGroup"
                    label="First Name:"
                    label-for="patientFirstName">
        <b-form-input id="patientFirstName"
                    type="text"
                    :value="activePatient.firstName"
                    required
                    disabled
                    placeholder="Enter First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientLastNameGroup"
                    label="Last Name:"
                    label-for="patientLastName">
        <b-form-input id="patientLastName"
                    type="text"
                    :value="activePatient.lastName"
                    required
                    disabled
                    placeholder="Enter Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStreetAddressGroup"
                    label="Street Address:"
                    label-for="patientStreetAddress">
        <b-form-input id="patientStreetAddress"
                    type="text"
                    :value="activePatient.streerAdress"
                    disabled
                    placeholder="Enter Street Address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientCityGroup"
                    label="City:"
                    label-for="patientCity">
        <b-form-input id="patientCity"
                    type="text"
                    :value="activePatient.city"
                    disabled
                    placeholder="Enter City">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStateGroup"
                    label="State:"
                    label-for="patientState">
        <b-form-input id="patientState"
                    type="text"
                    :value="activePatient.state"
                    disabled
                    placeholder="Enter State">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientPostalGroup"
                    label="Postal:"
                    label-for="patientPostal">
        <b-form-input id="patientPostal"
                    type="text"
                    :value="activePatient.postalCode"
                    required
                    disabled
                    placeholder="Enter Postal">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientPhoneGroup"
                    label="Phone:"
                    label-for="patientPhone">
        <b-form-input id="patientPhone"
                    type="text"
                    :value="activePatient.mobilePhone"
                    placeholder="Enter Phone"
                    disabled
                    required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStatusGroup"
                    label="Status:"
                    label-for="patientStatus">
        <b-form-select id="patientStatus"
                    :options="statuses"
                    :value="activePatient.status"
                    disabled>
        </b-form-select>
      </b-form-group>
    <b-button type="submit" variant="primary">Update</b-button>
  </b-form>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import PionyAPI from '../api/Piony.js'

export default Vue.extend({
    name: 'PatientInfo',
    data () {
        return {
            patientInfo: {
            id: '',
            firstName: '',
            lastName: '',
            streerAdress: '',
            city: '',
            state: '',
            postalCode: '',
            mobilePhone: '',
            conditions: {},
            status: null,

        },
            statuses: [
                { text: 'Select One', value: null },
                'active', 'standby', 'inactive',
            ],
            risk: ''
    }
  },
  computed: {
      ...mapGetters({
          activePatient: 'getActivePatient',
      }),
      ...mapState({
          activePatientRisk: 'activePatientRisk',
      })
  },
  methods: {
      updatePatientInformation (evt) {
        evt.preventDefault();
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sm-modal {
    max-height: 450px;
    overflow-y: auto;
}

</style>
