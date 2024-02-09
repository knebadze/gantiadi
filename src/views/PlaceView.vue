<script setup>
    import Accordion from '@/components/AccordionUl.vue';
    import { ref } from 'vue';
    const accordionItems =  ref([
        { 
            title: "ახალციხე", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "გორი", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "მცხეთა", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "ბორჯომი", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        
        
    ])
</script>
<template>
    <div>
        <div class="testimonials-area bg-color " style="height: 2px;"></div>
        <section class="privacy-policy-area ptb-100">
            <div class="container">
                <div class="privacy-policy-accordion">
                    <Accordion :accordionItems="accordionItems"/>
                </div>
            </div>
        </section>
    </div>
</template>
