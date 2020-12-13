<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">musicview</h1>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton
              href="https://github.com/MaT1g3R/musicview"
              icon="github"
              >GitHub</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <ImageFigure
        src="/static/musicview.png"
        caption="musicview in action"
      ></ImageFigure>
      <p class="text-body-1">
        musicview is a simple terminal based music player, it uses ncurses for
        the terminal UI, and had a SQLite database to store music library
        metadata. The UI had a fully working seek bar that updates in real time.
        It was my first multi-threaded program, featuring separate threads for
        the UI and the seek bar. The threads are synchronized using a
        <a href="https://en.wikipedia.org/wiki/Monitor_(synchronization)"
          >monitor</a
        >
        written from scratch using a lock, an event, and a condition variable.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";
import IconButton from "@/components/IconButton.vue";

@Component({ components: { ImageFigure, IconButton } })
export default class Musicview extends Vue {}
</script>
