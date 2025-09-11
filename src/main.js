import { createApp } from 'vue'
 // import './style.css'
 import App from './App.vue'
 import router from './modules/router'
 import { createPinia } from 'pinia'
 import ElementPlus from 'element-plus'
 import 'element-plus/dist/index.css'
 import axios from 'axios';
 import * as ElementPlusIconsVue from '@element-plus/icons-vue'
 // 将 Axios 添加到全局属性
 
 const app=createApp(App)
 app.config.globalProperties.$axios = axios;
 for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
 const pinia = createPinia()
 app.use(ElementPlus)
 app.use(router)
 app.use(pinia)
 app.mount('#app')
 // createApp(App).mount('#app')