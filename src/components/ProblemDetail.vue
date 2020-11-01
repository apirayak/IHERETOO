<template>
  <v-card
    flat
    height="600px"
    tile
  >
    <v-toolbar dense>
      <v-btn icon>
        <v-icon @click="back">arrow_back_ios</v-icon>
      </v-btn>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {

methods: {
    back() {
        this.$emit('back')
    }
}
}
</script>

<style>

</style>