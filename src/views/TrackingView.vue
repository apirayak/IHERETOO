<template>
  <div class="tracking ma-5">
    <v-card class="pa-4">
      <h1>Find Tracking Case</h1>
      <div class="pa-4">
        <v-text-field label="ENTER CASE ID" filled dense rounded
        placeholder="e.g. XX0000"></v-text-field>
        <v-btn outlined @click="openTracking()"> Find Case</v-btn>
      </div>
    </v-card>

    <tracking-progress v-show="trackHide"></tracking-progress>
  </div>
</template>

<script>
import TrackingProgress from "@/components/TrackingProgress";
export default {
  components: {
    TrackingProgress,
  },
  data(){
    return {
      trackHide: false
    }
  },
  methods: {
    openTracking() {
      this.trackHide = !this.trackHide
    }
  }
};
</script>

<style scoped>
  .tracking {
    text-align: -webkit-center;
  }
</style>