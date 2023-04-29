import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App1.vue'
//import App from './App2.vue'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.mount('#app')