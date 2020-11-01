<template>
  <div class="problem-page">
    <ProblemList
      v-for="(p, i) in problems"
      :key="i"
      :image="p.image"
      :title="p.title"
      :score="p.score"
      :location="p.location"
      :description="p.description"
      :solutions="p.solutions"
      @add="addNewComment($event, i)"
      @like="onLikeComment($event, i)"
    />
  </div>
</template>

<script>
import ProblemList from '../components/ProblemList.vue';

export default {
  components: {
    ProblemList
  },
  data() {
    return {
      problems: [
        {
          title: '#ม๊อบ',
          score: 33,
          image: 'https://mpics.mgronline.com/pics/Images/563000010927907.JPEG',
          description: 'เวลาไปม็อบทีไร หาห้องน้ำยากมากๆ คนเยอะ แถมบางที่ก็ไม่สะอาด',
          location: 'ห้าแยกลาดพร้าว กทม.',
          solutions: [
            { id: '1', like: 12, avatar: 'https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/75462370_115562986559434_429129458356584448_o.jpg?_nc_cat=1&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE-5T9nVy4mOMu7yW6TdDeCTigF3SfZEcJOKAXdJ9kRwuTW1vYeL_1cAeXCKYeMTM8KX0-WTgIRc1C5uSVT9G_b&_nc_ohc=h3Cos_Ouz7gAX-sReuW&_nc_ht=scontent.fbkk22-6.fna&oh=a26820b05546888c6114da6bfd30f6eb&oe=5FC2C021', name: 'เยาวชนปลดแอก',  description: 'ทางเราจะขอความร่วมมือสมาชิกให้ survey สถานที่ห้องน้ำ และแจ้งให้แก่ผู้ร่วมชุมนุมทุกท่าน' },
            { id: '2', like: 23, avatar: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/122611254_121075373120800_258491087174699105_o.png?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE3uHV6zzh6awVVNq1dMLSUqw13j1TIXairDXePVMhdqLpc9fSKPkyQX9Be8zO5lxQ6hs_MKD49xWepRft9T71O&_nc_ohc=gNeApGbMyAUAX9iUBbk&_nc_ht=scontent.fbkk22-2.fna&oh=523db7ab1757edeb3a03ce45fe921087&oe=5FC2858B', name: 'devปลดแอก',  description: 'พวกเราจะทำ แอพพลิเคชั่นเพื่อใช้ในการหาห้องน้ำ ตามสถานที่สำคัญทั่วประเทศไทย' },
          ]
        },
        {
          title: '#การศึกษา',
          score: 23,
          location: '492 ถนน พระรามที่ ๑ แขวงปทุมวัน เขตปทุมวัน กรุงเทพมหานคร 10330 ประเทศไทย',
          image: 'https://transbordernews.in.th/home/wp-content/uploads/17521954_1383866081656673_2081395115_o.jpg',
          description: 'น้องๆ เหล่านี้น่าสงสารมาก พวกเขาไม่ได้มีโอกาสในการเรียนหนังสือเทียบเท่ากับพวกเรา ซึ่งการศึกษาถือเป็นสิ่งที่จำเป็นมากต่อการประกอบอาชีพ หรือ การเลี้ยงดูตนเองในอนาคต ดังนั้นพวกเราควรมาช่วยกันทำให้เด็กเหล่านี้มีการศึกษาที่ดีขึ้นกันเถอะ',
          solutions: [
            { id: '1', like: 7, avatar: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', name: 'Inskru',  description: 'พวกเรามี Plan ที่จัดค่ายอาสาให้แก่น้องๆ ในจังหวัดห่างไกล ขอบคุณที่ให้ข้อมูลครับ' },
          ]
        },
      ]
    }
  },
  methods: {
    addNewComment(comment, i) {
      this.problems[i].solutions.push({
        id: `${this.problems[i].solutions.length + 1}`,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Community',
        description: comment,
        like: 0,
      });
    },
    onLikeComment(commentIndex, problemIndex) {
      this.problems[problemIndex].solutions[commentIndex].like += 1;
    }
  }
}
</script>