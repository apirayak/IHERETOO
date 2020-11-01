<template>
  <div class="tracking pa-1">
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <nav-case-list></nav-case-list>
      </v-col>
      <v-col cols="12" sm="10">
        <case-data-table v-show="dataHide" class="pa-5"></case-data-table>
        <problem-detail v-show="problemHide" @back="changeShow"></problem-detail>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NavCaseList from "@/components/NavCaseList";
import CaseDataTable from "@/components/CaseDataTable"
import ProblemDetail from '@/components/ProblemDetail'

export default {
  components: {
    NavCaseList,
    CaseDataTable,
    ProblemDetail
  },

  data() {
    return {
      dataHide: false,
      problemHide: false
    };
  },
  methods: {
    openTracking() {
      this.trackHide = !this.trackHide;
    },
    changshow() {
      this.dataHide = !this.dataHide
    }
  },
};
</script>

<style scoped>
.tracking {
  text-align: -webkit-center;
}
</style>