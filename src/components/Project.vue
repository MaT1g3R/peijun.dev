<template>
  <v-card class="project mx-auto" outlined width="355" height="170">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ details.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ details.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar size="30">
        <v-btn text :href="details.link" target="_blank">
          <i class="nf nf-fa-external_link"></i>
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

<style scoped lang="scss">
.nf {
  font-size: 1.2rem;
  width: 1.2rem;
  text-align: left;
}
</style>
