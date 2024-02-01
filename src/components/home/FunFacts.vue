<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
    const odometers = document.querySelectorAll('.odometer');
    
    odometers.forEach((odometer) => {
        const countNumber = odometer.getAttribute('data-count');
        odometer.textContent = countNumber;
    });
    });
</script>
<template>
    <section class="fun-facts-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-fun-fact">
                        <h3>
                            <span class="odometer" data-count="1200">00</span>
                        </h3>
                        <p>მონაწილე</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-fun-fact bg-1">
                        <h3>
                            <span class="odometer" data-count="305">00</span>
                        </h3>
                        <p>მუნიციპალიტეტი</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-fun-fact bg-2">
                        <h3>
                            <span class="odometer" data-count="48">00</span>
                        </h3>
                        <p>სკოლა</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-fun-fact bg-3">
                        <h3>
                            <span class="odometer" data-count="50">00</span>
                        </h3>
                        <p>ოლიმპიადა</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>