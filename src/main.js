import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/js/bootstrap.bundle.min'
// import './assets/js/main'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
