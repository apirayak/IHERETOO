<template>
  <v-card
  height="300px">
      <v-container>
        <v-row>
            <v-col>
                <v-card>
                    Test1
                </v-card>
            </v-col>

            <v-col>
                <v-card>
                    Test2
                </v-card>
            </v-col>
        </v-row>
      </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'CardBottom',

    data(){
        return {
            value: 1,
            active: true
        }
    }

}
</script>

<style>

</style>