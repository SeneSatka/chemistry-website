<script setup lang="ts">
import { onMounted, ref } from "vue";
import type Element from "./Element";
import { getType, getNeon, getTextColor } from "./utils";

const props = defineProps<{ element: Element }>();

const shadow = ref(getNeon(getType(props.element)));
const style = ref(getTextColor(getType(props.element)));

import { Tooltip } from "flowbite";
import type { TooltipOptions, TooltipInterface } from "flowbite";
import type { InstanceOptions } from "flowbite";
import router from "@/router";

onMounted(() => {
  const $targetEl: HTMLElement | null = document.getElementById(
    `${props.element.symbol}-name`
  );

  const $triggerEl: HTMLElement | null = document.getElementById(
    `${props.element.symbol}-btn`
  );

  const options: TooltipOptions = {
    placement: "top",
    triggerType: "hover",
    onHide: () => {
      console.log("tooltip is shown");
    },
    onShow: () => {
      console.log("tooltip is hidden");
    },
    onToggle: () => {
      console.log("tooltip is toggled");
    },
  };

  const instanceOptions: InstanceOptions = {
    id: "tooltipContent",
    override: true,
  };

  /*
   * targetEl: required
   * triggerEl: required
   * options: optional
   */
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
  router.push(`/elements/${props.element.name}`);
};
</script>
<template>
  <div class="relative group">
    <button
      @click="click"
      :id="`${element.symbol}-btn`"
      type="button"
      :class="`text-shadow w-12 h-12 flex text-2xl justify-center items-center border-2 rounded-md ${shadow}`"
      :style="`${style}`"
    >
      {{ props.element.symbol }}
    </button>
    <div
      :id="`${element.symbol}-name`"
      role="tooltip"
      :class="`absolute z-10 invisible px-2 py-1 -translate-y-9 text-sm mb-30 -translate-x-2 font-medium text-white   opacity-0 shadow-lg group-hover:visible group-hover:opacity-100 transition-opacity duration-30 ${shadow}`"
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
      <!-- <div class="tooltip-arrow"></div> -->
    </div>
  </div>
</template>
