<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">Option</h1>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton href="https://github.com/MaT1g3R/option" icon="github"
              >GitHub</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h4">Introduction</h2>
      <p class="text-body-1">
        Option is a Python library that implements the Option and Either monads
        commonly used in functional programming. It leverages the Python typing
        module in conjunction with the
        <a href="http://mypy-lang.org/">mypy</a> type checker to ensure a great
        user experience. At the time when I wrote this library, I was learning
        Rust, and thought the Option and Result types were handy for error
        handling, and decided to port it over to Python. I had no idea what a
        monad meant at that time, but these types were my first taste of
        functional programming
      </p>
      <p class="text-body-1">
        Option is currently used in production at
        <a href="https://garnercorp.com/#!/">Garner</a>
      </p>

      <h2 class="text-h4">CI</h2>
      <ImageFigure
        src="/static/option-ci.png"
        caption="CI pipeline"
      ></ImageFigure>
      <p class="text-body-1">
        The CI pipeline for Option was responsible of linting, running unit
        tests, and publishing the library to
        <a href="https://pypi.org/">PyPI</a>. The lint stage ensures the code is
        styled correctly, and more importantly, runs mypy to ensure the code
        type checks. After all tests and checks passes, a new version of the
        library is automatically published.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";
import IconButton from "@/components/IconButton.vue";

@Component({ components: { ImageFigure, IconButton } })
export default class PythonOption extends Vue {}
</script>
