<template>
<div>
  <v-data-table
    :headers="headers"
    :items="problems"
    @click:row="onClick"
    class="elevation-1"
  >
  </v-data-table>

  <v-dialog>


  </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
            {
                text: '#',
                value: 'no'
            },
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'detail',
          },
          { text: 'Location', value: 'location' },
          { text: 'Tag', value: 'category' },
          { text: 'Watch', value: 'date' },
        ],
        problems: [
          {
            no: '1',
            detail: 'Dev Disrupt Hackathon แอร์เย็นมาก',
            status: 'todo',
            category: '#Hackathon',
            location: 'FYI Center กทม.',
            date: '23'
          },
          {
            no: '2',
            detail: 'เวลาไปม็อบหาห้องน้ำยากมาก',
            status: 'status',
            category: '#ม็อบ',
            location: 'ห้าแยกลาดพร้าว กทม.',
            date: '132'
          },
          {
            no: '3',
            detail: 'ขึ้นรถไฟกลับบ้าน เสียเวลามาก',
            status: 'status',
            category: '#การเดินทาง #รถไฟ',
            location: 'หัวลำโพง กทม.',
            date: '34'
          },
          {
            no: '4',
            detail: 'เด็กป.4 ไม่มีหนังสือเรียน',
            status: 'status',
            category: '#การศึกษา',
            location: 'อ.แม่สอด จ.เชียงใหม่',
            date: '33'
          },
          {
            no: '5',
            detail: 'ถนนขรุขระเดินทางลำบาก',
            status: 'status',
            category: '#ถนน',
            location: 'หน้าหมู่บ้านลัดดาแลนด์',
            date: '34'
          },
          {
            no: '6',
            detail: 'เจอคนขี่รถจักรยานยนต์บนทางเท้า',
            status: 'status',
            category: '#ขี่รถบนทางเท้า',
            location: 'มจธ',
            date: '23'
          }
        ]
      }
    },
    methods: {
      getColor (status) {
          switch (status) {
            case 'done':
                return 'green'
            case 'todo':
                return 'grey'
            case 'doing':
                return 'orange'
            default:
                return 'grey'
          }
      },
      onClick() {
        this.$router.push('/problem')
      }
    },
  }
</script>

<style>

</style>