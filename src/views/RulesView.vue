<script setup>
    import Accordion from '@/components/AccordionUl.vue';
    import { ref } from 'vue';
    
    const accordionItems =  ref([
        { 
            title: "გუნდური ოლიმპიადა", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "ერთტურიანი ოლიმპიადა", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "პირველკლასელთა ოლიმპიადა", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: "ორტურიანი ქართულის ოლიმპიადის წესები", 
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
        },
        { 
            title: 'ოლიმპიადა "განთიადის" ლიდერის წესები', 
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