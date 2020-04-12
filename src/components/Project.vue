<template>
  <div class="project">
    <a :href="details.link">{{ details.name }}</a>
    <p>{{ details.description }}</p>
    <ul>
      <li v-for="word in details.keywords" :key="word">{{ word }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectDetails from "./ProjectDetails";

@Component
export default class Project extends Vue {
  @Prop() details!: ProjectDetails;
}
</script>

<style scoped lang="scss"></style>
