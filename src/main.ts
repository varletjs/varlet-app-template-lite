import App from './App.vue'
import router from '@/router'
import { createApp } from 'vue'

import '@/styles/common.less'
import '@varlet/touch-emulator'
import 'virtual:uno.css'

createApp(App).use(router).mount('#app')
