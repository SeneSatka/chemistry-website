<script setup lang="ts">
import type Element from '@/components/PeriodicTable/Elements/Element';
import { useElementsStore } from '@/stores/elements';
import { ref, type Ref } from 'vue';
const { selectedElement } = useElementsStore();
const data:Ref<Element>=ref(selectedElement as Element);
useElementsStore().$subscribe((mutation, state) => {
    data.value = state.selectedElement as Element;
});
</script>
<template><div>Detail {{ data.name }}</div></template>
<style scoped></style>
