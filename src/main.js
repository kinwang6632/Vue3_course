import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import './assets/tailwind.css'
import router from './router'
import state from './store/index'
const app = createApp(App)
app.use(router)
app.use(state)
app.mount('#app')

