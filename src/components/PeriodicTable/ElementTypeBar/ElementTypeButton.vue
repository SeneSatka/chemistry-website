<script setup lang="ts">
import { useElementsStore, type sEType } from "@/stores/elements";
import type { ElementClass, ElementType } from "../Elements/Element";
import { ElementTypes} from "../Elements/utils";
import { ref, type Ref } from "vue";
const props = defineProps<{ elementType: ElementType }>();
const elementClass: Ref<ElementClass> = ref(ElementTypes.find(m => m.name == props.elementType) as ElementClass);
const shadow = ref(ElementTypes.find(m => m.name == props.elementType)?.neon ||
  ElementTypes.find(m => m.raw_name == "unknown")?.neon);
const style = ref(ElementTypes.find(m => m.name == props.elementType)?.text_color ||
  ElementTypes.find(m => m.raw_name == "unknown")?.text_color);
const { setSelectedElement } = useElementsStore();
const lastSelected: Ref<sEType> = ref("all");
useElementsStore().$subscribe(
  (_, state) => {
    lastSelected.value = state.selectedElement;
    if (
      ElementTypes.find(m => m.raw_name == (state.selectedElement as ElementClass)?.raw_name) &&
      elementClass.value.raw_name != (state.selectedElement as ElementClass).raw_name
    ) {
      shadow.value = style.value = "";
    } else {
      shadow.value = ElementTypes.find(m => m.name == props.elementType)?.neon ||
        ElementTypes.find(m => m.raw_name == "unknown")?.neon
      style.value = ElementTypes.find(m => m.name == props.elementType)?.text_color ||
        ElementTypes.find(m => m.raw_name == "unknown")?.text_color
    }
  },
  { flush: "sync" }
);

const click = () => {
  if (lastSelected.value === elementClass.value) setSelectedElement("all");
  else setSelectedElement(elementClass.value);
};
</script>
<template>
  <button :id="`atom-type-${elementType}`" @click="click"
    class="flex flex-row items-center gap-2 transition-all duration-500" :style="style">
    <div :class="`w-6 h-6 border-2 rounded-full ${shadow} transition-all duration-500`"></div>
    <div class="text-xl">{{ elementType }}</div>
  </button>
</template>
<style scoped></style>
