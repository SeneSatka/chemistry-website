import type { ElementType } from "@/components/PeriodicTable/Elements/Element";
import type Element from "@/components/PeriodicTable/Elements/Element";
import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
export type sEType = Element | "all" | ElementType;
export const useElementsStore = defineStore("elements", () => {
  const selectedElement: Ref<sEType> = ref("all");

  function setSelectedElement(el: sEType) {
    selectedElement.value = el;
  }
  return { selectedElement, setSelectedElement };
});
