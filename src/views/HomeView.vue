<script setup lang="ts">
import PeriodicTable from "@/components/PeriodicTable/PeriodicTable.vue";
import ElementDetail from "./ElementDetail.vue";
</script>
<template>
  <div class=" mx-2 flex    w-screen h-full   justify-center">
    <div class="flex lg:flex-row items-start justify-start gap-4 sm:flex-col flex-wrap pb-10">
      <PeriodicTable />
      <ElementDetail />
    </div>
  </div>
</template>
<style scoped></style>
