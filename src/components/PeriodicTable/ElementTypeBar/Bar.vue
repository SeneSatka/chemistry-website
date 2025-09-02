<script setup lang="ts">
import ElementTypeButton from "./ElementTypeButton.vue";
</script>
<template>
  <div class="">
    <div class="grid grid-cols-5 grid-rows-2 gap-1">
      <ElementTypeButton element-type="Alkali Metal" />
      <ElementTypeButton element-type="Alkaline Earth Metal" />
      <ElementTypeButton element-type="Transition Metal" />
      <ElementTypeButton element-type="Post Transition Metal" />
      <ElementTypeButton element-type="Metalloid" />
      <ElementTypeButton element-type="Reactive Nonmetal" />
      <ElementTypeButton element-type="Noble Gas" />
      <ElementTypeButton element-type="Lanthanide" />
      <ElementTypeButton element-type="Actinide" />
      <ElementTypeButton element-type="Unknown" />
    </div>
  </div>
</template>
<style scoped></style>
