<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">OHS</h1>

      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton
              href="https://github.com/office-hour-scheduler/ohs"
              icon="github"
              >GitHub</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h4">Introduction</h2>
      <p class="text-body-1">
        OHS, short for office hour scheduler, is an application that allows
        students to schedule office hours with instructors. It is a team project
        built for a software engineering course at University of Toronto.
      </p>

      <ImageFigure
        src="/static/ohs-student.png"
        caption="Student booking a meeting"
      ></ImageFigure>
      <ImageFigure
        src="/static/ohs-instructor.png"
        caption="Instructor viewing a meeting"
      ></ImageFigure>

      <p class="text-body-1">
        OHS contains a SPA (single page application) built with React, and two
        backend microservices built with Flask, and serving GraphQL APIs. The
        backend services handles students and instructors respectively. The
        backing database is PostgreSQL.
      </p>
      <p class="text-body-1">
        I was most involved in implementing the backend services, and oversaw
        the design of the architecture. The backend follows a
        <a
          href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
        >
          Hexagonal Architecture </a
        >. The resulting system has no hard dependency on third-party services,
        since every usage of these services must go through an abstract
        interface. A side effect of this is that the system is very easy to unit
        test, since it is trivial to swap out a real service with a fake.
      </p>

      <h2 class="text-h4">Collaboration</h2>
      <ImageFigure
        src="/static/ohs-kanban.png"
        caption="OHS Kanban"
      ></ImageFigure>
      <p class="text-body-1">
        Since OHS was a team effort, effective collaboration was key for the
        project's success. We used GitHub issues in conjunction with GitHub
        Projects to do project management. A Kanban style project management
        strategy was a good fit for a group of students with wildly different
        schedules.
      </p>
      <ImageFigure
        src="/static/ohs-prs.png"
        caption="Pull requests"
      ></ImageFigure>
      <p class="text-body-1">
        To ensure the quality of the codebase, a pull request based work flow
        was implemented. The pull request must pass CI checks before it can be
        merged. This ensures that the master branch is always in a good state.
        We also practiced code review, although some PRs slipped through without
        reviews because we could not commit all of our time on this project
        during the school year.
      </p>
      <ImageFigure
        src="/static/ohs-ci.png"
        caption="CI pipelines"
      ></ImageFigure>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";
import IconButton from "@/components/IconButton.vue";

@Component({
  components: { ImageFigure, IconButton }
})
export default class Ohs extends Vue {}
</script>
