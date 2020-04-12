<template>
  <div class="cv">
    <div id="cv-body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Cv extends Vue {
  async beforeCreate() {
    const resp = await this.$http.get("/static/peijun-ma-cv.html");
    const data = await resp.text();
    const el = document.getElementById("cv-body");
    if (el) {
      el.innerHTML = data;
    }
  }
}
</script>

<style scoped lang="scss"></style>
