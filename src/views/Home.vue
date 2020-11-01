<template>
  <div>
    <map-plate>
    </map-plate>
    <!-- <card-bottom></card-bottom> -->
  </div>

</template>

<script>
import MapPlate from '@/components/MapPlate'
// import CardBottom from '@/components/CardBottom'

export default {
  name: 'Home',

  components: {
    MapPlate,
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
