<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">peijun.dev</h1>

      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton
              href="https://gitlab.otonokizaka.moe/Umi/peijun.dev"
              icon="gitlab"
              >GitLab</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h4">Introduction</h2>
      <p class="text-body-1">
        peijun.dev is my personal website built with
        <a href="https://vuejs.org/">Vue.js</a>, utilizing
        <a href="https://www.typescriptlang.org/">TypeScript</a> and
        <a href="https://class-component.vuejs.org/">Vue Class Component</a>.
        It's my first attempt at a Vue application. I think the simplicity of
        Vue is a massive selling point to the framework, and I definitely can
        see why it's popular; combined with TypeScript it should be fairly easy
        to scale up the code base if needed.
      </p>

      <p>
        The <a href="/cv">CV</a> page is originally written in LaTeX, and I used
        <a href="https://pandoc.org/">Pandoc</a> to covert it into HTML and
        embedded into the Vue application.
      </p>

      <h2 class="text-h4">Deployment</h2>
      <ImageFigure
        src="/static/peijun-dev-ci.png"
        caption="CI pipeline"
      ></ImageFigure>
      <p class="text-body-1">
        This website is deployed as a
        <a href="https://www.docker.com/">Docker</a> container. The CI and CD
        pipelines are implemented with GitLab CI. On each successful master
        commit, the CI pipeline will publish a docker image to the GitHub docker
        registry, and kick off the CD pipeline. The CD pipeline then would
        automatically fetch the latest image and deploy it to my personal
        server.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton.vue";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";

@Component({
  components: { ImageFigure, IconButton }
})
export default class PeijunDev extends Vue {}
</script>
