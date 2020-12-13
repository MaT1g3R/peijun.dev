<template>
  <v-btn :href="href" target="_blank" rounded>
    <v-icon left :class="cssClass"></v-icon>
    <slot></slot>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class IconButton extends Vue {
  @Prop() href!: string;
  @Prop() icon!: string;
  @Prop({ default: "fab" }) typ!: string;
  protected cssClass = `${this.typ} fa-${this.icon}`;
}
</script>
