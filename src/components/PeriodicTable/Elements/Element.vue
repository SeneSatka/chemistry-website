<script setup lang="ts">
import { ref } from "vue";
import type Element from "./Element";
import { getType, getNeon, getTextColor } from "./utils";

const props = defineProps<{ element: Element }>();

const shadow = ref(getNeon(getType(props.element)));
const style = ref(getTextColor(getType(props.element)));
</script>
<template>
  <div
    :class="`text-shadow w-12 h-12 flex text-2xl justify-center items-center border-2 rounded-md ${shadow}`"
    :style="`${style}`"
  >
    {{ props.element.symbol }}
  </div>
</template>
