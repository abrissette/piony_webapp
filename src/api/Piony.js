import axios from 'axios'

export default {

    /**
        Get the initial list of patients from the database
    */
    getPatients() {
        var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients';
        return (
            axios.get(url).then((response) => {
                    var patients = response.data;
                    return patients;
                }).catch ((error) => {
                    console.log('getPatients error: '+ error);
                })
            )
    },
    getPatient(id) {
        var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients/' + id;
        return (
            axios.get(url).then((response) => {
                var patient = response.data;
                console.log('getPatient patient: ' + JSON.stringify(patient));
                return patient;
            }).catch ((error) => {
                console.log('getPatient error:' + error);
            })
        )
    },
    addNewPatient(patient) {
        if(patient) {
            return (
                axios.post('https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients', {
                    body: patient
                }).then(response => {
                }).catch ((error) => {
                    console.log('addNewPatient error: ' + error);
                })
            )
        }
    },
    deletePatient(id) {
        if(id) {
            var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients/' + id;
            return (
                axios.delete(url).then((response) => {
                    console.log('delete success: ' + JSON.stringify(response));
                }).catch ((error) => {
                    console.log('deletePatient error: ' + error);
                })
            )
        }
    },
    getPatientRiskInfo(postalCode) {
        if (postalCode) {
            var url = 'https://open.propellerhealth.com/prod/forecast?postalCode=' + postalCode + '&latitude=0&longitude=0';
            return (
                axios.get(url).then((response) => {
                        var risk = response.data.properties.code;
                        return risk;
                    }).catch ((error) => {
                        console.log('getPatientRiskInfo error: ' + error);
                        return 'risk not found for this postal code';
                    })
            );
        }
        else {
            var newPromise = new Promise(function(resolve, reject) {
                resolve('problem getting risk');
            });
            return newPromise;
        }
    },
    updatePatient(patient) {
        if (patient) {
            var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients/' + patient.id;
            return (
                axios.put(url, {body: patient}).then((response) => {
                    console.log(JSON.stringify(response));
                }).catch((error) => {
                    console.log('updatePatient error:' + error)
                })
            )
        }
    }
}
