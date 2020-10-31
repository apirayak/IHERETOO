<template>
  <div class="pa-1">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <nav-dashboard></nav-dashboard>
      </v-col>
      <v-col cols="12" sm="10">
        <dashboard></dashboard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavDashboard from "@/components/NavDashboard";
import Dashboard from "@/components/Dashboard"
export default {
  components: {
    NavDashboard,
    Dashboard
  },
};
</script>