<script setup>
    import { defineProps, ref } from 'vue';
    const props = defineProps({
        accordionItems: Object,
        active: {
            type: Number,
            default: null,
        }
    })
    const activeIndex = ref(props.active)
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

            <div class="accordion-content" :class="{ show: activeIndex === index }">
                <span></span><p v-for="(item, index) in item.content" :key="index"> {{ `${index + 1}. ${item};` }}</p>
            </div>
        </li>

    </ul>
</template>