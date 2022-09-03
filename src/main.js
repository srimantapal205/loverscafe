import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "@/assets/scss/style.scss"; 
import "bootstrap/dist/js/bootstrap.js"
createApp(App).use(store).use(router).mount('#app')
