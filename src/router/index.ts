import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory, Router } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    ...setupLayouts(routes),
  ],
})

export default router
