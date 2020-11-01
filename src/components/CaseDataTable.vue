<template>
  <v-data-table
    :headers="headers"
    :items="problems"
    class="elevation-1"
  >
    <template v-slot:[`items.status`]="{ items }">
      <v-chip
        :color="getColor(items.status)"
        dark
      >
        {{ items.status }}
      </v-chip>
    </template>
  </v-data-table>
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
          { text: 'Status', value: 'status' },
          { text: 'Tag', value: 'category' },
          { text: 'Watch', value: 'date' },
        ],
        problems: [
          {
            no: '1',
            detail: 'Dev Disrupt Hackathon แอร์เย็นมาก',
            status: 'todo',
            category: '#Hackathon',
            location: 'อำเภอ',
            date: '23'
          },
          {
            no: '2',
            detail: 'tes',
            status: 'status',
            category: '#ยาเสพติด',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '3',
            detail: 'ถนนเข้าหมู่บ้านเป็นหลุมมานานมาก',
            status: 'status',
            category: '#ถนน',
            location: 'แขวงบางมด เขตทุ่งครุ่ กทม',
            date: 'asdsad'
          },
          {
            no: '4',
            detail: 'tes',
            status: 'status',
            category: '#คนไร้บ้าน',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '5',
            detail: 'ขึ้นรถไฟกลับบ้าน เสียเวลามาก',
            status: 'status',
            category: '#การเดินทาง',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '6',
            detail: 'tes',
            status: 'status',
            category: '#การศึกษา',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '7',
            detail: 'tes',
            status: 'status',
            category: '#การศึกษา',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '8',
            detail: 'tes',
            status: 'status',
            category: '#การศึกษา',
            location: 'assad',
            date: 'asdsad'
          },
          {
            no: '9',
            detail: 'tes',
            status: 'status',
            category: '#การศึกษา',
            location: 'assad',
            date: 'asdsad'
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
    },
  }
</script>

<style>

</style>