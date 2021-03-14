<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">Smart EV Charging Station</h1>

      <h2 class="text-h4">Background</h2>
      <p class="text-body-1">
        As a part of a capstone design course at University of Toronto, me and 4
        other students were tasked to implement a data analytics and
        presentation application for an engineering company.
      </p>
      <h2 class="text-h4">Project requirements</h2>
      <p class="text-body-1">
        The first task for this project is to write the project requirements
        document. This document has a specific format in the engineering field,
        which I was not familiar with. My team members provided me with a
        textbook called "Designing Engineers", and after reading it I learned
        how to write a proper project requirements document, and was able to
        finish the constraints section assigned to me.
      </p>
      <h2 class="text-h4">Design proposal</h2>
      <ImageFigure
        src="/static/high-level-overview.png"
        caption="High level architecture overview"
      >
      </ImageFigure>
      <p class="text-body-1">
        The design proposal is the second document in line to be completed, and
        I took the job to design the overarching system architecture. I worked
        closely with the cloud infrastructure design and applied my experiences
        in working with production software to produce the final architecture.
      </p>
      <p class="text-body-1">
        The final design involves a monolithic web application consuming
        pre-processed data produced by the data pipelines, and serving the data
        to the users at an API endpoint. The data pipelines would leverage
        <a href="https://spark.apache.org/docs/latest/index.html"
          >Apache Spark</a
        >
        , as it has the scalability that we will need. The backend would use the
        industry standard <a href="https://oauth.net/2/">OAuth 2.0</a> as its
        user authentication mechanism.
      </p>
      <ImageFigure
        src="/static/auth.png"
        caption="OAuth2.0 authentication flow"
      ></ImageFigure>
      <p class="text-body-1">
        The web backend would be implemented as a
        <a href="https://12factor.net/">Twelve-Factor</a> application, making it
        horizontally scalable, portable across different environments (cloud or
        otherwise), and easy to maintain.
      </p>
      <h2 class="text-h4">Development methodologies</h2>

      <ImageFigure
        src="/static/kanban.png"
        caption="Kanban board"
      ></ImageFigure>
      <p class="text-body-1">
        For any project to succeed, it would need a solid project management
        plan. And we went with an
        <a href="https://agilemanifesto.org/">agile</a> approach. More
        concretely, we would have small iteration cycles, focusing on delivering
        vertical slices that works together. This ensures that the components of
        the system will always integrate with each other.
      </p>
      <ImageFigure
        src="/static/ci-cd.png"
        caption="CI/CD pipelines"
      ></ImageFigure>
      <p class="text-body-1">
        To further ensure the project development progress smoothly, I
        implemented CI/CD (continuous integration/delivery) pipelines for the
        code bases. Continuous integration ensures that the master branch is
        building correctly at all times, so a programmer can always integrate
        their work with the master branch. Continuous delivery makes sure the
        latest version of the application will always run in a production or
        production-like environments, making it easy to catch defects early.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";

@Component({
  components: { ImageFigure }
})
export default class SmartEVChargingStation extends Vue {}
</script>
