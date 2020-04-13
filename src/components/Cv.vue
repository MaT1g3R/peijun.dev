<template>
  <div class="cv">
    <v-container id="cv-body" class="body-1"></v-container>
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
      const contact = el.getElementsByTagName("table")[0];
      if (contact) {
        contact.style.marginBottom = "5px";
      }
      const rows = el.querySelectorAll("td > span");
      Array.prototype.slice
        .call(rows)
        .forEach(row => (row.style.marginRight = "5px"));
    }
  }
}
</script>

<style scoped lang="scss"></style>
