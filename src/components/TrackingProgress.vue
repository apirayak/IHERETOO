<template>
  <v-timeline
    class="ma-5"
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :icon="item.icon"
      :color="item.color"
      fill-dot
      small
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p> {{ item.content }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
            title: 'ปัญหาถูกส่งถึงหน่วยงานที่เกี่ยวข้อง',
            content: 'asdasdasdasdad',
            color: 'primary',
            icon: 'account_balance',
        },
        {
            title: 'หน่วยงานรับทราบถึงปัญหา',
            content: 'asdasdasdasdad',
            color: 'primary',
            icon: 'grading',
        },
        {
            title: 'ดำเนินแการแก้ไข',
            content: 'asdasdasdasdad',
            color: 'primary',
            icon: 'assignment',
        },
        {
            title: 'ปัญหาถูกแก้ไขเรียบร้อยแล้ว',
            content: 'asdasdasdasdad',
            color: 'success',
            icon: 'verified',
        },
      ],
    }),
  }
</script>
<style>

</style>