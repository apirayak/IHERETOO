<template>
  <v-card width="300px" height="700px" tile>
    <v-navigation-drawer width="300px" permanent>
      <v-system-bar></v-system-bar>
  
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Topics </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <div>
            <v-chip class="ma-1" outlined text-color="black">
              #การศึกษา
            </v-chip>
            <v-chip outlined text-color="black"> #ถนน </v-chip>
            <v-chip class="ma-1" outlined text-color="black">
              #ยาเสพติด
            </v-chip>
            <v-chip outlined text-color="black"> #คนไร้บ้าน </v-chip>
          </div>
        </v-list-item-group>
      </v-list>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Communities </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/4.jp"></v-img>
          </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Test</v-list-item-title>
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
      { text: "My Files", icon: "folder" },
      { text: "Shared with me", icon: "folder" },
      { text: "Starred", icon: "folder" },
      { text: "Recent", icon: "folder" },
    ],
  }),
};
</script>

<style>
</style>