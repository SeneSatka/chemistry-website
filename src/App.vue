<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div class="bg-default w-full min-h-screen text-white">
    <Navbar />
    <RouterView />
  </div>
</template>
