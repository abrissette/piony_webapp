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
        newPatientId: 8,
    },
    getters: {
        getActivePatient: state => {
            return state.activePatient;
        },
    },
    mutations: {
        changePatients(state, src) {
            state.patients = src.patients;
        },
        changeActivePatientByIndex(state, src) {
            state.activePatient = state.patients[src.index];
        },
        changeActivePatientById(state, src) {
            state.activePatient = src.patient;
            console.log(JSON.stringify(state.activePatient));
        },
        changeActivePatientRisk(state, src) {
            state.activePatientRisk = src.risk;
        },
        addPatient(state, src) {
            var newPatient = src.patient;
            newPatient.id = state.newPatientId;
            state.patients.push(newPatient);
            state.newPatientId++;
        },
        deletePatient(state, src) {
            var index = state.patients.findIndex(patient => patient.id === src.id);
            if (index > -1) {
                state.patients.splice(index, 1);
            }
        },
        updatePatient(state, src) {
            var index = state.patients.findIndex(patient => patient.id === src.patient.id);
            if (index > -1) {
                state.patients[index] = src.patient;
            }
        },
    },
    actions: {
        addNewPatient({ dispatch, commit }, src) {
            var promise = PionyAPI.addNewPatient(src.newPatient);
            if (typeof promise !== "undefined") {
                promise.then(() => {
                    commit('addPatient', {patient: src.newPatient});
                })
            }
        },
        setPatients({ commit }) {
            var promise = PionyAPI.getPatients();
            if (typeof promise !== "undefined") {
                promise.then((patients) => {
                    commit('changePatients', {patients: patients})
                })
            }
        },
        setActivePatientByIndex({ commit }, src) {
            commit('changeActivePatientByIndex', {index: src.index});
        },
        setActivePatientById({ commit }, src) {
            var promise = PionyAPI.getPatient(src.id);
            if (typeof promise !== "undefied") {
                promise.then((patient) => {
                    commit('changeActivePatientById', {patient: patient});
                })
            }
        },
        async setActivePatientRisk({ commit, dispatch, state }, src) {
            if (src.type == "index") {
                await dispatch('setActivePatientByIndex', {index: src.index})
            }
            else {
                await dispatch('setActivePatientById', {id: src.id})
            }
            var promise = PionyAPI.getPatientRiskInfo(state.activePatient.postalCode);
            if (typeof promise !== "undefined") {
                promise.then((riskLevel) => {
                    commit('changeActivePatientRisk', {risk: riskLevel});
                })
            }
            else {
                commit('changeActivePatientRisk', {risk: 'risk not found'});
            }
        },
        deleteActivePatient({ commit, state }, src) {
            var deletedId = state.activePatient.id;
            var promise = PionyAPI.deletePatient(deletedId);
            if (typeof promise !== "undefined") {
                promise.then(() => {
                    commit('deletePatient', {id: deletedId});
                    commit('changeActivePatientById', {patient: {}});
                })
            }
        },
        updateActivePatient({ commit, state, dispatch }, src) {
            var promise = PionyAPI.updatePatient(src.patient);
            if (typeof promise !== "undefined") {
                promise.then(() => {
                    //dispatch('setPatients');
                    commit('updatePatient', {patient: src.patient});
                    commit('changeActivePatientById', { patient: src.patient });
                })
            }
        }
    },
    methods: {
    }
});
