import { createApp } from 'vue'
import App from './App.vue'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './app.css'

// 路由
import router from './router/index'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
