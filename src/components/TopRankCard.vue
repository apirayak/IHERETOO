<template>
  <v-card
    class="elevation-16 mx-auto"
    width="500"
  >
    <v-card-title class="headline">
      <div class="mx-auto">
        <v-list-item-avatar>
          <v-img :src="image"></v-img>
        </v-list-item-avatar>
        <h5>{{ name }}</h5>
      </div>
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-space-between">
      <v-btn color="primary" text>
        <v-icon>mdi-thumb-up</v-icon>{{ computedLikes }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    likes: Number,
    description: String,
  },
  computed: {
    computedLikes() {
      if (this.likes < 1000) return this.likes;
      return Math.round(this.likes / 1000) + 'k';
    }
  }
}
</script>