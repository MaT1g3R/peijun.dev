<template>
  <figure>
    <img class="opaque-background" :src="src" :alt="caption" />
    <figcaption class="text-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ImageFigure extends Vue {
  @Prop() src!: string;
  @Prop() caption!: string;
}
</script>

<style scoped>
.opaque-background {
  background-color: white;
  max-width: 90%;
}
figure {
  padding: 10px;
}
</style>
