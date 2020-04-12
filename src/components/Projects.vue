<template>
  <div class="projects">
    <h1>
      I have worked on a variety of different open source projects over the
      years, here is a selection of the ones that I find interesting.
    </h1>
    <h2>
      For my complete public portfolio, please see my
      <a href="https://gitlab.otonokizaka.moe/Umi">GitLab</a> and
      <a href="https://github.com/MaT1g3R">GitHub</a> profiles.
    </h2>
    <ul>
      <li v-for="project in projects" :key="project.name">
        <project :details="project" />
      </li>
    </ul>
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
export default class Projects extends Vue {
  projects: ProjectDetails[] = [
    {
      name: "peijun.dev",
      link: "https://gitlab.otonokizaka.moe/Umi/peijun.dev",
      description: "This website!",
      keywords: ["Vue", "Docker", "continuous-deployment"]
    },
    {
      name: "cloudflare-ddns",
      link: "https://github.com/MaT1g3R/cloudflare-ddns",
      description: "Update Cloudflare DNS records using Terraform",
      keywords: ["Terraform", "Cloudflare", "DNS"]
    },
    {
      name: "ohs",
      link: "https://github.com/office-hour-scheduler/ohs",
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
      link: "https://github.com/MaT1g3R/option",
      description: "Rust like Option and Result types in Python",
      keywords: ["functional-programming", "Python"]
    },
    {
      name: "musicview",
      link: "https://github.com/MaT1g3R/musicview",
      description: "A terminal music player",
      keywords: ["Python", "Ncurses", "multithreading"]
    },
    {
      name: "YasenBaka",
      link: "https://github.com/MaT1g3R/YasenBaka",
      description: "Asynchronous chat bot",
      keywords: ["asyncio", "Python", "Docker"]
    }
  ];
}
</script>

<style scoped lang="scss"></style>
