<template>
  <div>
    {{ $route.params.project }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Project from "./Project.vue";
import ProjectDetails from "./ProjectDetails";

@Component({
  components: {
    Project
  }
})
export default class ProjectDetail extends Vue {}
</script>

<style scoped></style>
