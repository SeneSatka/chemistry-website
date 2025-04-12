<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type Element from "./Element";
import { ElementTypes, elementTypesArray, getType } from "./utils";
import { Tooltip } from "flowbite";
import type { TooltipOptions, TooltipInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";
import { useElementsStore, type sEType } from "@/stores/elements";
import type { ElementClass } from "./Element";

const props = defineProps<{ element: Element }>();

const shadow = ref(
  ElementTypes.find(m => m.raw_name == props.element.category)?.neon ||
  ElementTypes.find(m => m.raw_name == "unknown")?.neon
);
const style = ref(
  ElementTypes.find(m => m.raw_name == props.element.category)?.text_color ||
  ElementTypes.find(m => m.raw_name == "unknown")?.text_color
);
const { setSelectedElement } = useElementsStore();
const lastSelected: Ref<sEType> = ref("all");
useElementsStore().$subscribe(
  (_, state) => {
    lastSelected.value = state.selectedElement;

    if (
      (getType(props.element) != (state.selectedElement as ElementClass).name &&
        state.selectedElement != props.element &&
        state.selectedElement != "all") ||
      (elementTypesArray.includes(state.selectedElement as string) &&
        (state.selectedElement as ElementClass).name != getType(props.element))
    ) {
      shadow.value = style.value = "";
    } else {
      shadow.value =   ElementTypes.find(m => m.raw_name == props.element.category)?.neon ||
      ElementTypes.find(m => m.raw_name == "unknown")?.neon
      style.value =   ElementTypes.find(m => m.raw_name == props.element.category)?.text_color ||
      ElementTypes.find(m => m.raw_name == "unknown")?.text_color
    }
  },
  { flush: "sync" }
);

onMounted(() => {
  const $targetEl: HTMLElement | null = document.getElementById(
    `${props.element.symbol}-name`
  );
  const $triggerEl: HTMLElement | null = document.getElementById(
    `atom-${props.element.symbol}-btn`
  );
  const options: TooltipOptions = {
    placement: "top",
    triggerType: "hover",
  };

  const instanceOptions: InstanceOptions = {
    id: "tooltipContent",
    override: true,
  };
  const tooltip: TooltipInterface = new Tooltip(
    $targetEl,
    $triggerEl,
    options,
    instanceOptions
  );
  document.body.addEventListener("mouseover", (e: MouseEvent) => {
    const btn = (e.target as HTMLElement).closest("button");
    if (!btn) {
      return;
    }

    if (btn?.id == $triggerEl?.id) tooltip.show();
  });
  document.body.addEventListener("mouseout", (e) => {
    const btn = (e.target as HTMLElement).closest("button");
    if (!btn) {
      return;
    }
    if (btn?.id == $triggerEl?.id) tooltip.hide();
  });
});
const click = () => {
  if (lastSelected.value === props.element) setSelectedElement("all");
  else setSelectedElement(props.element);
};
</script>
<template>
  <div class="relative group" :id="`atom-${element.symbol}-${element.number}`">
    <button
      @click="click"
      :id="`atom-${element.symbol}-btn`"
      type="button"
      :class="`flex-col text-shadow w-16 h-16 flex  justify-center items-center border-2 rounded-md ${shadow} transition-all duration-500`"
      :style="`${style}`"
    >
      <span :class="`text-[12px]/[12px]  absolute left-[6px] top-[6px]`">{{
        element.number
      }}</span>
      <span class="text-[26px]/[35px]"> {{ element.symbol }}</span>
      <span class="text-[12px]/[8px]">{{ element.atomic_mass.toFixed(2) }}</span>
    </button>
    <div
      :id="`${element.symbol}-name`"
      role="tooltip"
      :class="`absolute z-10 visi invisible pointer-events-none px-2 py-1 -translate-y-9 text-sm mb-30 -translate-x-2 font-medium text-white   opacity-0 shadow-lg group-hover:visible group-hover:opacity-100 transition-opacity duration-30 ${shadow}`"
      :style="`${style}`"
    >
      <div
        class="bg-slate-500 bg-opacity-80 px-2 py-1 rounded-lg cursor-default"
      >
        {{ element.name }}
      </div>

      <div
        class="border-solid border-8 w-0 h-0 left-3 absolute border-opacity-50 border-t-slate-500 border-transparent"
      ></div>
    </div>
  </div>
</template>
