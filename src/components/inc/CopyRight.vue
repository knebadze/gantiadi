<template>
    <div class="copyright-area">
      <div class="container">
        <div class="copyright-area-content">
          <p>
            Copyright @{{ currentYear }} Gantiadi. All Rights Reserved by
            <a href="#" target="_blank">
              
            </a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Get the current year dynamically
    const currentYear = new Date().getFullYear();
  </script>