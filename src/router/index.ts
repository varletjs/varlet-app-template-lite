import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...setupLayouts(routes)
  ]
})

export default router
