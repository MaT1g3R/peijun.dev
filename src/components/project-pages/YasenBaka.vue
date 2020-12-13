<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">YasenBaka</h1>

      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton
              href="https://github.com/MaT1g3R/YasenBaka"
              icon="github"
              >GitHub</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <p class="text-body-1">
        YasenBaka is a multi-purpose chat bot made for Discord. It was my very
        first serious programming project. It ended up being way more successful
        than I ever intended it to be, peaking at over 1000+ Discord server
        memberships. The main selling points of YasenBaka were the wide range of
        external APIs it integrated with to provide a rich user experience. I no
        longer maintain YasenBaka as I have since moved on from using Discord,
        but the lessons learned during its development were very valuable.
      </p>

      <p class="text-body-1">
        During YasenBaka's development, I used many different tools and
        technologies for the first time. It was my first attempt at using git
        and GitHub properly, including the issues and pull requests workflow. I
        setup continuous integration for the first time using Travis CI. I also
        used AWS and Docker for the first time to deploy and keep the bot
        running at all times.
      </p>

      <p class="text-body-1">
        The two most important lessons I learned however, were the power of
        async programming, and the benefits of a extremely short dev cycle.
      </p>

      <p class="text-body-1">
        As I have mentioned above, at one point the bot was active in more than
        1000 Discord servers. It never ran into any performance issues thanks to
        the async programming model, as most of the bot's features were IO
        bound. At the time of implementation, Python's async programming library
        <code>asyncio</code> were just introduced, and the async/await syntax
        was released with the latest Python version at that time. But even with
        such a new library ecosystem, it was able to handle YasenBaka's
        workload. <code>asyncio</code> has undergone massive improvements since
        then, and the ecosystem around it has matured. I think it's fair to say
        that <code>asyncio</code> can hold its own against its counter parts in
        other languages such as C# and JavaScript.
      </p>

      <p class="text-body-1">
        During YasenBaka's development, I had a test instance of the bot running
        to help development. The only thing I needed to do to test out code
        changes was to save the code on my local computer, and reload the bot.
        This simple yet effective workflow helped me develop new features at a
        very fast speed, and the overall developer experience was top notch. Of
        course such a workflow would not scale up to a team of developers, but I
        believe the principles of having a short iteration cycle is one of the
        most important qualities of a successful team. This is also one of the
        main reasons that we as an industry has adopted techniques like
        continuous integration/deployment as best practices.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";
import IconButton from "@/components/IconButton.vue";

@Component({ components: { ImageFigure, IconButton } })
export default class YasenBaka extends Vue {}
</script>
