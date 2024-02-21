<script setup>
    // import Accordion from '@/components/AccordionUl.vue';
    import { ref } from 'vue';
    const accordionItems =  ref([
        { 
            title: "ახალციხე",
            content:[
                {
                    class: 'პირველი, მოერე',
                    place: 'მესხეთის ქუჩა',
                    date: '29.02.2024',
                    time: '12:00',
                },
                {
                    class: 'მესამე, მეოთხე',
                    place: 'თამარ მეფის ქუჩა',
                    date: '01.03.2024',
                    time: '13:00',
                }
            ] 
            
            
        },
        { 
            title: "გორი", 
            content:[
                {
                    class: 'პირველი, მოერე',
                    place: 'მესხეთის ქუჩა',
                    date: '29.02.2024',
                    time: '12:00',
                }
            ]  
        },
        { 
            title: "მცხეთა", 
            content:[
                {
                    class: 'პირველი, მოერე',
                    place: 'მესხეთის ქუჩა',
                    date: '29.02.2024',
                    time: '12:00',
                },
                {
                    class: 'მესამე, მეოთხე',
                    place: 'თამარ მეფის ქუჩა',
                    date: '01.03.2024',
                    time: '13:00',
                }
            ]  
        },
        { 
            title: "ბორჯომი", 
            content:[
                {
                    class: 'პირველი, მოერე',
                    place: 'მესხეთის ქუჩა',
                    date: '29.02.2024',
                    time: '12:00',
                }
            ]  
        },
        
        
    ])
    const activeIndex = ref(null)
    const toggleAccordion = (index) => {
        activeIndex.value = activeIndex.value === index ? null : index;
    }
</script>
<template>
    <div>
        <div class="testimonials-area bg-color " style="height: 2px;"></div>
        <section class="privacy-policy-area ptb-100">
            <div class="container">
                
                <div class="privacy-policy-accordion">
                    <h3 class="mb-3">ჩატარების ადგილები:</h3>
                    <ul class="accordion">
                        <li class="accordion-item" v-for="(item, index) in accordionItems" :key="index">
                            <a class="accordion-title" href="javascript:void(0)" @click="toggleAccordion(index)" :class="{ active: activeIndex === index }">
                                <i class='bx bx-plus'></i>
                                {{ item.title }}
                            </a>

                            <div class="accordion-content" :class="{ show: activeIndex === index }">
                                <div class="row row-cols-1 row-cols-lg-2 gy-1 g-lg-1">
                                    <div class="col" v-for="(i, ind) in item.content" :key="ind">
                                        <p><strong>ადგილი:</strong> {{ i.place }}</p>
                                        <p><strong>კლასი:</strong> {{ i.class }}</p>
                                        <p><strong>თარიღი:</strong> {{ i.date }}</p>
                                        <p><strong>საათი:</strong> {{ i.time }}</p>
                                    </div>

                                </div>
                                <!-- <span></span><p v-for="(item, index) in item.content" :key="index"> {{ `${index + 1}. ${item};` }}</p> -->
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
