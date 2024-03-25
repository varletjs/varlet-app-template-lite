import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import dayjs from 'dayjs'

import '@/styles/common.less'
import '@varlet/touch-emulator'
import 'virtual:uno.css'

const app = createApp(App)

app.config.globalProperties.$dayjs = dayjs

app.use(router).use(createPinia()).mount('#app')
