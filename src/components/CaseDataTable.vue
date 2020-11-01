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
                text: 'No.'
            },
          {
            text: 'Case name',
            align: 'start',
            sortable: false,
            value: 'detail',
          },
          { text: 'Status', value: 'status' },
          { text: 'Catagory', value: 'fat' },
          { text: 'Location', value: 'address' },
          { text: 'Date', value: 'protein' },
        ]
      }
    },
    computed: {
      problems() {
        return this.$store.getters.getProblems
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