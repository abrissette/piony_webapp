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
        showPatientModal : false,
        showPatientInformation: false,
    },
    getters: {
    },
    mutations: {
        setShowPatientInformation(state, src) {
            state.showPatientInformation = src.setBoolean;
        },
        changeShowPatientModal(state) {
            state.showPatientModal = !state.showPatientModal;
        },
        changePatients(state, src) {
            state.patients = src.patients;
        },
        changeActivePatientByIndex(state, src) {
            state.activePatient = state.patients[src.index];
        },
        changeActivePatientById(state, src) {
            state.activePatient = src.patient;
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
            var index = state.patients.findIndex(patient => patient.id == src.id);
            if (index > -1) {
                state.patients.splice(index, 1);
            }
        },
        updatePatient(state, src) {
            var index = state.patients.findIndex(patient => patient.id == src.patient.id);
            if (index > -1) {
                //workaround because if you insert directly via state.patients[index] = src.patient,
                //it does not see it as a change in state.
                state.patients.splice(index,1);
                state.patients.splice(index, 0, src.patient);
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
        setActivePatientSearch({ commit, state }, src) {
            console.log('requested id: ' + src.id);
            console.log('all patients: ' + JSON.stringify(state.patients));
            var index = state.patients.findIndex(patient => patient.id == src.id);
            console.log('found index: ' + index);
            if (index > -1) {
                commit('changeActivePatientById', {patient: state.patients[index]});
            }
            else {
                commit('setShowPatientInformation', {setBoolean: false});
            }
        },
        async setActivePatientRisk({ commit, dispatch, state }, src) {
            if (src.type == "index") {
                await dispatch('setActivePatientByIndex', {index: src.index});
            }
            else if(src.type == "id") {
                await dispatch('setActivePatientById', {id: src.id});
            }
            else {
                await dispatch('setActivePatientSearch', {id: src.id});
            }
            //put a timeout so that the system has enough time to change the active patient
            setTimeout(() => {
                var promise = PionyAPI.getPatientRiskInfo(state.activePatient.postalCode);
                if (typeof promise !== "undefined") {
                    promise.then((riskLevel) => {
                        commit('changeActivePatientRisk', {risk: riskLevel});
                    })
                }
                else {
                    commit('changeActivePatientRisk', {risk: 'risk not found'});
                }
            }, 200);
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
                    commit('changeActivePatientById', { patient: src.patient });
                    commit('updatePatient', {patient: src.patient});
                })
            }
        },
        changeShowPatientModal({ commit }) {
            commit('changeShowPatientModal');
        },
        setShowPatientInformation({ commit }, src) {
            commit('setShowPatientInformation', {setBoolean: src.set});
        }
    },
    methods: {
    }
});
