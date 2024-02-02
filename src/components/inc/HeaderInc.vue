<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import { useRoute } from 'vue-router';
    import HamburgerMenu from './HamburgerMenu.vue';

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
            
            <HamburgerMenu />
            <div class="main-navbar " >
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
                                <li class="nav-item" :class="{'active': isRouteActive('/events')}">
                                    <router-link to="/events" class="nav-link" >
                                        ოლიმპიადები
                                    </router-link>
                                </li>
                                <li class="nav-item" :class="{'active': isRouteActive('/schedule')}">
                                    <router-link to="/schedule" class="nav-link" >
                                        განრიგი
                                    </router-link>
                                </li>
                                
                                <li class="nav-item" :class="{'active': isRouteActive('/rules')}">
                                    <router-link to="/rules" class="nav-link" >
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
                                            <router-link to="/score" class="nav-link" :class="{'active': isRouteActive('/score')}">
                                                ძებნა
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <a href="gallery.html" class="nav-link">
                                                რეიტინგი
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item" :class="{'active': isRouteActive('/pay')}">
                                    <router-link to="/pay" class="nav-link" >
                                        გადახდა
                                    </router-link>
                                </li>
                            </ul>

                            <div class="others-options d-flex align-items-center">

                                <div class="option-item">
                                    <a href="#" class="default-btn">დაგვიკავშირდით</a>
                                </div>
                            </div>
                        </div>
                        
                    </nav>
                    
                </div>
                
            </div>
            
            
        </div>
        <!-- End Navbar Area -->
    </div>
</template>
<style scoped>
    .icon-hamburger{
        right: 0px; 
        left: auto; 
        text-align: center; 
        text-indent: 0px; 
        font-size: 18px;
    }
</style>
