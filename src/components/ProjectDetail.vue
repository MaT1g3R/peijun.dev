<template>
  <component :is="$route.params.project"></component>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SmartEVChargingStation from "@/components/project-pages/SmartEVChargingStation.vue";
import PeijunDev from "@/components/project-pages/PeijunDev.vue";
import CloudflareDdns from "@/components/project-pages/CloudflareDdns.vue";
import Ohs from "@/components/project-pages/Ohs.vue";
import PythonOption from "@/components/project-pages/PythonOption.vue";
import Musicview from "@/components/project-pages/Musicview.vue";
import YasenBaka from "@/components/project-pages/YasenBaka.vue";

@Component({
  components: {
    "smart-ev-charging-station": SmartEVChargingStation,
    "peijun-dev": PeijunDev,
    "cloudflare-ddns": CloudflareDdns,
    ohs: Ohs,
    "python-option": PythonOption,
    musicview: Musicview,
    "yasen-baka": YasenBaka
  }
})
export default class ProjectDetail extends Vue {}
</script>

<style scoped></style>
