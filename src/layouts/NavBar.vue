<template>
  <v-card id="nav">
    <v-app-bar dense>
      <v-switch
        id="dark-theme-toggle"
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label="Dark theme"
      ></v-switch>
      <v-tabs centered>
        <v-tab :to="{ path: '/' }">Home </v-tab>
        <v-tab :to="{ path: '/projects' }">Projects </v-tab>
        <v-tab :to="{ path: '/cv' }">Curriculum vitae </v-tab>
      </v-tabs>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
