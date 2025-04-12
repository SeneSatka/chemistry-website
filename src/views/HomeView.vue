<script setup lang="ts">
import PeriodicTable from "@/components/PeriodicTable/PeriodicTable.vue";
import ElementDetail from "./ElementDetail.vue";
</script>
<template>
  <div class=" mx-2 flex lg:flex-row sm:flex-col gap-4 flex-wrap w-screen h-full items-start   justify-start">
    <PeriodicTable />
    <ElementDetail  />
    
  </div>
</template>
<style scoped></style>
