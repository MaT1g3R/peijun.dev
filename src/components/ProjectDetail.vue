<template>
  <component :is="$route.params.project"></component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SmartEVChargingStation from "@/components/project-pages/SmartEVChargingStation.vue";

@Component({
  components: {
    "smart-ev-charging-station": SmartEVChargingStation
  }
})
export default class ProjectDetail extends Vue {}
</script>

<style scoped></style>
