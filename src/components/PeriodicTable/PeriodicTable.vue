<script setup lang="ts">
import { ref, type Ref } from "vue";
import rawElements from "./Elements/PeriodicTableElements";
import type ElementType from "./Elements/Element";
import Element from "./Elements/Element.vue";
import Free from "./Elements/free.vue";
const elements: Ref<Array<ElementType>> = ref(
  rawElements as Array<ElementType>
);
</script>
<template>
  <div class="m-8">
    <div class="flex flex-row gap-3">
      <div v-for="g in 18" class="flex flex-col">
        <div v-for="p in 7">
          <div v-if="g == 3 && p == 6">
            <div class="w-12 h-40 flex items-center justify-start flex-col m-0">
              <div class="w-12 h-16 flex items-center justify-center flex-col">
                <span class="h-7"></span>
                <span
                  class="w-6 h-6 border-2 rounded-full shadow-[inset_0_0_7px_#1c4dfc,inset_0_0_7px_#1c4dfc,inset_0_0_16px_#1c4dfc,0_0_7px_#1c4dfc,0_0_7px_#1c4dfc,0_0_16px_#1c4dfc]"
                ></span
                ><span
                  class="h-3 w-[2px] bg-gradient-to-b from-[#1c4dfc] to-white"
                ></span>
              </div>
              <div class="w-12 h-24 flex items-center justify-start flex-col">
                <span
                  class="h-6 w-[2px] bg-gradient-to-b from-white to-[#523d26]"
                ></span>
                <span
                  class="w-6 h-6 border-2 rounded-full shadow-[inset_0_0_7px_#523d26,inset_0_0_7px_#523d26,inset_0_0_16px_#523d26,0_0_2px_#fff,0_0_7px_#523d26,0_0_7px_#523d26,0_0_16px_#523d26]"
                ></span
                ><span
                  class="h-12 w-[2px] bg-gradient-to-b to-white from-[#523d26]"
                ></span>
              </div>
            </div>
          </div>
          <div v-else-if="g === 3 && p === 7" class="hidden"></div>

          <div
            v-else-if="elements.find((e) => e.group === g && e.period === p)"
          >
            <Element
              :key="`${g}-${p}`"
              class="mt-3"
              :element="
                elements.find((e) => e.group === g && e.period === p) ??
                elements[0]
              "
            />
          </div>
          <div v-else>
            <Free class="mt-3" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-3">
      <Free /> <Free />
      <div>
        <div class="w-12 h-14 flex items-center justify-center flex-col">
          <span class="h-7 w-[2px] bg-white"></span>
          <span
            class="ml-[37px] w-[39px] h-[2px] bg-gradient-to-r from-white to-[#1c4dfc]"
          ></span>
          <span class="h-7 w-[2px] bg-white"></span>
        </div>
        <div class="w-12 h-[52px] flex items-center justify-center flex-col">
          <span class="h-7 w-[2px] bg-white"></span>
          <span
            class="ml-[37px] w-[39px] h-[2px] bg-gradient-to-r from-white to-[#523d26]"
          ></span>
          <span class="h-6"></span>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-row gap-3">
          <Element
            v-for="element in elements.filter(
              (e) => e.group === 3 && e.period === 6
            )"
            :element="element ?? elements[0]"
          />
        </div>
        <div class="flex flex-row gap-3">
          <Element
            v-for="element in elements.filter(
              (e) => e.group === 3 && e.period === 7
            )"
            :element="element ?? elements[0]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
