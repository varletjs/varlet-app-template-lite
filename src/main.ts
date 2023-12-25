import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@/styles/common.less'
import '@varlet/touch-emulator'
import 'virtual:uno.css'

createApp(App).use(router).use(createPinia()).mount('#app')
