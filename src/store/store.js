import Vue from 'vue'
import Vuex from 'vuex'
import PionyAPI from '../api/Piony.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patients: [
            {
                id: '1',
                firstName: 'John',
                lastName: 'Oliver',
                streerAdress: '1802 Nipomo Ave',
                city: 'Long Beach',
                state: 'California',
                postalCode: '32142',
                mobilePhone: '421 543 3214',
                conditions: {},
                status: 'active'
            },
            {
                id: '2',
                firstName: 'Random',
                lastName: 'Jane',
                streerAdress: '5412 Nipomo Ave',
                city: 'New York',
                state: 'New York',
                postalCode: '85941',
                mobilePhone: '412 876 6543',
                conditions: {},
                status: 'active'
            }
        ],
        activePatient: {},
    },
    mutations: {
        setActivePatient(state, src) {
            console.log("setActivePatient index: " + src.index);
            this.state.activePatient = this.state.patients[src.index];
            console.log("activePAtient: " + JSON.stringify(this.state.activePatient));
        },

    }
});
