<template>
    <div class="go-top" :class="{ active: isGoTopActive }" @click="scrollToTop">
      <i class='bx bx-up-arrow-alt'></i>
    </div>
</template>
  
<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Reactive variable to track whether the "go top" button should be active
  const isGoTopActive = ref(false);
  
  // Function to handle the scroll event
  const handleScroll = () => {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
  
    // Update the isGoTopActive variable based on the scroll position
    isGoTopActive.value = scrolled > 600;
  };
  
  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Register scroll event when the component is mounted
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  // Unregister scroll event when the component is unmounted
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>