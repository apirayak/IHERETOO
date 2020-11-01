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
              #ถนน
            </v-chip>
            <v-chip class="ma-1" outlined text-color="black">
              #การศึกษา
            </v-chip>
            <v-chip outlined text-color="black"> #Hackathon </v-chip>
            <v-chip class="ma-1" outlined text-color="black">
              #ม็อบ
            </v-chip>
            <v-chip class="ma-1" outlined text-color="black">
              #ขี่รถบนทางเท้า
            </v-chip>
            <v-chip outlined text-color="black"> #รถไฟ </v-chip>
            <v-chip outlined text-color="black"> #การเดินทาง </v-chip>
          </div>
        </v-list-item-group>
      </v-list>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">Communities </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="dialog = true">เยาวชนปลดแอก</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

         <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="dialog">สมาคมโปรแกรมเมอร์</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

         <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Carrot LnwZa</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

         <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="Caption">+ สร้าง community</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          เยาวชนปลดแอก
        </v-card-title>

        <v-card-text class="mt-3">
          “เยาวชนปลดแอก” พื้นที่ของเยาวชน โดยเยาวชน เพื่อเยาวชน
        </v-card-text>
        <v-card-text>
          สมาชิก: 218.2K
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            small
            color="primary"
            outlined
            @click="dialog = false"
          >
            Join This Community
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    dialog: false,
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