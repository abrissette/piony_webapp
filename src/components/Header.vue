<template>
    <header>
        <b-navbar toggleable="md" type="dark" variant="info">

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-navbar-brand href="#">PIoNY</b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Patients</b-nav-item>
              <b-nav-item href="#">About</b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import Vue from 'vue'

    export default Vue.extend({
    })

</script>
