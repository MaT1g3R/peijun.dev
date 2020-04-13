<template>
  <v-app>
    <nav-bar />

    <base-view />
  </v-app>
</template>

<script>
export default {
  name: "Layout",
  components: {
    NavBar: () => import("./NavBar"),
    BaseView: () => import("./BaseView")
  }
};
</script>
