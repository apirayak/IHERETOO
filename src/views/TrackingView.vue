<template>
  <div class="tracking pa-1">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <nav-case-list></nav-case-list>
      </v-col>
      <v-col cols="12" sm="10">
        <h1>Test</h1>
        <case-data-table class="pa-5"></case-data-table>
        <tracking-progress v-show="trackHide"></tracking-progress>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavCaseList from "@/components/NavCaseList";
import CaseDataTable from "@/components/CaseDataTable"
import TrackingProgress from "@/components/TrackingProgress";

export default {
  components: {
    TrackingProgress,
    NavCaseList,
    CaseDataTable
  },
  data() {
    return {
      trackHide: false,
    };
  },
  methods: {
    openTracking() {
      this.trackHide = !this.trackHide;
    },
  },
};
</script>

<style scoped>
.tracking {
  text-align: -webkit-center;
}
</style>