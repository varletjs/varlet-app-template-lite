import { routes } from 'vue-router/auto-routes'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    ...routes
  ]
})

export default router
