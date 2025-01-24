<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import type Element from "./Element";
import { getType, getNeon, getTextColor } from "./utils";
import { Tooltip } from "flowbite";
import type { TooltipOptions, TooltipInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";
import router from "@/router";
import { useElementsStore, type sEType } from "@/stores/elements";

const props = defineProps<{ element: Element }>();

const shadow = ref(getNeon(getType(props.element)));
const style = ref(getTextColor(getType(props.element)));
const { selectedElement, setSelectedElement } = useElementsStore();
const lastSelected: Ref<sEType> = ref("all");
useElementsStore().$subscribe(
  (_, state) => {
    lastSelected.value = state.selectedElement;
    if (
      getType(props.element) != state.selectedElement &&
      state.selectedElement != props.element &&
      state.selectedElement != "all"
    ) {
      shadow.value = style.value = "";
    } else {
      shadow.value = getNeon(getType(props.element));
      style.value = getTextColor(getType(props.element));
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
      :class="`flex-col text-shadow w-12 h-12 flex  justify-center items-center border-2 rounded-md ${shadow} transition-all duration-500`"
      :style="`${style}`"
    >
      <span :class="`text-[8px]/[8px]  absolute left-1 top-1`">{{
        element.number
      }}</span>
      <span class="text-[22px]/[31px]"> {{ element.symbol }}</span>
      <span class="text-[8px]/[4px]">{{ element.atomic_mass.toFixed(2) }}</span>
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
