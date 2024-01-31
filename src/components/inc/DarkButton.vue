<script setup>
    import { ref, watch } from 'vue';

    // Function to set a given theme/color-scheme
    const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    };

    // Function to toggle between light and dark theme
    const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    setTheme(isDarkMode.value ? 'theme-dark' : 'theme-light');
    };

    // Reactive variable to track the current theme
    const isDarkMode = ref(false);

    // Watch for changes in the isDarkMode variable and update the theme accordingly
    watch(isDarkMode, (newValue) => {
    setTheme(newValue ? 'theme-dark' : 'theme-light');
    });

    // Immediately invoked function to set the theme on initial load
    (() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
        isDarkMode.value = true;
        setTheme('theme-dark');
    } else {
        isDarkMode.value = false;
        setTheme('theme-light');
    }
    })();
</script>
<template>
     <div class="dark-version">
        <label id="switch" class="switch">
            <input type="checkbox" @change="toggleTheme" id="slider">
            <span class="slider round"></span>
        </label>
    </div>
</template>