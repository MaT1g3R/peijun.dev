<template>
  <div>
    <v-container>
      <h1 class="text-h2 text-center">Cloudflare DDNS</h1>

      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <IconButton
              href="https://github.com/MaT1g3R/cloudflare-ddns"
              icon="github"
              >GitHub</IconButton
            >
          </v-col>
        </v-row>
      </v-container>

      <h2 class="text-h4">Introduction</h2>
      <p class="text-body-1">
        Cloudflare DDNS solves the issue of not having a static IP address for
        public DNS records with typical residential network. It is a dynamic DNS
        solution implemented with
        <a href="https://www.cloudflare.com/">Cloudflare</a> as the DNS
        provider. It uses <a href="https://www.terraform.io/">Terraform</a> to
        update records in Cloudflare.
      </p>

      <h2 class="text-h4">Automation</h2>
      <ImageFigure
        src="/static/terraform-cloudflare.png"
        caption="Scheduled GitLab CI pipelines"
      ></ImageFigure>
      <p class="text-body-1">
        Initially, I ran Cloudflare DDNS as a cron job. It was working smoothly
        but had two issues. The messages from Terraform for each run would
        produce a massive amount of mail, and upgrading Terraform version was
        somewhat annoying. So I decided to convert the cron job into a scheduled
        GitLab CI pipeline.
      </p>
      <p class="text-body-1">
        The pipeline contains two steps: first it would build a docker image
        containing the desired Terraform version, then it would run the image.
        Since the docker image is cached between each run, it's usually really
        fast to build and does not waste disk space. The introduction of this
        pipeline allows me to upgrade Terraform by editing a single variable in
        a text file, and shows me a fancy UI of the run history.
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton.vue";
import ImageFigure from "@/components/project-pages/ImageFigure.vue";

@Component({ components: { ImageFigure, IconButton } })
export default class CloudflareDdns extends Vue {}
</script>
