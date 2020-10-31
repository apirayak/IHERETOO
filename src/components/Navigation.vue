<template>
<v-card>
  <v-navigation-drawer
  v-model="drawer"
  :mini-variant.sync="mini"
  permanent>
    <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-icon>Home</v-icon>
        </v-list-item-avatar>

        <v-list-item-title>John</v-list-item-title>

        <v-btn
        icon
        @click.stop="mini =!mini">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
            <v-list-item-icon>
                <v-icon>search</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home'}
            ]
        }
    }

};
</script>

<style>
</style>