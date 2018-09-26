import Vue from 'vue'
import Vuex from 'vuex'
import PionyAPI from '../api/Piony.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patients: [
            {
                name: 'John Oliver',
                id: '1',
                address: '1802 Nipomo Ave',
                city: 'Long Beach',
                state: 'California',
                risk: 'high'
            },
            {
                name: 'Random Jane',
                id: '2',
                address: '321 blabla Ave',
                city: 'Long Beach',
                state: 'California',
                risk: 'low'
            }
        ],
    },
    mutations: {

    }
});
