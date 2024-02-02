<template>
    <div class="main-banner"> 
        <div class="main-banner-item banner-item-two">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="main-banner-content">
                                    <span>Play, Learn and Grow</span>
                                    <h1>შესაბამის ტექსტი ოლიმპიადაზე</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                    <div class="banner-btn">
                                        <router-link to="/events" class="default-btn">
                                            ოლიმპიადის ნახვა
                                        </router-link>
                                        <router-link to="/schedule" class="optional-btn">
                                            განრიგის ნახვა
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="main-banner-image-wrap">
                                    <img src="@/assets/img/main-banner/main-banner-1.png" alt="image">

                                    <div class="banner-image-wrap-shape">
                                        <img src="@/assets/img/main-banner/main-banner-shape-1.png" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-banner-shape">
            <div class="shape-5">
                <img src="@/assets/img/main-banner/banner-shape-5.png" alt="image">
            </div>

            <div class="shape-2">
                <img src="@/assets/img/main-banner/banner-shape-2.png" alt="image">
            </div>

            <div class="shape-6">
                <img src="@/assets/img/main-banner/banner-shape-6.png" alt="image">
            </div>

            <div class="shape-4">
                <img src="@/assets/img/main-banner/banner-shape-4.png" alt="image">
            </div>
        </div>
    </div>
</template>