<script setup lang="ts">
import PeriodicTable from "@/components/PeriodicTable/PeriodicTable.vue";
import ElementDetail from "./ElementDetail.vue";
</script>
<template>
  <div class=" flex lg:flex-row sm:flex-col flex-wrap w-full h-full   justify-center">
    <PeriodicTable />
    <ElementDetail  />
    
  </div>
</template>
<style scoped></style>
