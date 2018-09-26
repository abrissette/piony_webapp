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
                    console.log(error)
                })
            )
    },
}
