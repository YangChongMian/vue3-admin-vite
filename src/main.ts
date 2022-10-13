import { createApp } from 'vue'
// import './style.css'
import '@/assets/css/base.less'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router/index.js'

import App from './App.vue'

createApp(App).use(pinia).use(router).mount('#app')
