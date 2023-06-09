import { createApp } from 'vue'
import App from './App.vue'
import { pinia } from './stores/index.js'
// css的导入
import './assets/css/index.css'
// router的导入
import { router } from './router/index.js'

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
