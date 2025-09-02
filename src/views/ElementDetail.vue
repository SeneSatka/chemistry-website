<script setup lang="ts">

import type Element from '@/components/PeriodicTable/Elements/Element';
import type { ElementClass } from '@/components/PeriodicTable/Elements/Element';
import { ElementTypes } from '@/components/PeriodicTable/Elements/utils';
import { useElementsStore, type sEType } from '@/stores/elements';
import { onMounted, ref, type Ref } from 'vue';
const { selectedElement } = useElementsStore();

const data: Ref<sEType> = ref(selectedElement as sEType);
const isElement = ref(false);
const shadow: Ref<string | undefined> = ref("");
const style: Ref<string | undefined> = ref("");
const update = () => {
    if (typeof data.value == "string") {
        data.value = data.value as "all";
        shadow.value = ElementTypes.find(m => m.raw_name == "unknown")?.neon;
        style.value = ElementTypes.find(m => m.raw_name == "unknown")?.text_color;
    } else if ("raw_name" in data.value) {
        data.value = data.value as ElementClass;
    } else if ("name" in data.value) {
        isElement.value = true;
        data.value = data.value as Element;
        shadow.value = ElementTypes.find(m => m.raw_name == (data.value as Element).category)?.neon ||
            ElementTypes.find(m => m.raw_name == "unknown")?.neon;
        style.value = ElementTypes.find(m => m.raw_name == (data.value as Element).category)?.text_color ||
            ElementTypes.find(m => m.raw_name == "unknown")?.text_color;
    }
}
onMounted(() => {
    update();
});
useElementsStore().$subscribe((_, state) => {
    data.value = state.selectedElement as sEType;
    update();
}, { flush: 'sync' });

</script>
<template>
    <button id="atom-detail"
        :class="` text-lg cursor-auto flex-col  w-[400px]  mt-7   flex  px-4 pb-4 border rounded-md ${shadow} transition-all duration-500`">
        <div class="flex flex-col" v-if="data == 'all' || !isElement">
            <span class="text-3xl font-bold my-4" :style="style">Periodic Table</span>
            <span class=" text-left font-medium">The periodic table, also known as the periodic table of the elements,
                is an ordered arrangement of the chemical elements into rows ("periods") and columns ("groups"). It is
                an icon of chemistry and is widely used in physics and other sciences. It is a depiction of the periodic
                law, which states that when the elements are arranged in order of their atomic numbers an approximate
                recurrence of their properties is evident. The table is divided into four roughly rectangular areas
                called blocks. Elements in the same group tend to show similar chemical characteristics. </span>
            <span class="mt-1 text-left"><span class="font-bold">Source:</span> <a
                    class="text-blue-300 font-semibold"
                    href="https://en.wikipedia.org/wiki/Periodic_table">Vikipedia</a></span>
        </div>
        <div v-else>

            <div class="text-2xl my-4" :style="style"> {{ data.name }}</div>
            <div v-if="'bohr_model_3d' in data">
                <model-viewer :class="`w-full h-60 rounded-md  transition-all duration-500 ${shadow}`"
                    :src="data.bohr_model_3d" ar ar-modes="webxr scene-viewer quick-look" camera-controls
                    tone-mapping="neutral" poster="poster.webp" shadow-intensity="1" autoplay>
                    <div class="mt-1" :style="style">Bohr model of {{ data.name }}</div>
                    <div class="progress-bar hide" slot="progress-bar">
                        <div class="update-bar">

                        </div>
                    </div>
                </model-viewer>
                <div class="w-full text-left text-lg mt-2 flex flex-col">
                    <span class="font-extrabold ">Summary</span>
                    <span>{{ data.summary }}</span>
                    <span class="mt-1"><span class="font-extrabold ">Discovered by: </span><span class=""> {{
                            data.discovered_by }}</span></span>
                    <span class="mt-1"><span class="font-extrabold ">Electron Configuration: </span><span :style="style"
                            class="text-base"> {{ data.electron_configuration_semantic }}</span></span>
                    <span class="mt-1"><span class="font-extrabold ">Atomic Number: </span><span :style="style"
                            class="text-base"> {{ data.number }}</span></span>
                    <span class="mt-1"><span class="font-extrabold ">Atomic Mass: </span><span :style="style"
                            class="text-base"> {{ data.atomic_mass }}</span></span>

                </div>
            </div>
        </div>
    </button>
</template>
<style scoped></style>
