<template>
  <b-form class="sm-modal" @submit="updatePatientInformation">
      <b-form-group id="patientIdGroup"
                    label="Id:"
                    label-for="patientId">
        <b-form-input id="patientId"
                    type="text"
                    v-model="patientInfo.id"
                    required
                    placeholder="Id">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientRiskGroup"
                    label="Risk:"
                    label-for="patientRisk">
        <b-form-input id="patientRisk"
                    type="text"
                    v-model="patientInfo.risk"
                    required
                    placeholder="Risk">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientFirstNameGroup"
                    label="First Name:"
                    label-for="patientFirstName">
        <b-form-input id="patientFirstName"
                    type="text"
                    v-model="patientInfo.firstName"
                    required
                    placeholder="Enter First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientLastNameGroup"
                    label="Last Name:"
                    label-for="patientLastName">
        <b-form-input id="patientLastName"
                    type="text"
                    v-model="patientInfo.lastName"
                    required
                    placeholder="Enter Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStreetAddressGroup"
                    label="Street Address:"
                    label-for="patientStreetAddress">
        <b-form-input id="patientStreetAddress"
                    type="text"
                    v-model="patientInfo.streerAdress"
                    placeholder="Enter Street Address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientCityGroup"
                    label="City:"
                    label-for="patientCity">
        <b-form-input id="patientCity"
                    type="text"
                    v-model="patientInfo.city"
                    placeholder="Enter City">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStateGroup"
                    label="State:"
                    label-for="patientState">
        <b-form-input id="patientState"
                    type="text"
                    v-model="patientInfo.state"
                    placeholder="Enter State">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientPostalGroup"
                    label="Postal:"
                    label-for="patientPostal">
        <b-form-input id="patientPostal"
                    type="text"
                    v-model="patientInfo.postalCode"
                    required
                    placeholder="Enter Postal">
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientPhoneGroup"
                    label="Phone:"
                    label-for="patientPhone">
        <b-form-input id="patientPhone"
                    type="text"
                    v-model="patientInfo.mobilePhone"
                    placeholder="Enter Phone"
                    required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="patientStatusGroup"
                    label="Status:"
                    label-for="patientStatus">
        <b-form-select id="patientStatus"
                    :options="statuses"
                    v-model="patientInfo.status">
        </b-form-select>
      </b-form-group>
    <b-button type="submit" variant="primary">Update</b-button>
  </b-form>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
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
            risk: ''

        },
            statuses: [
                { text: 'Select One', value: null },
                'active', 'standby', 'inactive',
            ],
            show: true
    }
  },
  computed: {
      isActivePatientChange() {
          return this.$store.state.activePatient;
      }
  },
  watch: {
      isActivePatientChange(patient) {
          var tempPatient = patient;
          PionyAPI.getPatientRisk(patient.postalCode).then((risk) => {
              tempPatient.risk = risk;
              this.patientInfo = tempPatient;
          });
      }
  },
  methods: {
      loadPatient() {
          this.patientInfo = this.$store.state.activePatient;
      },
      updatePatientInformation (evt) {
        evt.preventDefault();
        PionyAPI.addNewPatient(this.patientInfo);
        this.show = false;
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sm-modal {
    height: 450px;
    overflow-y: auto;
}

</style>
