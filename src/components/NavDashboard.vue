<template>
  <v-card
    width="256px"
    height="765px"
    tile
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Dashboard
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'folder' },
        { text: 'Shared with me', icon: 'folder' },
        { text: 'Starred', icon: 'folder' },
        { text: 'Recent', icon: 'folder' },
      ],
    }),
  }
</script>

<style>
</style>