<script setup lang="ts">
import { ref, watch, type Ref } from "vue";
import rawElements from "./Elements/PeriodicTableElements";
import type ElementType from "./Elements/Element";
import Element from "./Elements/Element.vue";
import Free from "./Elements/Free.vue";
import { useElementsStore } from "@/stores/elements";
import Bar from "./ElementTypeBar/Bar.vue";
const elements: Ref<Array<ElementType>> = ref(
  rawElements as Array<ElementType>
);
const { setSelectedElement } = useElementsStore();
document.addEventListener("click", (e) => {
  const el: HTMLElement = e.target as HTMLElement;
  const closestButton = el?.closest("button");
  if (closestButton?.id.split("-")[0] != "atom") setSelectedElement("all");
});
</script>
<template>
  <div class="w-min">
    <div class="my-4 w-min">
      <div class="flex flex-row gap-2 w-min">
        <div v-for="g in 18" class="flex flex-col">
          <div v-for="p in 7">
            <div v-if="g == 3 && p == 6">
              
                <div
                  class="w-16 h-18 flex items-center justify-center flex-col"
                >
                  <span class="h-6"></span>
                  <span
                    class="w-8 h-8 border-2 rounded-full shadow-[inset_0_0_7px_#1c4dfc,inset_0_0_7px_#1c4dfc,inset_0_0_16px_#1c4dfc,0_0_7px_#1c4dfc,0_0_7px_#1c4dfc,0_0_16px_#1c4dfc]"
                  ></span
                  ><span
                    class="h-5 w-[2px] bg-gradient-to-b from-[#1c4dfc] to-white"
                  ></span>
                </div>
               
            </div>
            <div v-else-if="g === 3 && p === 7" >
               <div class="w-16 h-18 flex items-center justify-start flex-col">
                  <span
                    class="h-6 w-[2px] bg-gradient-to-b from-white to-[#523d26]"
                  ></span>
                  <span
                    class="w-8 h-8 border-2 rounded-full shadow-[inset_0_0_7px_#523d26,inset_0_0_7px_#523d26,inset_0_0_16px_#523d26,0_0_2px_#fff,0_0_7px_#523d26,0_0_7px_#523d26,0_0_16px_#523d26]"
                  ></span
                  ><span
                    class="h-5 w-[2px] bg-gradient-to-b to-white from-[#523d26]"
                  ></span>
                </div>
            </div>

            <div
              v-else-if="elements.find((e) => e.group === g && e.period === p)"
            >
              <Element
                :key="`${g}-${p}`"
                class="mt-2"
                :element="
                  elements.find((e) => e.group === g && e.period === p) ??
                  elements[0]
                "
              />
            </div>
            <div v-else>
              <Free class="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-2 w-min">
        <Free /> <Free />
        <div>
          <div class="w-16 h-18 flex items-center justify-center flex-col">
            <span class="h-8 w-[2px] bg-white"></span>
            <span
              class="ml-[37px] w-[39px] h-[2px] bg-gradient-to-r from-white to-[#1c4dfc]"
            ></span>
            <span class="h-8 w-[2px] bg-white"></span>
          </div>
          <div class="w-16 h-18 flex items-center justify-center flex-col">
            <span class="h-10 w-[2px] bg-white"></span>
            <span
              class="ml-[37px] w-[39px] h-[2px] bg-gradient-to-r from-white to-[#523d26]"
            ></span>
            <span class="h-6"></span>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-row gap-2">
            <Element
              v-for="element in elements.filter(
                (e) => e.group === 3 && e.period === 6
              )"
              :key="`${element.number}`"
              :element="element ?? elements[0]"
            />
          </div>
          <div class="flex flex-row gap-2">
            <Element
              :key="`${element.number}`"
              v-for="element in elements.filter(
                (e) => e.group === 3 && e.period === 7
              )"
              :element="element ?? elements[0]"
            />
          </div>
        </div>
      </div>
    </div>
    <Bar />
  </div>
</template>
