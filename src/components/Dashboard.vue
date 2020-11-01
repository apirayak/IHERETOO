<template>
  <v-card class="pa-4" color="grey lighten-3">
    <v-card-title><h4 class="text-center">Top Communities</h4></v-card-title>
    <v-row>
      <v-col cols="6" sm="4" v-for="(c, index) in topThreeCommunities" :key="index">
        <TopRankCard :name="c.name" :description="c.description" :image="c.image" :likes="c.likes" />
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
        { name: 'Inskru', description: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 1 },
        { name: 'Inskru', description: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 2 },
        { name: 'Inskru', description: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 3000 },
        { name: 'Inskru', description: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 4 },
        { name: 'Inskru', description: 'If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!', image: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', likes: 3 },
      ]
    }
  },
  computed: {
    topThreeCommunities() {
      return [...this.communities].sort((a, b) => b.likes - a.likes).slice(0, 3);
    },
    remainCommunities() {
      return [...this.communities].sort((a, b) => b.likes - a.likes).slice(2, -1);
    }
  },
  mounted() {
    console.log(this.remainCommunities);
  }
};
</script>

<style>
</style>