<script setup lang="ts">
import { useElementsStore, type sEType } from "@/stores/elements";
import type { ElementType } from "../Elements/Element";
import { elementTypesArray, getNeon, getTextColor } from "../Elements/utils";
import { ref, type Ref } from "vue";
const props = defineProps<{ elementType: ElementType }>();
const shadow = ref(getNeon(props.elementType));
const style = ref(getTextColor(props.elementType));
const { setSelectedElement } = useElementsStore();
const lastSelected: Ref<sEType> = ref("all");
useElementsStore().$subscribe(
  (_, state) => {
    lastSelected.value = state.selectedElement;

    if (
      elementTypesArray.includes(state.selectedElement as string) &&
      props.elementType != state.selectedElement
    ) {
      shadow.value = style.value = "";
    } else {
      shadow.value = getNeon(props.elementType);
      style.value = getTextColor(props.elementType);
    }
  },
  { flush: "sync" }
);

const click = () => {
  if (lastSelected.value === props.elementType) setSelectedElement("all");
  else setSelectedElement(props.elementType);
};
</script>
<template>
  <button
    :id="`atom-type-${elementType}`"
    @click="click"
    class="flex flex-row mb-2 items-center gap-2 transition-all duration-500"
    :style="style"
  >
    <div
      :class="`w-5 h-5 border-2 rounded-full ${shadow} transition-all duration-500`"
    ></div>
    <div>{{ elementType }}</div>
  </button>
</template>
<style scoped></style>
