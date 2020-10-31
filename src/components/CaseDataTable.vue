<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :color="getColor(item.status)"
        dark
      >
        {{ item.status }}
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
                text: 'No.'
            },
          {
            text: 'Case name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Status', value: 'status' },
          { text: 'Catagory', value: 'fat' },
          { text: 'Location', value: 'carbs' },
          { text: 'Date', value: 'protein' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            status: 'todo',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'todo',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'done',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'done',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Frozen Yogurt',
            status: 'doing',
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
        ],
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