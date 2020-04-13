<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>
export default { name: "App" };
</script>

<style lang="scss">
@import url(assets/css/nerd-fonts-generated.css);
</style>
