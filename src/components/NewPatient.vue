<template>
  <b-form class="sm-modal" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="newFirstNameGroup"
                    label="First Name:"
                    label-for="newFirstName">
        <b-form-input id="newFirstName"
                    type="text"
                    v-model="form.firstName"
                    required
                    placeholder="Enter First Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newLastNameGroup"
                    label="Last Name:"
                    label-for="newLastName">
        <b-form-input id="newLastName"
                    type="text"
                    v-model="form.lastName"
                    required
                    placeholder="Enter Last Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStreetAddressGroup"
                    label="Street Address:"
                    label-for="newStreetAddress">
        <b-form-input id="newStreetAddress"
                    type="text"
                    v-model="form.streerAdress"
                    placeholder="Enter Street Address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newCityGroup"
                    label="City:"
                    label-for="newCity">
        <b-form-input id="newCity"
                    type="text"
                    v-model="form.city"
                    placeholder="Enter City">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStateGroup"
                    label="State:"
                    label-for="newState">
        <b-form-input id="newState"
                    type="text"
                    v-model="form.state"
                    placeholder="Enter State">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newPostalGroup"
                    label="Postal:"
                    label-for="newPostal">
        <b-form-input id="newPostal"
                    type="text"
                    v-model="form.postalCode"
                    required
                    placeholder="Enter Postal">
        </b-form-input>
      </b-form-group>
      <b-form-group id="newPhoneGroup"
                    label="Phone:"
                    label-for="newPhone">
        <b-form-input id="newPhone"
                    type="text"
                    v-model="form.mobilePhone"
                    placeholder="Enter Phone"
                    required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="newStatusGroup"
                    label="Status:"
                    label-for="newStatus">
        <b-form-select id="newStatus"
                    :options="statuses"
                    v-model="form.status">
        </b-form-select>
      </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import PionyAPI from '../api/Piony.js'

export default Vue.extend({
    name: 'NewPatient',
    data () {
        return {
            form: {
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
    onSubmit (evt) {
        evt.preventDefault();
        PionyAPI.addNewPatient(this.form);
        this.show = false;
        this.$refs.newPatientModal.hide();
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.firstName = '';
      this.form.lastName = '';
      this.form.streerAdress = '';
      this.form.city = '';
      this.form.state = '';
      this.form.postalCode = '';
      this.form.mobilePhone = '';
      this.form.status = null;
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
