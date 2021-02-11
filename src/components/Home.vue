<template>
  <div>
    <v-container class="home">
      <p class="text-center display-3">Hi there, my name is Peijun</p>
      <p class="text-center headline">
        I'm software developer/SRE based in Toronto.
      </p>
      <v-container id="links" fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton href="https://github.com/MaT1g3R" icon="github"
              >GitHub</IconButton
            >
          </v-col>
          <v-col cols="auto">
            <IconButton href="https://gitlab.otonokizaka.moe/Umi" icon="gitlab"
              >GitLab</IconButton
            >
          </v-col>
          <v-col cols="auto">
            <IconButton
              href="https://www.linkedin.com/in/peijun-ma"
              icon="linkedin"
              >LinkedIn</IconButton
            >
          </v-col>
          <v-col cols="auto">
            <IconButton href="/static/peijun-ma-cv.pdf" icon="download" typ="fa"
              >Download CV</IconButton
            >
          </v-col>
        </v-row>
      </v-container>
      <div id="about-me" class="body-1">
        <div>
          <h3 class="title">About Me</h3>
          <p>
            I am currently finishing my undergrad in computer science at
            <a href="https://web.cs.toronto.edu/">University of Toronto</a>, and
            work as a software developer at
            <a href="https://garnercorp.io">Garner</a>.
          </p>
          <p>
            One of my main hobbies is learning about new things, especially
            things related to technology. I am never satisfied with the status
            quo in how we manage software projects, and constantly seek
            opportunities to improve the statue quo. As
            <a href="https://twitter.com/raymondh">Raymond Hettinger</a> put it:
            "There has to be a better way."
          </p>
          <p>
            Currently, some of my main interests include:
          </p>
          <ul>
            <li>
              Functional programming and software architecture
            </li>
            <li>
              Service oriented architecture
            </li>
            <li>
              Managing containerized software systems, especially on
              <a href="https://kubernetes.io/">Kubernetes</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="title">Free Software</h3>
          <p>
            I am a frequent contributor to the free software community. I
            believe we should give back to the community whenever possible, as
            they serve the foundation to much of our software projects.
          </p>
          <p>
            Some of the most notable free software projects I have contributed
            to include
            <a href="https://github.com/servo/servo">Servo</a>,
            <a href="https://github.com/python/cpython">Python</a>, and
            <a href="https://github.com/hashicorp/terraform">Terraform</a>.
          </p>
        </div>
        <div>
          <h3 class="title">Linux</h3>
          <p>
            I have been a full time Linux user since 2016, I use Linux mainly
            due to the fact that it respects the user's
            <a href="https://www.gnu.org/philosophy/free-sw.html">freedom</a>.
            Linux also makes me a much more productive developer. My current
            distro of choice is
            <a href="https://manjaro.org/">Manjaro Linux</a>.
          </p>
          <p>
            Linux has introduced me to system administration, which later lead
            me into the world of DevOps /
            <a href="https://landing.google.com/sre/">
              Site Reliability Engineering </a
            >. I run a homelab (fancy word for a bunch of servers at home)
            that's based around Linux and BSDs, stay tuned for more details.
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton.vue";

@Component({
  components: { IconButton }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
