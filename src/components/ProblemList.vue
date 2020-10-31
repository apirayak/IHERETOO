<template>
  <v-card
    class="mx-auto my-4 overflow-hidden"
    style="max-width: 600px;"
  >
    <v-row>
      <v-col
        class="d-flex"
        cols="12"
      >
        <v-img
          :src="image" height="220px"
        ></v-img>
      </v-col>
    </v-row>
    <v-card-title class="align-start">
      <div>
        <span class="headline">{{ title }}</span>
      </div>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
    </v-card-actions>
    <div class="pa-4 pt-0 pb-0 caption" style="text-align: left">
      <em>{{ description }}</em>
    </div>
    <!-- <v-divider></v-divider> -->
    <v-text-field
      class="pa-4 pb-0"
      v-model="comment"
      label="Enter your solution"
      @keypress.enter="onAddComment"
    >
    </v-text-field>
    <v-list>
      <v-list-item v-for="item in solutions" :key="item.id">
        <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        <v-list-item-content style="text-align: left;">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <em class="text--primary caption">{{ item.description}}</em>
          <div style="width: auto;">
            <v-btn
              class="ma-2"
              text
              icon
              color="blue lighten-2"
            >
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
    }
  },
  props: {
    title: String,
    image: String,
    description: String,
    solutions: Array
  },
  methods: {
    onAddComment() {
      if (this.comment !== '') {
        this.$emit('add', this.comment);
      }
      this.comment = '';
    }
  }
}
</script>