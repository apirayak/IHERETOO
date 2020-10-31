<template>
  <div class="problem-page">
    <ProblemList
      v-for="(p, i) in problems"
      :key="i"
      :image="p.image"
      :title="p.title"
      :description="p.description"
      :solutions="p.solutions"
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
            { id: '1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', name: 'Community1',  description: 'test' },
            { id: '2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', name: 'Community2',  description: 'test' },
            { id: '3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', name: 'Community3',  description: 'test' },
            { id: '4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', name: 'Community4',  description: 'test' },
          ]
        }
      ]
    }
  } 
}
</script>