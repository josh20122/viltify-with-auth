<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"> </v-navigation-drawer>

    <v-app-bar circle tile collapse-on-scroll flat color="" dense>
      <v-btn icon>
        <v-icon> mdi-rocket </v-icon>
      </v-btn>
      <v-btn absolute top fab>
        <v-icon> mdi-rocket </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon> mdi-rocket </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-rocket</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
</style>