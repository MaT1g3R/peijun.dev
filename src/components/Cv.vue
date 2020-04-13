<template>
  <v-container class="cv">
    <v-btn href="/static/peijun-ma-cv.pdf" target="_blank" rounded>
      <i class="nf nf-fa-download"></i>
      Download printable
    </v-btn>
    <v-container id="cv-body" class="body-1"></v-container>
  </v-container>
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

<style scoped lang="scss">
.nf {
  font-size: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}
</style>
