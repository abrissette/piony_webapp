import Vue from 'vue'
import Vuex from 'vuex'
import PionyAPI from '../api/Piony.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patients: [],
        activePatient: {
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
        activePatientRisk: '',
    },
    getters: {
        getActivePatient: state => {
            return state.activePatient;
        },
    },
    mutations: {
        setPatients(state, src) {
            state.patients = src.patients;
        },
        setActivePatient(state, src) {
            state.activePatient = state.patients[src.index];
        },
        setActivePatientRisk(state, src) {
            state.activePatientRisk = src.risk;
        }
    },
    methods: {
    }
});
