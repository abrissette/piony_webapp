# My PIoNY Submission
A Submission to Tactio's Frontend Coding Challenge - Deployed Link: https://piony-app-nicholas.netlify.com/#/

## Project Structure
* src
    * components - Contains all .vue components
        * Header.vue - header component of document
        * Home.vue - main component of document (main and only page)
        * newPatient.vue - Modal to add a new patient
        * PatientInfo.vue - Modal to view a patient's modal
        * SearchBar.vue - component for the main search bar
    * api - Contains the api
        * Piony.js: file that contains all the api calls to the mock Piony API and the Propeller Health API
    * store - Vuex store
        * store.js - Vuex store for information

## Tools used
* VueJS as framework - Single File Components (.vue extension)
* AXIOS library for AJAX calls - Recommended by VueJs (https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
* Javascript/HTML/CSS/
* Bootstrap-vue: (https://bootstrap-vue.js.org/)
* PIonY API (https://app.swaggerhub.com/apis/TactioHealth/piony/1.0.2)
* Asthma Condition API documentation (http://forecastdocs.propellerhealth.com/swagger.html)
* Netlify (https://www.netlify.com/) for deployment
