<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const isRouteActive = (path) => {
        const route = useRoute();
        return route.path === path;
    };

    // hamburger
    const navbar_nav = ref(false); 

    const toggleNavbarNav = () =>{
        navbar_nav.value = !navbar_nav.value
    }

    const navbar_link = ref(false); 

    const toggleNavLink = () =>{
        navbar_link.value = !navbar_link.value
    }
</script>
<template>
    <div class="main-responsive-nav">
        <div class="container">
            <div class="main-responsive-menu mean-container">
                <div class="mean-bar">
                    <a 
                        href="#" 
                        class="meanmenu-reveal " 
                        style="right: 0px; left: auto; text-align: center; text-indent: 0px; font-size: 18px;" 
                        @click="toggleNavbarNav"
                    >
                        <span v-show="!navbar_nav"><span><span></span></span></span>{{ navbar_nav ? 'X' :''  }}
                    </a>
                    <nav class="mean-nav" >
                        <ul class="navbar-nav" v-show="navbar_nav">
                            <li class="nav-item " @click="event => {navbar_nav = false}">
                                <router-link to="/" class="nav-link" :class="{'active': isRouteActive('/')}">
                                    მთავარი
                                </router-link>
                            </li>
                            <li class="nav-item " @click="event => {navbar_nav = false}">
                                <router-link to="/events" class="nav-link" :class="{'active': isRouteActive('/events')}">
                                    ოლიმპიადები
                                </router-link>
                            </li>
                            <li class="nav-item " @click="event => {navbar_nav = false}">
                                <router-link to="/schedule" class="nav-link" :class="{'active': isRouteActive('/schedule')}">
                                    განრიგი
                                </router-link>
                            </li>
                            <li class="nav-item " @click="event => {navbar_nav = false}">
                                <router-link to="/rules" class="nav-link" :class="{'active': isRouteActive('/rules')}">
                                    წესები
                                </router-link>
                            </li>
                            

                            <li class="nav-item" @click="toggleNavLink">
                                <a href="#" class="nav-link" :class="{'active': isRouteActive('/score')}">
                                    შედეგები 
                                    <i class="bx bx-chevron-down"></i>
                                </a>
                                <ul class="dropdown-menu" style=" display: block;" v-show="navbar_link">
                                    <li class="nav-item" @click="event => {navbar_nav = false}">
                                        <router-link to="/score" class="nav-link" :class="{'active': isRouteActive('/score')}">
                                            ძებნა
                                        </router-link>
                                    </li>

                                    <li class="nav-item" @click="event => {navbar_nav = false}">
                                        <a href="blog-details.html" class="nav-link">
                                            რეიტინგი
                                        </a>
                                    </li>
                                </ul>
                            <a class="mean-expand " href="#" style="font-size: 18px">{{ !navbar_link ?'+' : '-' }}</a></li>
                            <!-- class="mean-clicked"  - -->
                            <li class="nav-item " @click="event => {navbar_nav = false}">
                                    <router-link to="/pay" class="nav-link" :class="{'active': isRouteActive('/pay')}">
                                    გადახდა
                                </router-link>
                            </li>
                            <li class="nav-item mean-last" @click="event => {navbar_nav = false}">
                                <a href="contact.html" class="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/logo-color-3.png" class="black-logo" alt="image">
                        <img src="@/assets/img/logo-color-3.png" class="white-logo" alt="image">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>