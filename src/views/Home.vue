<template>
  <div>
    <map-plate>
    </map-plate>
    <!-- <card-bottom></card-bottom> -->

    <create-problem-dialog
    ref="createProblem">
    </create-problem-dialog>

  </div>

</template>

<script>
import MapPlate from '@/components/MapPlate'
// import CardBottom from '@/components/CardBottom'
import CreateProblemDialog from '@/components/dialogs/CreateProblemDialog'

export default {
  name: 'Home',

  components: {
    MapPlate,
    // CardBottom,
    CreateProblemDialog
  },

  data() {
    return {
    }
  },
  
  methods: {
    openDialog() {
      // alert('test')
      this.$refs.createProblem.open()
    }
  }
}
</script>
