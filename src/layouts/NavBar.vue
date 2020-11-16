<template>
  <v-card>
    <v-container id="nav" fluid>
      <v-row dense>
        <v-col cols="auto" align-self="center">
          <v-switch
            v-model="$vuetify.theme.dark"
            hide-details
            inset
            label="Dark theme"
            style="margin: 0;"
          ></v-switch>
        </v-col>
        <v-col cols="auto">
          <v-tabs center-active show-arrows>
            <v-tab :to="{ path: '/' }">Home </v-tab>
            <v-tab :to="{ path: '/portfolio' }">Portfolio </v-tab>
            <v-tab :to="{ path: '/cv' }">Curriculum vitae </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped lang="scss">
#nav {
  padding: 0 1rem 0 1rem;
}
</style>
