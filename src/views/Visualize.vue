<template>
  <div class="pa-1">
    <v-row no-gutters>
      <v-col>
        <dashboard></dashboard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard"

export default {
  components: {
    Dashboard
  },
};
</script>