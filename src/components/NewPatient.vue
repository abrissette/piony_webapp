<template>
<b-modal hide-footer id="newPatientModal" ref="newPatientModal">
  <b-form class="sm-modal text-center" @reset="onReset" v-if="show">
      <b-form-group id="newFirstNameGroup"
                    label="First Name:"
                    label-for="newFirstName">
        <b-form-input id="newFirstName"
                    type="text"
                    v-model="newPatient.firstName"
                    required
                    placeholder="Enter First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newLastNameGroup"
                    label="Last Name:"
                    label-for="newLastName">
        <b-form-input id="newLastName"
                    type="text"
                    v-model="newPatient.lastName"
                    required
                    placeholder="Enter Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStreetAddressGroup"
                    label="Street Address:"
                    label-for="newStreetAddress">
        <b-form-input id="newStreetAddress"
                    type="text"
                    v-model="newPatient.streerAdress"
                    placeholder="Enter Street Address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newCityGroup"
                    label="City:"
                    label-for="newCity">
        <b-form-input id="newCity"
                    type="text"
                    v-model="newPatient.city"
                    placeholder="Enter City">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStateGroup"
                    label="State:"
                    label-for="newState">
        <b-form-input id="newState"
                    type="text"
                    v-model="newPatient.state"
                    placeholder="Enter State">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newPostalGroup"
                    label="Postal:"
                    label-for="newPostal">
        <b-form-input id="newPostal"
                    type="text"
                    v-model="newPatient.postalCode"
                    required
                    placeholder="Enter Postal">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newPhoneGroup"
                    label="Phone:"
                    label-for="newPhone">
        <b-form-input id="newPhone"
                    type="text"
                    v-model="newPatient.mobilePhone"
                    placeholder="Enter Phone"
                    required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStatusGroup"
                    label="Status:"
                    label-for="newStatus">
        <b-form-select id="newStatus"
                    :options="statuses"
                    v-model="newPatient.status">
        </b-form-select>
      </b-form-group>
    <b-button v-on:click="addPatient" variant="primary">ADD PATIENT</b-button>
    <b-button type="reset" variant="warning">RESET</b-button>
  </b-form>
</b-modal>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import PionyAPI from '../api/Piony.js'

export default Vue.extend({
    name: 'NewPatient',
    data () {
        return {
            newPatient: {
            firstName: '',
            lastName: '',
            streerAdress: '',
            city: '',
            state: '',
            postalCode: '',
            mobilePhone: '',
            conditions: {},
            status: null
        },
            statuses: [
                { text: 'Select One', value: null },
                'active', 'standby', 'inactive',
            ],
            show: true
    }
  },
  methods: {
    ...mapActions({
        addNewPatient: 'addNewPatient',
    }),
    addPatient() {
        this.addNewPatient({newPatient: this.newPatient});
        this.newPatient = {
        firstName: '',
        lastName: '',
        streerAdress: '',
        city: '',
        state: '',
        postalCode: '',
        mobilePhone: '',
        conditions: {},
        status: null};
        this.$refs.newPatientModal.hide();
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.newPatient.firstName = '';
      this.newPatient.lastName = '';
      this.newPatient.streerAdress = '';
      this.newPatient.city = '';
      this.newPatient.state = '';
      this.newPatient.postalCode = '';
      this.newPatient.mobilePhone = '';
      this.newPatient.status = null;
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sm-modal {
    height: 450px;
    overflow-y: auto;
}

</style>
