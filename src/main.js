import { createApp } from 'vue'
import '@/assets/less/index.less'
import App from './App.vue'
import router from './router'
import ElemetPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia'
import api from './api/api'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.$api = api
app.use(pinia)
app.use(ElemetPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router).mount('#app')
