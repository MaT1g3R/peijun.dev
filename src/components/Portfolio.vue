<template>
  <v-container class="projects">
    <div id="projects-intro">
      <p class="title">
        I have worked on a variety of different projects over the years, here is
        a selection of the ones that I find interesting.
      </p>
      <p class="subtitle-2">
        For my complete public portfolio, please see my
        <a href="https://gitlab.otonokizaka.moe/Umi">GitLab</a> and
        <a href="https://github.com/MaT1g3R">GitHub</a> profiles.
      </p>
    </div>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="project in projects" :key="project.name">
          <project :details="project" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
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
export default class Portfolio extends Vue {
  projects: ProjectDetails[] = [
    {
      name: "Smart EV Charging Station",
      slug: "smart-ev-charging-station",
      description:
        "Data analytics and web dashboard for EV charging stations, for a capstone design course",
      keywords: ["AWS", "Spark", "project-management"]
    },
    {
      name: "peijun.dev",
      slug: "peijun-dev",
      description: "This website!",
      keywords: ["Vue", "Docker", "continuous-deployment"]
    },
    {
      name: "cloudflare-ddns",
      slug: "cloudflare-ddns",
      description: "Update Cloudflare DNS records using Terraform",
      keywords: ["Terraform", "Cloudflare", "DNS"]
    },
    {
      name: "ohs",
      slug: "ohs",
      description: "Schedule office hours with professors",
      keywords: [
        "Python",
        "Flask",
        "GraphQL",
        "React",
        "Docker",
        "continuous-integration"
      ]
    },
    {
      name: "Option",
      slug: "option",
      description: "Rust like Option and Result types in Python",
      keywords: ["functional-programming", "Python"]
    },
    {
      name: "musicview",
      slug: "musicview",
      description: "A terminal music player",
      keywords: ["Python", "Ncurses", "multithreading"]
    },
    {
      name: "YasenBaka",
      slug: "yasen-baka",
      description: "Asynchronous chat bot",
      keywords: ["asyncio", "Python", "Docker"]
    }
  ];
}
</script>

<style scoped lang="scss"></style>
