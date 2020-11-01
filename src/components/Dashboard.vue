<template>
  <v-card class="pa-4" color="grey lighten-3">
    <v-card-title><h4 class="text-center">Top Communities</h4></v-card-title>
    <v-row>
      <v-col cols="6" sm="4" v-for="(c, index) in topThreeCommunities" :key="index">
        <TopRankCard :name="c.name" :description="c.description" :image="c.image" :likes="c.likes" />
      </v-col>
    </v-row>
    <v-row v-for="(cr, index) in remainCommunities" :key="index">
      <v-col cols="12">
        <v-card class="elevation-3">
          <v-list-item two-line>
            <v-list-item-avatar size="30">
              <v-img :src="cr.image"></v-img>
            </v-list-item-avatar>

            <v-list-item-content style="text-align: left">
              <v-list-item-title>{{ cr.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ cr.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn color="primary" text>
              <v-icon>mdi-thumb-up</v-icon>{{ computedLikes(cr.likes) }}
            </v-btn>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import TopRankCard from '@/components/TopRankCard.vue';

export default {
  components: {
    TopRankCard
  },
  data() {
    return {
      communities: [
        { name: 'Inskru', description: 'Community แลกเปลี่ยนไอเดียการสอนเจ๋ง ๆ ระหว่างครูและคนรักการสอนทั่วประเทศ', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 447 },
        { name: 'DEV DISRUPT', description: 'We welcome all University and High School aged developers and entrepreneurs at all levels of experience to participate in a 36 hours fast-paced Hackathon. Brainstorm, prototype and develop a product. Receive guidance from awesome speakers.', image: 'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/118769654_117689810056921_6614798674417583108_n.png?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGLGOi6ZVuY6biuSJCCtHVuBX9Q2T2gIbAFf1DZPaAhsBpFIpaU4a5OBswKgxoE30qbjC7c8bP3mftF7is_zjND&_nc_ohc=U8VfavJN4L0AX-5a-TR&_nc_ht=scontent.fbkk22-3.fna&oh=30912bcc3dd1784a949046e746e9cc12&oe=5FC55987', likes: 700 },
        { name: 'Dev ปลดแอก - Developers for Thai Freedom', description: 'online hackathon for developers to actively participate in the fight for freedom and democracy in Thailand by building software and hardware solutions', image: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/122611254_121075373120800_258491087174699105_o.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHdfErQ7UpZruedxxjBD_tmqw13j1TIXairDXePVMhdqPOb4ljGC56cNbCOmS0j5ANU1eroWCM5i6HiB1cnmHwh&_nc_ohc=gNeApGbMyAUAX9iUBbk&_nc_ht=scontent.fbkk22-2.fna&oh=d365315128d0f2d86b2d5c7f3389c32a&oe=5FC2858B', likes: 1000 },
        { name: 'SPACETH.co', description: 'เรื่องราวและข่าวสารอวกาศฉบับภาษาไทย โดยแฟนพันธุ์แท้และกลุ่มผู้ที่รักชื่นชอบในข่าวสารด้านการสำรวจอวกาศ ดาราศาสตร์ และเทคโนโลยีอวกาศ', image: 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t31.0-8/19477640_437299593321206_1241329941287941983_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEBLfbmTn4ApTzDDggsqkXpQOWO2CgyA2dA5Y7YKDIDZxQD5ry4zvIVW1amF_NAj7E75VbuB3CSqD3ogC9CC059&_nc_ohc=fP2t0yAG-KkAX_IT59N&_nc_ht=scontent.fbkk22-6.fna&oh=d65b244687ba0c20c3f9e1145cc60397&oe=5FC4D1C9', likes: 569 },
        { name: 'Datacookie', description: 'กลุ่มของคนรัก Data ที่จะเปลื่ยนเรื่อง Data ให้เป็นเรื่องหนมๆ', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/122431657_173551261026181_6300541862720025282_n.jpg?_nc_cat=101&ccb=2&_nc_sid=825194&_nc_eui2=AeF__9vOyKFQ3SnD1sNRWzxRhh62EedLW76GHrYR50tbvlVfkzZeroxmwXchOQnPE1hMSuaTb9VAu5Nn_SppA6ZH&_nc_ohc=Bfv--j9g3x8AX8icDs5&_nc_ht=scontent.fbkk22-1.fna&oh=ddb817f80fd425919e1492ab21be4602&oe=5FC4F610', likes: 184 },
        { name: 'JuniorDev', likes: 217, description: 'ชุมชนผู้เริ่มต้นพัฒนาโปรแกรม', image: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/71528643_133079814743577_7226195042870755328_o.png?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG7Ww1BLAwHNihrZ30jIyE3r37mbv0de-yvfuZu_R177O_GBQv5pZXJMl-oKK66mKKgMTehnjwmA5jd-lviLW9b&_nc_ohc=7s0bTtDN_nQAX96HUH7&_nc_ht=scontent.fbkk22-2.fna&oh=14024766aa2e2371efe0102cdb9df25d&oe=5FC4066C' },
        { name: 'Community Accelerator', likes: 413, description: 'กลุ่มนี้เป็นตัวแทนของความหลากหลายและมีความมุ่งมั่นในการช่วยเหลือและสร้างพลังให้กับกลุ่มชุมชนที่อาจไม่ได้รับโอกาสที่เท่าเทียม โดยเฉพาะกลุ่มชุมชนขนาดเล็กต่างๆ', image: 'https://medias.thansettakij.com/images/2020/07/14/1594714188_2.jpg'}
      ]
    }
  },
  methods: {
    computedLikes(likes) {
      if (likes < 1000) return likes;
      return Math.round(likes / 1000) + 'k';
    }
  },
  computed: {
    topThreeCommunities() {
      return [...this.communities].sort((a, b) => b.likes - a.likes).slice(0, 3);
    },
    remainCommunities() {
      return [...this.communities].sort((a, b) => b.likes - a.likes).slice(3);
    }
  },
  mounted() {
    console.log(this.remainCommunities);
  }
};
</script>

<style>
</style>