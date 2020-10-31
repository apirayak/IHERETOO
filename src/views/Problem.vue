<template>
  <div class="problem-page">
    <ProblemList
      v-for="(p, i) in problems"
      :key="i"
      :image="p.image"
      :title="p.title"
      :description="p.description"
      :solutions="p.solutions"
      @add="addNewComment($event, i)"
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
          title: '#ถนนไม่ควรเป็นแบบนี้',
          image: 'https://www.thairath.co.th/media/dFQROr7oWzulq5FZWuVzZ1VpsxVHoX7HFpRD8Y0RxP3VZczPzrbdaSevF5glfzk3fv3.jpg',
          description: 'ถนนไม่ควรที่จะเป็นแบบนี้ ถนนที่นี่พุพังมาก ไม่มีใครซ่อมมานานแรมปีแล้ว อยากให้หน่วยงานที่เกี่ยวข้อง หรือภาคเอกชน ช่วยมาดูแลจัดการให้ที ชาวบ้านที่ใช้เส้นทางนี้ในการเดินทางสรรจรลำบากมาก',
          solutions: [
            { id: '1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'รักถนน',  description: 'พวกเราจะใช้ทราย 20 กระสอบ กับปูนตราเสือดาว 10 กระสอบ บรรจงเทลงอย่างตั้งใจ พร้อมด้วยทีมงาน 7คน' },
            { id: '2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', name: 'บริษัท SCG',  description: 'จะใช้วิธีการถมปูนใหม่ทั้งหมด เพื่อที่จะให้ถนนมีระดับเท่ากัน' },
          ]
        },
        {
          title: '#เด็กๆควรมีชีวิตที่ดีกว่านี้',
          image: 'https://transbordernews.in.th/home/wp-content/uploads/17521954_1383866081656673_2081395115_o.jpg',
          description: 'น้องๆ เหล่านี้น่าสงสารมาก พวกเขาไม่ได้มีโอกาสในการเรียนหนังสือเทียบเท่ากับพวกเรา ซึ่งการศึกษาถือเป็นสิ่งที่จำเป็นมากต่อการประกอบอาชีพ หรือ การเลี้ยงดูตนเองในอนาคต ดังนั้นพวกเราควรมาช่วยกันทำให้เด็กเหล่านี้มีการศึกษาที่ดีขึ้นกันเถอะ',
          solutions: [
            { id: '1', avatar: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/29790923_1663080437140821_5881542173786112000_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeG1pdrIUExeNgBPVKFi2IWC1ENnsqGLxJTUQ2eyoYvElEVSvEGuA81G_L1jeFDv9CpAyIM8LUutMx8xgdnWQ4Xw&_nc_ohc=M8f440XHbFcAX9NPOmD&_nc_ht=scontent.fbkk22-1.fna&oh=32c368fa986afb8563e8c7d8e40712dd&oe=5FC2D6F5', name: 'Inskru',  description: 'พวกเราจะมี community ที่พร้อมจะให้การศึกษากับน้องๆ สามารถปรึกษาเพื่อหาทางแก้กับเราได้ที่ page facebook Inskru' },
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
        description: comment
      });
    }
  }
}
</script>