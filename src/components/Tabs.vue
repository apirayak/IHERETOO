<template>
  <!-- <v-card>
    <v-toolbar
      dark
      flat
    >
      <v-toolbar-title>IHERETOO</v-toolbar-title>
      <v-btn text>
        Map
      </v-btn>
      <v-btn text>
        Tracking
      </v-btn>
      <v-btn text>
        Data visualization
      </v-btn>
    </v-toolbar>
  </v-card> -->
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <!-- <h4 class="font-weight-bold basil--text">Are you here?</h4> -->
      <h1 class="font-weight-bold display-3 basil--text">
        I HEAR TOO!
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
        Case lists
      </v-tab>

      <v-tab @click="redirect('/visualize')" >
        Dashboard
      </v-tab>

      <v-tab @click="redirect('/problem')" >
        Problem
      </v-tab>
    </v-tabs>

    <v-tabs-items>
      <v-tab-item>
        <v-card
          color="basil"
        >
          <v-card-text>asddsa</v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card
          color="basil"
          flat
        >
          <v-card-text>asdasd</v-card-text>
        </v-card>
      </v-tab-item>

       <v-tab-item>
        <v-card
          color="basil"
          flat
        >
          <v-card-text>asdasd</v-card-text>
        </v-card>
      </v-tab-item>     
    </v-tabs-items>
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