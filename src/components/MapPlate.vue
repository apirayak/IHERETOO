<template>
  <v-card flat height="765px">
    <gmap-map :center="center" :zoom="12" style="width: 100%; height: 100%">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </v-card>
</template>

<script>
const firebase = require("../firebase");

export default {
  name: "MapPlate",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 13.7425738, lng: 100.551799 },
      markers: [
        {
          position: { lat: 13.7425738, lng: 100.551799 },
        },
      ],
      places: [],
      currentPlace: null,
    };
  },

  mounted() {
    this.geolocate();
    this.getDataFromFirebase();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      console.log("test");
      const marker = {
        lat: 15.7425738,
        lng: 110.551799,
      };
      this.markers.push({ position: marker });
      console.log(this.markers);
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    getDataFromFirebase() {
      firebase.db.ref("problems").on("value", (snapshot) => {
        snapshot.forEach((snapshotUser) => {
          snapshotUser.forEach((data) => {
            const marker = {
              lat: data.val().latitude,
              lng: data.val().longitude,
            };
            this.markers.push({ position: marker });
            console.log(data.val())
            this.$store.dispatch("addProblem", data.val());
          });
        });
      });
    },
  },
};
</script>