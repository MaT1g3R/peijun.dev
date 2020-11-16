<template>
  <v-card class="project mx-auto" outlined width="355" height="260">
    <v-card-title>
      {{ details.name }}
    </v-card-title>
    <v-card-text>
      <div>
        {{ details.description }}
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="keywords">
      <v-chip-group column>
        <v-chip v-for="word in details.keywords" :key="word" small>{{
          word
        }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="project-actions">
      <v-btn class="action-button" :to="{ path: slug }">
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectDetails from "./ProjectDetails";

@Component
export default class Project extends Vue {
  @Prop() details!: ProjectDetails;
  slug = "portfolio/" + this.details.slug;
}
</script>

<style scoped lang="scss">
.project {
  display: flex;
  flex-direction: column;
}
.project-actions {
  margin-top: auto;
}
</style>
