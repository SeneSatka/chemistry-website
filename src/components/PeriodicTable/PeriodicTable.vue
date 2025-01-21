<script setup lang="ts">
import { ref, type Ref } from "vue";
import rawElements from "./Elements/PeriodicTableElements";
import type ElementType from "./Elements/Element";
import Element from "./Elements/Element.vue";
import { test } from "./Elements/utils";
const elements: Ref<Array<ElementType>> = ref(
  rawElements as Array<ElementType>
);
test();
</script>
<template>
  <div>
    <div class="flex m-8 flex-row gap-3">
      <div v-for="g in 18" class="flex flex-col gap-3">
        <div v-for="p in 7">
          <div v-if="elements.find((e) => e.group === g && e.period === p)">
            <Element
              :key="`${g}-${p}`"
              :element="
                elements.find((e) => e.group === g && e.period === p) ??
                elements[0]
              "
            />
          </div>
          <div v-else>
            <div class="w-12 h-12"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
