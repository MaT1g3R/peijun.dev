<template>
  <v-card class="project mx-auto" outlined width="355" height="170">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ details.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ details.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar>
        <v-btn fab :href="details.link" target="_blank">
          <v-icon class="fa fa-external-link-alt"></v-icon>
        </v-btn>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-chip-group column>
        <v-chip v-for="word in details.keywords" :key="word" small>{{
          word
        }}</v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
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
