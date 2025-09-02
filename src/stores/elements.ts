import type {
  ElementClass,
} from "@/components/PeriodicTable/Elements/Element";
import type Element from "@/components/PeriodicTable/Elements/Element";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
export type sEType = Element | "all" | ElementClass;
export const useElementsStore = defineStore("elements", () => {
  const selectedElement: Ref<sEType> = ref("all");

  function setSelectedElement(el: sEType) {
    selectedElement.value = el;
  }
  return { selectedElement, setSelectedElement };
});
