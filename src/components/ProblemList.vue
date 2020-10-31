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
          src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZWuVzZ1VpsxVHoX7HFpRD8Y0RxP3VZczPzrbdaSevF5glfzk3fv3.jpg" height="220px"
        ></v-img>
      </v-col>
    </v-row>
    <v-card-title class="align-start">
      <div>
        <span class="headline">#ถนนไม่ควรเป็นแบบนี้</span>
      </div>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
    </v-card-actions>
    <div class="pa-4 pt-0 pb-0 caption" style="text-align: left">
      <em>ถนนไม่ควรที่จะเป็นแบบนี้ ถนนที่นี่พุพังมาก ไม่มีใครซ่อมมานานแรมปีแล้ว อยากให้หน่วยงานที่เกี่ยวข้อง หรือภาคเอกชน ช่วยมาดูแลจัดการให้ที ชาวบ้านที่ใช้เส้นทางนี้ในการเดินทางสรรจรลำบากมาก</em>
    </div>
    <!-- <v-divider></v-divider> -->
    <v-text-field
      class="pa-4 pb-0"
      v-model="comment"
      label="Enter your solution"
    >
    </v-text-field>
    <v-list>
      <v-list-item v-for="item in items" :key="item">
        <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
        <v-list-item-content style="text-align: left;">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            <span class="text--primary">{{ item.description}}1</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :inset="true"></v-divider>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
      items: [
        { id: '1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'Community1',  description: 'test' },
        { id: '2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', name: 'Community2',  description: 'test' },
        { id: '3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', name: 'Community3',  description: 'test' },
        { id: '4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', name: 'Community4',  description: 'test' },
      ]
    }
  },
  props: {
    title: String,
    rating: Number
  }
}
</script>