<template>
  <div class="home">
    <div id="title">
      <h1>Hi there, my name is Peijun</h1>
      <h2>I'm software developer/SRE based in Toronto.</h2>
      <a class="button" href="https://github.com/MaT1g3R">GitHub</a>
      <a class="button" href="/static/peijun-ma-cv.pdf">Download CV</a>
    </div>
    <div id="about-me">
      <div>
        <h2>About Me</h2>
        <p>
          I am currently finishing my undergrad in computer science at
          <a href="https://web.cs.toronto.edu/">University of Toronto</a>, and
          work as a software developer at
          <a href="https://garnercorp.io">Garner</a>.
        </p>
        <p>
          One of my main hobbies is learning about new things, especially things
          related to technology. I am never satisfied with the status quo in how
          we manage software projects, and constantly seek opportunities to
          improve the statue quo. As
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
        <h2>Free Software</h2>
        <p>
          I am a frequent contributor to the free software community. I believe
          we should give back to the community whenever possible, as they serve
          the foundation to much of our software projects.
        </p>
        <p>
          Some of the most notable free software projects I have contributed to
          include
          <a href="https://github.com/servo/servo">Servo</a>,
          <a href="https://github.com/python/cpython">Python</a>, and
          <a href="https://github.com/hashicorp/terraform">Terraform</a>.
        </p>
      </div>
      <div>
        <h2>Linux</h2>
        <p>
          I have been a full time Linux user since 2016, I use Linux mainly due
          to the fact that it respects the user's
          <a href="https://www.gnu.org/philosophy/free-sw.html">freedom</a>.
          Linux also makes me a much more productive developer. My current
          distro of choice is <a href="https://manjaro.org/">Manjaro Linux</a>.
        </p>
        <p>
          Linux has introduced me to system administration, which later lead me
          into the world of DevOps /
          <a href="https://landing.google.com/sre/">
            Site Reliability Engineering </a
          >. I run a homelab (fancy word for a bunch of servers at home) that's
          based around Linux and BSDs, stay tuned for more details.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
#title {
  text-align: center;
}

#about-me {
  margin-left: 10%;
}
</style>
