<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>
<template>
  <div class="bg-default w-full min-h-screen text-white">
    <RouterView /> <Sidebar />
  </div>
</template>
