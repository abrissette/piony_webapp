import axios from 'axios'

export default {

    /**
        Get the initial list of patients from the database
    */
    getPatients() {
        return (
            axios.get('https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients')
                .then((response) => {
                    console.log(response);
                    var patients = response.data;
                    return patients;
                })
                .catch ((error) => {
                    console.log(error);
                })
            )
    },
    addNewPatient(patient) {
        console.log(patient);
        axios.post('https://virtserver.swaggerhub.com/TactioHealth/piony/1.0.2/patients', {
            body: patient
        })
        .then(response => {
            console.log(response);
        })
        .catch ((error) => {
            console.log(error);
        })
    },
    getPatientRisk(postalCode) {
        var url = 'https://open.propellerhealth.com/prod/forecast?postalCode=' + postalCode + '&latitude=0&longitude=0';
        axios.get(url)
            .then((response) => {
                var risk = response.data.properties.code;
                return risk;
            })
            .catch ((error) => {
                console.log(error);
            })
    }
}
