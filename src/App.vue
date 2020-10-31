<template>
  <v-app>
    <tabs></tabs>
    <router-link to="/"></router-link>
    <router-view/>
  </v-app>
</template>

<script>
import Tabs from '@/components/Tabs'

import Firebase from "firebase";
var firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyARoDFePdcknvjV6pRo6gDtMIcnixcsnSM",
    authDomain: "iheretoo-38e17.firebaseapp.com",
    databaseURL: "https://iheretoo-38e17.firebaseio.com",
    projectId: "iheretoo-38e17",
    storageBucket: "iheretoo-38e17.appspot.com",
    messagingSenderId: "448177809729",
    appId: "1:448177809729:web:e93c2cd07135a7a55899c0"
});
var db = firebaseApp.database();

export default {
  name: 'App',

  firebase: {
    users: db.ref("db"),
  },

  components: {
    Tabs
  },
  
  data() {
    return {
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
