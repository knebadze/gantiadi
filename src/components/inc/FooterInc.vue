<script setup>
    import CopyRight from './CopyRight.vue'
</script>
<template>
     <section class="footer-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <h2>
                                <router-link to="/">განთიადი</router-link>
                            </h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul class="social">
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-pinterest-alt'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>საკონტაქტო</h3>

                        <ul class="footer-contact-info">
                            <li>
                                <i class='bx bxs-phone'></i>
                                <span>ნომერი</span>
                                <a href="tel:882569756">882-569-756</a>
                            </li>
                            <li>
                                <i class='bx bx-envelope'></i>
                                <span>Email</span>
                                <a href="/cdn-cgi/l/email-protection#f39b969f9f9cb3989687929ddd909c9e"><span class="__cf_email__" data-cfemail="036b666f6f6c43686677626d2d606c6e">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <i class='bx bx-map'></i>
                                <span>მისამართი</span>
                                175 5th Ave Premium Area, New York, NY 10010, United States
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>აქტიური ოლიმპიადები</h3>

                        <ul class="quick-links">
                            <li>
                                <a href="#">მათემატიკის ოლიმპიადა</a>
                            </li>
                            <li>
                                <a href="#">გუნდური ოლიმპიადა</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>ფოტო გალერეა</h3>

                        <ul class="photo-gallery-list">
                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-1.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-2.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-3.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-4.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-5.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-6.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-1.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-2.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>

                            <li>
                                <div class="box">
                                    <img src="@/assets/img/footer-gallery/footer-gallery-3.jpg" alt="image">
                                    <a href="#" target="_blank" class="link-btn"></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <CopyRight />
</template>