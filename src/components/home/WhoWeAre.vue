<script setup>
import { ref } from 'vue';
    const type = ref([
        'გუნდური',
        'ინდივიდუალური',
        'პირველკლასელთა'
    ])
</script>
<template>
    <section class="who-we-are ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="who-we-are-content">
                        <span>ვინ ვართ ჩვენ</span>
                        <h3>ოლიმპიადა განთიადი</h3>
                        <p>სასკოლო ოლიმპიადა <q>განთიადი</q> არის ორგანიზაცია, რომელიც ხელს უწყობს განათლების განვითარებას, წახალისებას. 
                            ჩვენთან თითოეული გამარჯვებული მონაწილე ჯილდოვდება შესაბამისი პრიზით და სერტიფიკატით. 
                            ოლიმპიადის ტესტებზე მუშაობენ კომპეტენტური მასწავლებლები და ფსიქოლოგები, რათა დავალებები ზუსტად შეესაბამებოდეს ბავშვების ცოდნის დონეს.
                             <q>განთიადი</q> მოსწავლეებს სთავაზობს რამდენიმე სახის ოლიმპიადას:</p>
                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->

                        <ul class="who-we-are-list">
                            <li v-for="(item, index) in type" :key="index">
                                <span>{{ index+1 }}</span>
                                {{ item }} ოლიმპიადა
                            </li>
                            <!-- <li>
                                <span>2</span>
                                Quality Educators
                            </li>
                            <li>
                                <span>3</span>
                                Safety and Security
                            </li>
                            <li>
                                <span>4</span>
                                Play to Learn
                            </li> -->
                        </ul>
                        <!-- <div class="who-we-are-btn">
                            <a href="#" class="default-btn">მეტის ნახვა</a>
                        </div> -->
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="who-we-are-image-wrap">
                        <img src="@/assets/img/who-we-are/who-we-are-2.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
        </section>
</template>