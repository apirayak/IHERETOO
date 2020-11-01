<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <!-- <h4 class="font-weight-bold basil--text">Are you here?</h4> -->
      <h1 class="font-weight-bold display-3 basil--text">
        I HEAR TOO
      </h1>
    </v-card-title>

    <v-tabs
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab @click="redirect('/home')">
        Overall
      </v-tab>

      <v-tab @click="redirect('/tracking')">
        Problems
      </v-tab>

      <v-tab @click="redirect('/visualize')" >
        Contest
      </v-tab>

      <v-tab @click="redirect('/problem')" >
        Discuss
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        'Map', 'Explore data', 'Videos', 'Images',
      ],
    }),

    methods: {
      redirect: function(path) {
        this.$router.push({ path });
      }
    },
  }
</script>