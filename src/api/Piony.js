import axios from 'axios'

export default {

    /**
        Get the initial list of patients from the database
    */
    getPatients() {
        var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients';
        return (
            axios.get(url).then((response) => {
                    console.log(response);
                    var patients = response.data;
                    return patients;
                }).catch ((error) => {
                    console.log(error);
                })
            )
    },
    getPatient(id) {
        var url = 'https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients/' + id;
        return (
            axios.get(url).then((response) => {
                console.log(response);
                var patient = response.data;
                console.log('returned patient is: ' + JSON.stringify(patient));
                return patient;
            }).catch ((error) => {
                console.log(error);
            })
        )
    },
    addNewPatient(patient) {
        axios.post('https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients', {
            body: patient
        }).then(response => {
            console.log(response);
        }).catch ((error) => {
            console.log(error);
        })
    },
    getPatientRiskInfo(postalCode) {
        if (postalCode) {
            var url = 'https://open.propellerhealth.com/prod/forecast?postalCode=' + postalCode + '&latitude=0&longitude=0';
            return (
                axios.get(url).then((response) => {
                        var risk = response.data.properties.code;
                        return risk;
                    }).catch ((error) => {
                        console.log(error);
                    })
            );
        }
        else {
            var newPromise = new Promise(function(resolve, reject) {
                resolve('problem getting risk');
            });
            return newPromise;
        }
    }
}
