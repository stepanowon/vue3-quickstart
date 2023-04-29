import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App);
app.config.unwrapInjectedRef = true
window.vm = app.mount('#app')
