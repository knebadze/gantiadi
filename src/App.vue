<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HeaderVue from "./components/inc/HeaderInc.vue";
import DarkButton from '@/components/inc/DarkButton.vue';
import GoTop from "./components/inc/GoTop.vue";
import FooterInc from "./components/inc/FooterInc.vue";
import NewslatterArea from './components/inc/NewsletterArea.vue'

</script>

<template>
  <div>
    <!-- Start Navbar Area -->
    <HeaderVue />
    <!-- End Navbar Area -->
    <Router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <!-- <component :is="getLayout($route)" :key="$route.path"> -->
          <component :is="Component" />
        <!-- </component> -->
      </transition>
    </Router-view>
    
    <!-- Start Newsletter Area -->
      <NewslatterArea />
    <!-- End Newsletter Area -->

    <!-- Start Footer Area -->
      <FooterInc />
    <!-- End Footer Area -->

      <!-- Start Go Top Area -->
        <GoTop />
      <!-- End Go Top Area -->

    <!-- dark version -->
      <DarkButton />
    <!-- dark version -->
  </div>
</template>

<style scoped>
.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

</style>
