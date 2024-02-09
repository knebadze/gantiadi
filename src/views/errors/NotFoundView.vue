<script setup>

</script>
<template>
<section class="error-area ptb-100">
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="error-content">
                    <img src="@/assets/img/404.png" alt="error">

                    <h3>Error 404 : page not found</h3>
                    <!-- <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p> -->

                    <router-link :to="'/'" class="default-btn">
                        მთავარზე დაბრუნება
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</section>
</template>