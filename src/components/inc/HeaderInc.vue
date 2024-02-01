<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRoute } from 'vue-router';

    // Reactive variable to track whether the navbar is sticky
    const isSticky = ref(false);

    // Function to handle the scroll event
    const handleScroll = () => {
        isSticky.value = window.scrollY > 120;
    };

    // Register scroll event when the component is mounted
    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    // Unregister scroll event when the component is unmounted
    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    const isRouteActive = (path) => {
        const route = useRoute();
        return route.path === path;
    };
</script>
<template>
    <div>
        <!-- <div class="copyright-area">
            <div class="container">
                <div class="">
                    <span class="text-white">599507612</span>
                </div>
            </div>
        </div> -->
    
   <!-- Start Navbar Area -->
        <div class="navbar-area " :class="{ 'is-sticky': isSticky }">
            <div class="main-responsive-nav">
                <div class="container">
                    <div class="main-responsive-menu">
                        <div class="logo">
                            <router-link to="/">
                                <img src="@/assets/img/logo-color-3.png" class="black-logo" alt="image">
                                <img src="@/assets/img/logo-color-3.png" class="white-logo" alt="image">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-navbar">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light" >
                        <router-link to="/" class="navbar-brand">
                            <img src="@/assets/img/logo-color-3.png" class="black-logo" alt="image">
                            <img src="@/assets/img/logo-color-3.png" class="white-logo" alt="image">
                        </router-link>

                        <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item" :class="{'active': isRouteActive('/')}">
                                    <router-link to="/" class="nav-link">
                                        მთავარი
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/events" class="nav-link" :class="{'active': isRouteActive('/events')}">
                                        ოლიმპიადები
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/schedule" class="nav-link" :class="{'active': isRouteActive('/schedule')}">
                                        განრიგი
                                    </router-link>
                                </li>
                                
                                <li class="nav-item">
                                    <router-link to="/rules" class="nav-link" :class="{'active': isRouteActive('/rules')}">
                                        წესები
                                    </router-link>
                                </li>
                                <li class="nav-item" :class="{'active': isRouteActive('/score')}">
                                    <router-link to="/score" class="nav-link">
                                        შედეგები 
                                        <i class='bx bx-chevron-down'></i>
                                    </router-link>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <router-link to="/score" class="nav-link">
                                                მათემატიკის ოლიმპიადა
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">
                                                რეიტინგი
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item">
                                    <router-link to="/pay" class="nav-link" :class="{'active': isRouteActive('/pay')}">
                                        გადახდა
                                    </router-link>
                                </li>

                                <!-- <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Teacher 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="teacher.html" class="nav-link">
                                                Teacher
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="teacher-details.html" class="nav-link">
                                                Teacher Details
                                            </a>
                                        </li>
                                    </ul>
                                </li> -->

                                <!-- <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Event 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="event.html" class="nav-link">
                                                Event
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="event-details.html" class="nav-link">
                                                Event Details
                                            </a>
                                        </li>
                                    </ul>
                                </li> -->

                                <!-- <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Class 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>

                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="class.html" class="nav-link">
                                                Class
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="class-details.html" class="nav-link">
                                                Class Details
                                            </a>
                                        </li>
                                    </ul>
                                </li> -->

                                <!-- <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        Blog 
                                        <i class='bx bx-chevron-down'></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <a href="blog.html" class="nav-link">
                                                Blog
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="blog-details.html" class="nav-link">
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </li> -->

                                <!-- <li class="nav-item">
                                    <a href="contact.html" class="nav-link">
                                        Contact
                                    </a>
                                </li> -->
                            </ul>

                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <!-- <div class="dropdown language-switcher d-inline-block">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language <i class='bx bx-chevron-down'></i></span>
                                        </button>
    
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/english.png" class="shadow-sm" alt="flag">
                                                <span>English</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/arab.png" class="shadow-sm" alt="flag">
                                                <span>العربيّة</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/germany.png" class="shadow-sm" alt="flag">
                                                <span>Deutsch</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/portugal.png" class="shadow-sm" alt="flag">
                                                <span>Português</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/china.png" class="shadow-sm" alt="flag">
                                                <span>简体中文</span>
                                            </a>
                                        </div>
                                    </div> -->
                                </div>

                                <div class="option-item">
                                    <a href="#" class="default-btn">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <!-- <div class="others-option-for-responsive">
                <div class="container">
                    <div class="dot-menu">
                        <div class="inner">
                            <div class="circle circle-one"></div>
                            <div class="circle circle-two"></div>
                            <div class="circle circle-three"></div>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="option-inner">
                            <div class="others-options d-flex align-items-center">
                                <div class="option-item">
                                    <div class="dropdown language-switcher d-inline-block">
                                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span>Language <i class='bx bx-chevron-down'></i></span>
                                        </button>
    
                                        <div class="dropdown-menu">
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/english.png" class="shadow-sm" alt="flag">
                                                <span>English</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/arab.png" class="shadow-sm" alt="flag">
                                                <span>العربيّة</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/germany.png" class="shadow-sm" alt="flag">
                                                <span>Deutsch</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/portugal.png" class="shadow-sm" alt="flag">
                                                <span>Português</span>
                                            </a>
                                            <a href="#" class="dropdown-item d-flex align-items-center">
                                                <img src="@/assets/img/china.png" class="shadow-sm" alt="flag">
                                                <span>简体中文</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="option-item">
                                    <a href="#" class="default-btn">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- End Navbar Area -->
    </div>
</template>
