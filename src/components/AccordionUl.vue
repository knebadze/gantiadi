<script setup>
    import { defineProps, ref } from 'vue';
    const props = defineProps({
        accordionItems:Object
    })
    const activeIndex = ref(0)
    const toggleAccordion = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index;
    }
</script>
<template>
    <ul class="accordion">
        <li class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
            <a class="accordion-title" href="javascript:void(0)" @click="toggleAccordion(index)" :class="{ active: activeIndex === index }">
                <i class='bx bx-plus'></i>
                {{ item.title }}
            </a>

            <p class="accordion-content" :class="{ show: activeIndex === index }">
                {{ item.content }}
            </p>
        </li>

    </ul>
</template>