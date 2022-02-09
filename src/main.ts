import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/css/main.css'
import store from './store'

createApp(App).use(store).mount('#app')
