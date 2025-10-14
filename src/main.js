import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

// 引入初始化样式
import '@/assets/styles/base.css'
import myElement from '@/components/library'


const app = createApp(App)
app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(myElement);

app.mount('#app')
